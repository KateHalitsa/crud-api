const http = require('http');

const data = JSON.stringify({
    username: 'Kat',
    age: 23,
    hobbies: ['reading']
});//you can change this for testing

const options = {
    hostname: 'localhost',
    port: 4000,
    path: '/api/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log('Status code:', res.statusCode);
        console.log('Response body:', responseData);
    });
});

req.on('error', (err) => {
    console.error('Error:', err.message);
});

req.write(data);
req.end();
