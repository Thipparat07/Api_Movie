import express from "express";
import mysql from "mysql";
import { conn } from "../dbconn";
export const router = express.Router();

router.use(express.json());

export interface movie {
    name:        string;
    birthdate:   string;
}

router.get("/person", (req, res) => {
  const sql = "SELECT * FROM person ";
  conn.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


  router.post("/", (req, res) => {
    let movie: movie = req.body;
    let sql ="INSERT INTO `person`(`name`, `birthdate`) VALUES (?,?)";
    sql = mysql.format(sql, [
        movie.name,
        movie.birthdate,
    ]);
    conn.query(sql, (err, result) => {
      if (err) throw err;
      res
        .status(201)
        .json({ affected_row: result.affectedRows, last_idx: result.insertId });
    });
  });



  router.delete("/:person_id", (req, res) => {
    let person_id = +req.params.person_id;
    conn.query("delete from person where person_id = ?", [person_id], (err, result) => {
       if (err) throw err;
       res
         .status(200)
         .json({ affected_row: result.affectedRows });
    });
  });
  





