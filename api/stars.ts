import express from "express";
import mysql from "mysql";
import { conn } from "../dbconn";
export const router = express.Router();

router.use(express.json());



router.get("/movie", (req, res) => {
  const sql = `
    SELECT * FROM movie;`;
  conn.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


router.get("/person", (req, res) => {
  const sql = `
    SELECT * FROM person;`;
  conn.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


export interface movie {
  movie_id:  number;
  person_id: number;
}

router.post("/insert", (req, res) => {
  let movie: movie = req.body;
  let sql ="INSERT INTO `stars`(`movie_id`, `person_id`) VALUES (?,?)";
  sql = mysql.format(sql, [
      movie.movie_id,
      movie.person_id,
  ]);
  conn.query(sql, (err, result) => {
    if(err){
      res.status(401).json({ 
        Error: 'person_id : มีข้อมูลนี้แล้ว!' 
      });
    }else{
      res
      .status(201)
      .json({ affected_row: result.affectedRows, last_idx: result.insertId });
    }
    // if (err) throw err;
  });
});


router.delete("/:movie_id/:person_id", (req, res) => {
  let movie_id = +req.params.movie_id;
  let person_id = +req.params.person_id;

  conn.query("DELETE FROM stars WHERE movie_id = ? AND person_id = ?", [movie_id, person_id], (err, result) => {
    if (err) {
      console.error("Error deleting star:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ affected_rows: result.affectedRows });
    }
  });
});


