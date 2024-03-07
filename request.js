import needle from 'needle';

const data = {
    bookname: '',
    isbn: '',
    author: '',
    yearpublished: '',
};

needle.post('http://localhost:3000/find-by-isbn-author', (err,res) => {
    console.log(body);
});

needle.post('http://localhost:3000/find-by-author', (err, res) => {
    console.log(res.body);  
});