import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { log } from "console";
//rgba(243, 238, 255, 0.843)
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Book",
  password: "Beans@19",
  port: 2010,
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




app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });