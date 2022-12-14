import knexConection from '../options/mySqlDb.js'

class ContainerCart{

    async getAll (req, res){
        try {
            const all = await knexConection('cart')
            return JSON.parse(all)
        } catch (error) {
            const errorMsg = 'no se encontraron resultados'
            return errorMsg
        }
    }

    async getById(id){
        try {
            const leer = await fs.readFile(this.path, "utf-8")
            let data = JSON.parse(leer)
            const obj = data.find (obj => obj.id === id)
            if (!obj) {
                return obj            
            }else{
               return obj
            }              
        } catch (error) {
            errorMsg = "no se pudo obtener el producto carrito"
            return (errorMsg)        
        }
    }

    async postNewCart(obj){
        try {
            const leer = await fs.readFile(this.path, "utf-8")
            let data = JSON.parse(leer)
            data.push(obj)
            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return console.log(obj.id) 
        } catch (error) {
            errorMsg = "no se pudo crear el carrito"
            return (errorMsg)        }
    }

    async saveObjInCArt(id, prod){
        try {
            const leer = await fs.readFile(this.path, "utf-8")
            let data = JSON.parse(leer)
            const obj = data.find (obj => obj.id === id)

            obj.cart.push(prod)

            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return console.log(obj.id) 
        } catch (error) {
            errorMsg = "no se pudo agregar al carrito"
            return (errorMsg)
        }
    }

    async deleteCart(id){
        try {
            const leer = await fs.readFile(this.path, "utf-8")
            let data = JSON.parse(leer)
            const obj = data.find (obj => obj.id === id)

            obj.cart=[]

            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return console.log(obj.id) 
        } catch (error) {

            errorMsg = "no se pudo eliminar al carrito"
            return (errorMsg)
        }
    }

    async deleteObjInCart(id, idProduct){
        try {
            const leer = await fs.readFile(this.path, "utf-8")
            let data = JSON.parse(leer)
            const obj = data.find (obj => obj.id === id)
            
            let objDelet = obj.cart.filter(obj => obj.id !== idProduct)
            obj.cart = objDelet

            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return(obj)
        } catch (error) {

            let errorMsg = "no se pudo eliminar al carrito"
            return (errorMsg)
        }    }
}
module.exports=ContainerCart