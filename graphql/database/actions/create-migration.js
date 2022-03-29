const fs = require('fs');
const path = require('path');

// Declaring a variable with no params
let tableName;

try{
    tableName = process.argv.find((arg) =>
    
        arg.includes('--tableName')
    ).split('=')[1]
}catch(err)
{
    return console.error('--tableName parameter not found . Please specify a table name');
}

const fileName = new Date().getTime() + `_${tableName}.sql`;
fs.writeFile(path.resolve(__dirname , `../migrations/${fileName}`) , '' , (err) =>
{
    if(err) throw new Error(err)
    console.log('Created a new migration file in the migration folder');
});
