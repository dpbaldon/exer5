import needle from 'needle';

const newBook = {
    bookname: 'The Little Prince',
    isbn: '978-0156012195',
    author: 'Antoine Saint-Exupery',
    yearpublished: '1943'
};

needle.post('http://localhost:3000/add-book', (err,res) => {
    console.log(res.body);
});

needle.post('http://localhost:3000/find-by-isbn-author', (err,res) => {
    console.log(res.body);
});

needle.post('http://localhost:3000/find-by-author', (err, res) => {
    console.log(res.body);  
});