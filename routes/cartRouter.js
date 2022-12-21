import { Router } from "express"

const cartRoutes = new Router()

function mdl1(req, res, next) {
    if (req.query.rol !== "admin") {
        res.status(500).send("Usuario no autorizado")
    }
    next()
}

cartRoutes.get('/', mdl1, async (req, res)=>{//obtiene todos los carritos
    cart.getAll().then(cart => {        
        res.json(cart)
    })
})

cartRoutes.get('/:id', (req, res)=>{//obtiene el carrito por su id y los productos guardados en el 
    let {id} = req.params
    cart.getById(id).then(cart => {            
        res.json(cart)
    })
})

cartRoutes.post('/:usuario', (req, res)=>{//crea un carrito y devuelve su id
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

cartRoutes.post('/:id/:idProduct', (req, res)=>{//introduce un producto al carrito por el id del producto (/:id = id del usuario o del carrito /cart/:idProduct = id del producto)
    let {id, idProduct} = req.params
    id= parseInt(id)
    idProduct = parseInt(idProduct)                                 
    products.getById(idProduct).then(prod =>{
        cart.saveObjInCArt(id, prod).then(() =>{
            res.json(`se agrego el producto correctamente`)
        })
    })
})

cartRoutes.delete('/:id', (req, res)=>{//elimina un carrito por su id
    let {id} = req.params
    id= parseInt(id)
    cart.deleteCart(id).then(()=>{
        res.json("se elimino el carrito")
    })
})

cartRoutes.delete('/:id/:idProduct', (req, res)=>{//elimina un producto de un carrito por su id
    let {id, idProduct} = req.params
    id= parseInt(id)
    idProduct = parseInt(idProduct)
    cart.deleteObjInCart(id, idProduct).then(() =>{
        res.json(`se elimino el producto correctamente`)
    })
})