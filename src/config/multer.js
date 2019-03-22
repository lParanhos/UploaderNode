const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    /**
     * Pasta default para salvar o arquivo, caso o storage/destination não esteja definido
     */
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        // Local onde o arquivo será salvo
        destination: (req, file, cb) =>  {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        // usado para garantir que não seja sobreposto uma imagem ou arquivo com o mesmo nome
        filename: (req, file, cb) => {
            // Eu crio um hash de 16 bites
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);// Se der erro já para aqui

                //Aqui eu refaço o nome do arquivo
                const filename = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, filename)// e retorno o mesmo 
            })
        }

    }),
    limits: {
        // aqui eu tenho um limitador do tamanho do arquivo
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        // aqui eu coloco as extensoes dos arquivos que eu vou suportar
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif",
            "text/csv"
        ];
        //Conferindo o tipo de arquivo recebido
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)
        }else{
            cb(new Error('Invalid file type.')) // Se for alguma extensão não aceite ele retorna errro
        }
    }
}