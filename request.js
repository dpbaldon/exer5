import needle from 'needle';

const book = {
    bookname: 'The Little Prince',
    isbn: '978-0156012195',
    author: 'Antoine Saint-Exupery',
    yearpublished: '1943'
};

needle.post('http://localhost:3000/add-book', (err,res) => {
    console.log(res.body);
});

needle.post('http://localhost:3000/find-by-isbn-author/book?isbn=978-0-7475-3269-9', (err,res) => {
    console.log(res.body);
});

needle.post('http://localhost:3000/find-by-author/book?author=J.K Rowling', (err, res) => {
    console.log(res.body);  
});