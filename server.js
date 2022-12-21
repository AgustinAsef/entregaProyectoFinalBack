//esto es servidor
import express from "express"
import productRoutes from "./routes/productsRouter.js"
import ContainerMsj from "./container/ContainerMsg.js"

/* import cartRoutes from "./routes/cartRouter.js"
 */
const containerMsj = new ContainerMsj()


const {Server: HttpServer} = require ('http')
const {Server: IOServer} = require('socket.io') 

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const app = express()
//motor de plantilla
app.set('view engine', 'ejs')
app.set('views', './views')

//ruta raiz
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use("/productos", productRoutes)

const PORT = process.env.PORT || 8090

app.listen(PORT, ()=>{
    console.log('esta vivoooo!!')
}) 

app.on("error", error => console.log("error al crear el servidor"))

//coneccion al server
io.on('connection', socket => {
    console.log(`nuevo cliente conectado, tu usuario es ${socket.id}`)
//emite el array de mensajes
    containerMsj.getAll().then(messages => {
     socket.emit('messages', messages)
    })
//los recibe y los pushea al servidor
    socket.on('message', messagesData =>{
    
    containerMsj.save(messagesData),

    containerMsj.getAll().then(messages => {
        io.sockets.emit('messages', messages)
       })
    })    
})

/* //enrutador cart
app.get('/cart', mdl1, (req, res)=>{//obtiene todos los carritos
    cart.getAll().then(cart => {        
        res.json(cart)
    })
})

app.get('/:id/cart', (req, res)=>{//obtiene el carrito por su id y los productos guardados en el 
    let {id} = req.params
    cart.getById(id).then(cart => {            
        res.json(cart)
    })
})

app.post('/cart/:usuario', (req, res)=>{//crea un carrito y devuelve su id
    let {usuario} = req.params
    let today = new Date();
    let fecha = today.getDate() + '-' + ( today.getMonth() + 1 ) + '-' +  today.getFullYear()
    var randomId = Math.floor(Math.random()*10000000)
    let id = randomId

    let newCart ={
        id: id,
        usuario: usuario,
        creationFech: fecha,
        cart: []
    }

    cart.postNewCart(newCart).then(cart => {
        res.json(newCart.id)
    })
    
})

app.post('/:id/cart/:idProduct', (req, res)=>{//introduce un producto al carrito por el id del producto (/:id = id del usuario o del carrito /cart/:idProduct = id del producto)
    let {id, idProduct} = req.params
    id= parseInt(id)
    idProduct = parseInt(idProduct)                                 
    products.getById(idProduct).then(prod =>{
        cart.saveObjInCArt(id, prod).then(() =>{
            res.json(`se agrego el producto correctamente`)
        })
    })
})

app.delete('/:id/cart', (req, res)=>{//elimina un carrito por su id
    let {id} = req.params
    id= parseInt(id)
    cart.deleteCart(id).then(()=>{
        res.json("se elimino el carrito")
    })
})

app.delete('/:id/cart/:idProduct', (req, res)=>{//elimina un producto de un carrito por su id
    let {id, idProduct} = req.params
    id= parseInt(id)
    idProduct = parseInt(idProduct)
    cart.deleteObjInCart(id, idProduct).then(() =>{
        res.json(`se elimino el producto correctamente`)
    })
}) */