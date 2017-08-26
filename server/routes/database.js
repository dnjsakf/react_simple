import express from 'express';
import mysql from 'mysql';

const router = express.Router();
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wjddns1',
  database: 'battlecode',
});
conn.connect();

router.get('/:table', (req,res)=>{
  const tableName = req.params.table;
  const userKey = req.query.userKey;
  
  let sql = `SELECT no, subject FROM ${tableName}`;
  if(typeof userKey === 'string'){
    sql += `WHERE no = ${userKey}`
  }
  conn.query(sql, (error, result)=>{
    if(error) throw error;
    if(result.length === 0){
      return res.status(400).json({
        error: 'Not Found Data',
        code: 1,
      });
    }
    return res.status(200).json({
      success: true,
      data: result
    })
  });
});

export default router;