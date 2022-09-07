require('dotenv').config();

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:' + process.env.VITE_SITE_PORT);
    res.header('Access-Control-Allow-Headers', '*');
    // Continue to JSON Server router
    next();
});

server.post('/api/subscribe', (req, res) => {
    if (req.body.email !== '') {
        res.jsonp({
            status: true,
            successText: 'Подписка успешно оформлена!',
        });
    }
});

server.use('/api', router);

server.listen(process.env.VITE_API_PORT, () => {
    console.log('JSON Server is running');
});
