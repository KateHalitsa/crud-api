const http = require('http');

const userId = 'b938cd10-8768-41d6-99ec-e356ac0c0546'; // change for your ID
const data = JSON.stringify({
    username: 'AliceUpdated',
    age: 26,
    hobbies: ['reading', 'coding']
});//you can change this for testing

const options = {
    hostname: 'localhost',
    port: 4000,
    path: `/api/users/${userId}`,
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let responseData = '';
    res.on('data', chunk => responseData += chunk);
    res.on('end', () => {
        console.log('Status code:', res.statusCode);
        console.log('Response body:', responseData);
    });
});

req.write(data);
req.end();
