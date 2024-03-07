import needle from 'needle';

needle.post(
    'http://localhost:3000/submit-data',
    { name: 'Denise' },   // can be an object or a string
    (err, res) => {
      console.log(res.body);
    }
  );
