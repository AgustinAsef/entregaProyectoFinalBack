import knexConection from "../options/mySqlDb.js";

(async ()=>{
    try {
    /*    console.log('iniciando la coneccion')
        await knexConection.schema.dropTableIfExists("mesaggeDTB")

        await knexConection.schema.createTable('mesaggeDTB', (table) => {
            table.increments('id').primary()
            table.string('autor').notNullable()
            table.string('creationFech')
            table.string('hour')
        }) */
          let newObj =  {
            "autor": "agustinbattiganeasef@gmail.com",
            "mensaje": "Aguante boquita",
            "creationFech": "4-12-2022",
            "hour": "00:09"
          }
        await knexConection('mesaggeDTB').insert(newObj) 
        console.log('creado la tabla')

    } catch (error) {
        console.log(error.message);
    }finally{
        console.log('finaliza la conexion')
        knexConection.destroy()
    }
})();