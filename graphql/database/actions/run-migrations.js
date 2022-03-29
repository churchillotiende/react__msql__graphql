const knex = require('../mysql');
const promise = require('bluebird');
const fs = require('fs');
const path = require('path');

// Here we are going to the msql folder and checking the db

const db = knex.client.config.connection.database || null;

// Here we are going to split the str and then rejoin it again

function replaceAll(str , delimiter , replacement)
{
    return str.split(delimiter).join(replacement);
}
fs.readdir( 
    path.resolve(
        __dirname , 
        '../migrations'
    ), 
    'utf-8' , 
    // We have a callback function which throws error or returns file
    function(err , files)
    {
        if(err) throw new Error(err)
        return promise.each(files , (fileName) => 
        {
            return new Promise(function(resolve ,reject) 
            {
                fs.readFile(
                    path.resolve(
                        __dirname , 
                        `../migrations/${fileName}`
                    ) , 
                    'utf-8' , 
                    function(err , sql) 
                    {
                        if(err) reject(err)
                        return knex.raw(replaceAll(sql , '{}' , db))
                        .then(resolve)
                    }
                )
            })
        })
        .then(() => console.log('Migrations have run successfully'))
        .catch(err =>
             {
                 throw new Error(err) 
            } ) 
    }
)