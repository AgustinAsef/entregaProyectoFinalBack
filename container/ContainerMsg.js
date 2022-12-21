import knexConection from '../options/mySqlDb.js'

class ContainerMsj{ 
    
     getAll (){
        return knexConection('mesaggeDTB').select('*').limit(20)
    }    

    save (producto){
        const newObj = knexConection('mesaggeDTB').insert(producto)
        return newObj
    } 

    deleteById (id){
        return knexConection('mesaggeDTB').where('id', id).del()
    }
}

export default ContainerMsj