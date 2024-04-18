import express from 'express';
import fs from 'fs';

// instantiate the server
const app = express();
app.use(express.json());

// POST method to add books
app.post('/add-book', (req, res) => {
    const { bookname, isbn, author, yearpublished } = req.body;

    // check if all required fields are present and not empty
    if (!bookname || !isbn || !author || !yearpublished) {
        res.json({ success: false });
        return;
    }

    // create string representation of the book entry
    const bookEntry = `${bookname},${isbn},${author},${yearpublished}\n`;
    // append the book entry to the books.txt file
    fs.appendFile('books.txt', bookEntry, (err) => {
        if (err) {
            res.json({ success: false });
            return;
        }
        res.json({ success: true });
    });
});

// GET method to retrieve book details by ISBN and Author
app.get('/find-by-isbn-author', (req,res) => {
    const { isbn, author } = req.query;
    // read data from file
    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) throw err;

        const lines = data.split('\n');
        const result = [];

        lines.forEach(line => {
            const line_element = line.split(',');

            if(line_element.indexOf(req.query.isbn) == 1 && line_element.indexOf(req.query.author) == 2){
                console.log('Found it: ', + line);
                result.push(line);
            }
        });
    });
    res.send(result);
});

// GET method to retrieve book details by Author
app.get('/find-by-author', (req,res) =>{
    const { author } = req.query;
    // read data from file
    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) throw err;

        const lines = data.split('\n');
        const result = [];

        lines.forEAch(line => {
            const line_element = line.split(',');

            if(line_element.indexOf(req.query.author) == 2){
                console.log('Found it: ', + line);
                result.push(line);
            }
        });
    });
    res.send(result);
});

app.listen(3000, () => { console.log('Server started at port 3000')} );