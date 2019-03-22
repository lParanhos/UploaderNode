const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
routes.get('/', (req, res) => {
    return res.json({ hello: 'Hello World' });
})
// Endpoint para salvar arquivos - o "multer" usado é um middleware que será executado entre a requisicao
// o 'file' é o cominho por onde virá o arquivo no req
routes.post('/posts', multer(multerConfig).single('file'),  (req, res) => {
    console.log(req.file)
    return res.json({ status: 'Succes =) File uploaded !' })
})

module.exports = routes;