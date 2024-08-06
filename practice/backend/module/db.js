import mysql from 'mysql';
    const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Shyam@radha9",
    database: "Keonn"
})
export default db