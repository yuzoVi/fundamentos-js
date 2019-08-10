const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //pegar dados estaticos
app.use(bodyParser.urlencoded({ extended: true })) //transformar json
app.use(bodyParser.json()) //transformar json

//app.get('/teste', (req, res) => res.send(new Date))


//upload

const multer  = require('multer')

const storage = multer.diskStorage({
    destination : function(req, file, callback){ //definir a pasta
        callback(null, './upload')
    },
    filename: function (req, file, callback){ //nomear o arquivo
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end('ocurreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

app.listen(8080, () => console.log('Executando....'))