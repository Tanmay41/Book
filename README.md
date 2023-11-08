# Book

## Description

This is a web application for managing a collection of books. Users can view a list of books, search for specific books, and add new books to the collection.

## Features

- View a list of books.
- Search for books by name.
- View details of a specific book.
- Add new books to the collection.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- EJS (Embedded JavaScript) for templating
- Other libraries and dependencies (list them here)

## Getting Started

1. Clone this repository to your local machine.

    ```shell
    git clone https://github.com/Tanmay41/Book
    ```

2. CD into the repo

    ```shell
    cd book
    ```

3. Install the required dependencies.

    ```shell
    npm install
    ```
4. Set up your PostgreSQL database and update the database connection details in your code.

    - Create new DB called books
    - create new table named books by typing following code into you pgAdmin shell
      ```shell
      CREATE TABLE books (
      id SERIAL PRIMARY KEY NOT NULL UNIQUE,
      name TEXT,
      about TEXT,
      rating INT
      )
      ```
    - Add date into the table by typing the following code into your pgAdmin shell
      ```shell
      INSERT INTO Books (name, about, rating) VALUES
          ('To Kill a Mockingbird', 'A classic novel exploring themes of racial injustice and moral growth in the American South.', 9),
          ('1984', 'A dystopian novel that delves into surveillance, propaganda, and the dangers of totalitarianism.', 9),
          ('The Great Gatsby', 'A tale of excess, wealth, and the American Dream in the Jazz Age.', 8),
          ('The Catcher in the Rye', 'A coming-of-age novel that follows the adventures of a young man named Holden Caulfield.', 7),
          ('Harry Potter Series', 'A beloved fantasy series about a young wizard''s adventures at Hogwarts School of Witchcraft and Wizardry.', 9);
      ```

6. Start the application.

    ```shell
    nodemon index.js
    ```


5. Open a web browser and access the application at `http://localhost:3000`.

## Usage

- Visit the root URL to see the list of books.
- Use the search feature to find specific books by name.
- Click on a book to view its details.
- Add new books using the "Add Book" feature.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork on GitHub.
5. Submit a pull request to the main repository.

## Contact

- Tanmay
- tanmayror19@gmail.com

Feel free to contact me if you have any questions or suggestions!