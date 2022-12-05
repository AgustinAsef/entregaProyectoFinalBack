//esto es servidor
const express = require ('express')
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

const app = express()

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//motor de plantilla
app.set('view engine', 'ejs')
app.set('views', './views')

//ruta raiz
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//configuracion para traer archivos
const Container = require('./container/container.js')
const products = new Container('./container/products.json')
const messages = new Container('./container/message.json')

//config de puerto
const PORT = process.env.PORT || 8090

//Middleware
function mdl1(req, res, next) {
    if (req.query.rol !== "admin") {
        res.status(500).send("Usuario no autorizado")
    }
    next()
}

//coneccion al server
io.on('connection', socket => {
    console.log('nuevo cliente conectado')
//emite el array de mensajes
    messages.getAll().then(messages => {
     socket.emit('messages', messages)
    })
//los recibe y los pushea al servidor
    socket.on('message', messagesData =>{
    messages.save(messagesData),

    messages.getAll().then(messages => {
        io.sockets.emit('messages', messages)
       })
    })    
})

//ruta de productos y metodos
app.get('/productos', (req, res)=>{
    products.getAll().then(products => {
        res.render('main', {products})
    })
})

app.get('/productos/:id', (req, res)=>{
    let {id} = req.params
    id = parseInt(id)
    products.getById(id).then(prod =>{
        res.json(prod)
    })
})

app.post('/productos', mdl1, (req, res)=>{
    let { name, price, thumbnail } = req.body 
    let id
    products.getAll().then(products => {
        if (products.length == 0) {
            id = 1
        }else{
            id = products.length +1
        }    
    })
    let articulo ={ name : name, price : price, thumbnail : thumbnail} 
    const newProduct = {...articulo, id}
    products.save(newProduct)
    res.redirect('/productos')
    })
    
app.put('/productos/:id', mdl1, (req, res)=>{
    let { name, price, thumbnail } = req.body
    let { id } = req.params
    id = parseInt(id)
    let producto = { name : name, price : price, thumbnail : thumbnail}

    products.getAll().then(newProductModifi=>{
        let obj = newProductModifi.find(obj => obj.id === parseInt(id))
        let index = newProductModifi.indexOf(obj)
        let productModifi = {...producto, id}
        if (!obj) {
            res.json({msg: "no se encontro el producto"})
            }else{
                products.remplace(productModifi, index)
                res.json({msg: "producto modificado con exito"})
            }
         })
    })

app.delete('/productos', mdl1, (req, res)=>{
    products.deleteAll()
    })
    
app.delete('/productos/:id', mdl1, (req, res)=>{
    let {id} = req.params
    products.deleteById(id)
    })


//configuracion de incio del server y error
const server = httpServer.listen(PORT, ()=>{
    console.log('esta vivoooo!!')
})

server.on("error", error => console.log("error al crear el servidor"))