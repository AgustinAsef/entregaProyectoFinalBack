 use ecommerce
switched to db ecommerce

> db.mensajes.insertMany([{author:'aldo@gmail.com', message:'Hola'}, {author:'dante@gmail.com', message:'como estan'}, {author:'german@gmail.com', message:'buenos dias'}, {author:'belen@hotmail.com', message:'terminaron el tp?'}, {author:'matias@msn.com', message:'yo recien lo subi'}, {author:'patricia@gmail.com', message:'hoy es mi cumple'}, {author:'jose@msn.com', message:'llego tarde'}, {author:'sandra@hotmail.com', message:'donde esta dante?'}, {author:'estefania@gmail.com', message:'les llegaron las fotos?'}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("63aaef1cd3fbc74412f3332d"),
                ObjectId("63aaef1cd3fbc74412f3332e"),
                ObjectId("63aaef1cd3fbc74412f3332f"),
                ObjectId("63aaef1cd3fbc74412f33330"),
                ObjectId("63aaef1cd3fbc74412f33331"),
                ObjectId("63aaef1cd3fbc74412f33332"),
                ObjectId("63aaef1cd3fbc74412f33333"),
                ObjectId("63aaef1cd3fbc74412f33334"),
                ObjectId("63aaef1cd3fbc74412f33335")
        ]
}

> db.mensajes.insertOne({author:'ultimo@gmail.com', message:'ultimo mensaje'})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("63aaf032d3fbc74412f33336")
}

> mensajes.find()
uncaught exception: ReferenceError: mensajes is not defined :
@(shell):1:1
> db.mensajes.find()
{ "_id" : ObjectId("63aaef1cd3fbc74412f3332d"), "author" : "aldo@gmail.com", "message" : "Hola" }
{ "_id" : ObjectId("63aaef1cd3fbc74412f3332e"), "author" : "dante@gmail.com", "message" : "como estan" }
{ "_id" : ObjectId("63aaef1cd3fbc74412f3332f"), "author" : "german@gmail.com", "message" : "buenos dias" }
{ "_id" : ObjectId("63aaef1cd3fbc74412f33330"), "author" : "belen@hotmail.com", "message" : "terminaron el tp?" }
{ "_id" : ObjectId("63aaef1cd3fbc74412f33331"), "author" : "matias@msn.com", "message" : "yo recien lo subi" }
{ "_id" : ObjectId("63aaef1cd3fbc74412f33332"), "author" : "patricia@gmail.com", "message" : "hoy es mi cumple" }
{ "_id" : ObjectId("63aaef1cd3fbc74412f33333"), "author" : "jose@msn.com", "message" : "llego tarde" }
{ "_id" : ObjectId("63aaef1cd3fbc74412f33334"), "author" : "sandra@hotmail.com", "message" : "donde esta dante?" }
{ "_id" : ObjectId("63aaef1cd3fbc74412f33335"), "author" : "estefania@gmail.com", "message" : "les llegaron las fotos?" }
{ "_id" : ObjectId("63aaf032d3fbc74412f33336"), "author" : "ultimo@gmail.com", "message" : "ultimo mensaje" }


db.productos.insertMany([{product:'agua mineral', price:250}, {product:'gaseosa', price:450}, {product:'cerveza', price:1200}, {product:'fernet', price:1900}, {product:'vodka', price:2220}, {product:'energizante', price:2500}, {product:'vino', price:3210}, {product:'champagne', price:4500}, {product:'aperitivo', price:4100}, {product:'ultimo', price:4950}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("63ab0663d3fbc74412f33342"),
                ObjectId("63ab0663d3fbc74412f33343"),
                ObjectId("63ab0663d3fbc74412f33344"),
                ObjectId("63ab0663d3fbc74412f33345"),
                ObjectId("63ab0663d3fbc74412f33346"),
                ObjectId("63ab0663d3fbc74412f33347"),
                ObjectId("63ab0663d3fbc74412f33348"),
                ObjectId("63ab0663d3fbc74412f33349"),
                ObjectId("63ab0663d3fbc74412f3334a"),
                ObjectId("63ab0663d3fbc74412f3334b")
        ]
}

> db.productos.find()
{ "_id" : ObjectId("63ab0663d3fbc74412f33342"), "product" : "agua mineral", "price" : 250 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33343"), "product" : "gaseosa", "price" : 450 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33344"), "product" : "cerveza", "price" : 1200 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33345"), "product" : "fernet", "price" : 1900 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33346"), "product" : "vodka", "price" : 2220 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33347"), "product" : "energizante", "price" : 2500 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33348"), "product" : "vino", "price" : 3210 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33349"), "product" : "champagne", "price" : 4500 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334a"), "product" : "aperitivo", "price" : 4100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334b"), "product" : "ultimo", "price" : 4950 }

> db.mensajes.count()
10
> db.productos.count()
10
>

> db.productos.insertOne({product:'agregado ultimo', price:100})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("63ab0782d3fbc74412f3334c")
}

> db.productos.find({"price":{$lt:1000}})
{ "_id" : ObjectId("63ab0663d3fbc74412f33342"), "product" : "agua mineral", "price" : 250 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33343"), "product" : "gaseosa", "price" : 450 }
{ "_id" : ObjectId("63ab0782d3fbc74412f3334c"), "product" : "agregado ultimo", "price" : 100 }


> db.productos.find({"price":{$gte:1000, $lte:3000}})
{ "_id" : ObjectId("63ab0663d3fbc74412f33344"), "product" : "cerveza", "price" : 1200 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33345"), "product" : "fernet", "price" : 1900 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33346"), "product" : "vodka", "price" : 2220 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33347"), "product" : "energizante", "price" : 2500 }
>

> db.productos.find({"price":{$gt:3000}})
{ "_id" : ObjectId("63ab0663d3fbc74412f33348"), "product" : "vino", "price" : 3210 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33349"), "product" : "champagne", "price" : 4500 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334a"), "product" : "aperitivo", "price" : 4100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334b"), "product" : "ultimo", "price" : 4950 }


> db.productos.find().sort({price:1})
{ "_id" : ObjectId("63ab0782d3fbc74412f3334c"), "product" : "agregado ultimo", "price" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33342"), "product" : "agua mineral", "price" : 250 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33343"), "product" : "gaseosa", "price" : 450 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33344"), "product" : "cerveza", "price" : 1200 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33345"), "product" : "fernet", "price" : 1900 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33346"), "product" : "vodka", "price" : 2220 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33347"), "product" : "energizante", "price" : 2500 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33348"), "product" : "vino", "price" : 3210 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334a"), "product" : "aperitivo", "price" : 4100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33349"), "product" : "champagne", "price" : 4500 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334b"), "product" : "ultimo", "price" : 4950 }


> db.productos.find({},{"product":1}).sort({price:1}).skip(2).limit(1)
{ "_id" : ObjectId("63ab0663d3fbc74412f33343"), "product" : "gaseosa" }


> db.prosuctos.update({},{$set:{"stock":100}},{upsert:false,multi:true})
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
> db.productos.update({},{$set:{"stock":100}},{upsert:false,multi:true})
WriteResult({ "nMatched" : 11, "nUpserted" : 0, "nModified" : 11 })
> db.productos.find()
{ "_id" : ObjectId("63ab0663d3fbc74412f33342"), "product" : "agua mineral", "price" : 250, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33343"), "product" : "gaseosa", "price" : 450, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33344"), "product" : "cerveza", "price" : 1200, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33345"), "product" : "fernet", "price" : 1900, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33346"), "product" : "vodka", "price" : 2220, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33347"), "product" : "energizante", "price" : 2500, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33348"), "product" : "vino", "price" : 3210, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33349"), "product" : "champagne", "price" : 4500, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334a"), "product" : "aperitivo", "price" : 4100, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334b"), "product" : "ultimo", "price" : 4950, "stock" : 100 }
{ "_id" : ObjectId("63ab0782d3fbc74412f3334c"), "product" : "agregado ultimo", "price" : 100, "stock" : 100 }


> db.productos.update({"price":{$gte:4000}}, {$set:{"stock":0}}, {upsert:false, multi:true})
WriteResult({ "nMatched" : 3, "nUpserted" : 0, "nModified" : 3 })
> db.productos.find({"price":{$gte:4000}})
{ "_id" : ObjectId("63ab0663d3fbc74412f33349"), "product" : "champagne", "price" : 4500, "stock" : 0 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334a"), "product" : "aperitivo", "price" : 4100, "stock" : 0 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334b"), "product" : "ultimo", "price" : 4950, "stock" : 0 }


> db.productos.deleteMany({"price":{$lte:1000}})
{ "acknowledged" : true, "deletedCount" : 3 }
> db.productos.find().sort({price:1})
{ "_id" : ObjectId("63ab0663d3fbc74412f33344"), "product" : "cerveza", "price" : 1200, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33345"), "product" : "fernet", "price" : 1900, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33346"), "product" : "vodka", "price" : 2220, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33347"), "product" : "energizante", "price" : 2500, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33348"), "product" : "vino", "price" : 3210, "stock" : 100 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334a"), "product" : "aperitivo", "price" : 4100, "stock" : 0 }
{ "_id" : ObjectId("63ab0663d3fbc74412f33349"), "product" : "champagne", "price" : 4500, "stock" : 0 }
{ "_id" : ObjectId("63ab0663d3fbc74412f3334b"), "product" : "ultimo", "price" : 4950, "stock" : 0 }

---->CREO UN USUARIO LECTOR pepe1

> use admin
switched to db admin
> db.createUser({user:"pepe1", pwd:"asd456", roles:[{role:"read", db:"ecommerce"}]})
Successfully added user: {
        "user" : "pepe1",
        "roles" : [
                {
                        "role" : "read",
                        "db" : "ecommerce"
                }
        ]
}

>mongo -u pepe1
MongoDB shell version v5.0.14
Enter password:

no pude realizar las pruebas porque no puedo ingresar con el usuario ya q no me deja escribir
