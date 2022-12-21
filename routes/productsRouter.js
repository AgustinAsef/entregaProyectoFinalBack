import { Router } from "express"
import ContainerProducts from "../container/ContainerProducts.js"

const productRoutes = new Router()
const containerProducts = new ContainerProducts()


function mdl1(req, res, next) {
    if (req.query.rol !== "admin") {
        res.status(500).send("Usuario no autorizado")
    }
    next()
}

productRoutes.get('/', async (req, res)=>{//obtiene todos los productos
    try {
        const prods = await containerProducts.getAll()
        res.json(prods)
    } catch (error) {
        res.send(error)
    }

})

productRoutes.get('/:id', async (req, res)=>{//obtiene los productos por id
    try {
        let {id} = req.params
        id = parseInt(id)
        const prod = await containerProducts.getById(id)
        res.json(prod)
    } catch (error) {
        res.send(error)
    }
})

productRoutes.post('/', mdl1, async (req, res)=>{ //crea los productos quede en el minuto 43 del video
    console.log("entrando al post")
    try {
            let newObj = req.body
            let today = new Date()
            let creationFech = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' +  today.getDate()
            const newProduct = {...newObj, creationFech}
            let ids = await containerProducts.save(newProduct)
            res.json(ids)         
    } catch (error) {
        console.log(error)
        }
    })
    
productRoutes.put('/:id', mdl1, async (req, res)=>{//modifica los productos por su id
    try {
        let objToModifi = req.body
        let {id} = req.params
        let objACtualiced = await containerProducts.remplace(objToModifi, id)
        res.json(objACtualiced)        
    } catch (error) {
        res.send(error)
        }
    })
    
productRoutes.delete('/:id', mdl1, async (req, res)=>{//elimina los productos por su id
    try {
        let {id} = req.params
        let objDelet = await containerProducts.deleteById(id)        
        res.json(objDelet)
    } catch (error) {
        res.send(error)
        }
    })

    export default productRoutes;