import knexConection from '../options/mySqlDb.js'

class ContainerProducts{ 
    
     getAll (){
        return knexConection('products').select('*').limit(50)
    }    
    
     getById (id){
        return knexConection('products').where('id', id).select('*')
    }

    save (producto){
        const newObj = knexConection('products').insert(producto)
        return newObj
    } 

     remplace (objToModifi, id){
        console.log(objToModifi, "producto que recibo para modificar")
        console.log(id, "id que recibo")
        const remplaceObj = knexConection('products').where('id', id).update(objToModifi)
        return remplaceObj
    } 

     deleteById (id){
        return knexConection('products').where('id', id).del()
    }
}

export default ContainerProducts