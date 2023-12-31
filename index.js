import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Book",
  password: "PassWord",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
    let result = await db.query("SELECT * FROM books");
    result = result.rows;
    let lenght = result.length;
    console.log(result);
    res.render("index.ejs", { result, lenght});
});

app.get("/Book/:id",  async (req, res) => {
    const id = req.params.id;
    let result = await db.query(`SELECT * FROM books WHERE id=${id}`);
    console.log(result.rows);
    res.render("book.ejs", { data: result.rows });
});

app.get("/search", async (req, res) => {
  let request = req.query.query;
  console.log(request);
  let result = await db.query(`SELECT * FROM books WHERE name LIKE '%${request}%'`);
  console.log(result.rows);
  result = result.rows
  res.render("index.ejs", {result, lenght: result.length})
})

app.get("/add/book", async (req, res) => {
  res.render("add_books.ejs");
})


app.post("/add", async (req, res) => {
  try {
    const bookName = req.body.name;
    const about = req.body.about;
    const rating = req.body.rating;

    const insertQuery = `INSERT INTO books (name, about, rating) VALUES ('${bookName}', '${about}', '${rating}')`;
    await db.query(insertQuery);

    res.redirect("/");
  } catch (error) {
    console.error("Error adding a book:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });