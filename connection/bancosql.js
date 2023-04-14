const { query } = require('express');
const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: '129.159.57.217',
    user: 'lucas.santos',
    port: '3306',
    password: 'ti@2510',
    database: 'sirius_test',
    charset: "utf8mb4",
    connectionLimit: 10  
})

const executeQuery = async(query, params = []) => {
    let connection;
    let attemps = 0;
    let maxAttemps = 5;

    while(!connection && attemps < maxAttemps){
        try{
            connection = await pool.getConnection();
            const results = await connection.query(query, [...params]);
            connection.release();
            return results[0];
        } catch(error){
            console.log(error);
            attemps++;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

module.exports = {
    executeQuery:executeQuery
}