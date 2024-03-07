import express from 'express';
import fs from 'fs';

// instantiate the server
const app = express();
app.use(express.json());


app.post('/add-book', (req,res) => {
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


app.get('/find-by-isbn-author', (req,res) => {
    fs.readFile(book.txt, 'utf8', (err, data) => {
        if (err) throw err;

        const lines = data.split('\n');
        const result = [];

        lines.forEAch(line => {
            const line_element = line.split(',');

            if(line_element.indexOf(req.query.isbn) == 1 && line_element.indexOf(req.query.author) == 2){
                console.log('Found it: ', + line);
                result.push(line);
            }
        });
    });
    res.send(result);
});


app.get('/find-by-author', (req,res) =>{
    fs.readFile(book.txt, 'utf8', (err, data) => {
        if (err) throw err;

        var lines = data.split('\n');
        var result = [];

        lines.forEAch(line => {
            var line_element = line.split(',');

            if(line_element.indexOf(req.query.author) == 2){
                console.log('Found it: ', + line);
                result.push(line);
            }
        });
    });
    res.send(result);
});


// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );