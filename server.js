import express from 'express';

// instantiate the server
const app = express();
app.use(express.json());


app.post('/add-book', (req,res) => {


});


app.get('/find-by-isbn-author', (req,res) => {
    readFile(book.txt, 'utf8', (err, data) => {
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
    readFile(book.txt, 'utf8', (err, data) => {
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