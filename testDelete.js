const http = require('http');

const userId = 'b938cd10-8768-41d6-99ec-e356ac0c0546';// change for your ID

const options = {
    hostname: 'localhost',
    port: 4000,
    path: `/api/users/${userId}`,
    method: 'DELETE'
};

const req = http.request(options, (res) => {
    console.log('Status code:', res.statusCode);
    res.on('data', chunk => {});
    res.on('end', () => console.log('User deleted'));
});

req.end();
