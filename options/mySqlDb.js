import  knex  from "knex"

const knexConection = knex ({
    client: 'mysql',
    connection:{
        host: '127.0.0.1',
        user: 'root',
        database: 'misqlschems',
    }
})

export default knexConection