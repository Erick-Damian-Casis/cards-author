const express = require('express');
const server = express();
const {HomeRoutes, QuotesRoutes} = require('./routes')
const {NotFoundMiddleware} = require('./middlewares')

server.use(express.static("./public"));
server.use(express.json());

server.use('/',HomeRoutes);
server.use('/',QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(8080,()=>{
    console.log("El servidor esta corriendo en el puerto: " + 8080);
})