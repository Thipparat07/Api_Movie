import express from "express";
import mysql from "mysql";
import { conn } from "../dbconn";
export const router = express.Router();

router.use(express.json());

export interface movie {
    title:        string;
    plot:         string;
    Poster:       string;
}

  router.post("/", (req, res) => {
    let movie: movie = req.body;
    let sql ="INSERT INTO `movie`(`title`, `plot`, `Poster`) VALUES (?,?,?)";
    sql = mysql.format(sql, [
        movie.title,
        movie.plot,
        movie.Poster,
    ]);
    conn.query(sql, (err, result) => {
      if (err) throw err;
      res
        .status(201)
        .json({ affected_row: result.affectedRows, last_idx: result.insertId });
    });
  });


router.delete("/:movie_id", (req, res) => {
  let movie_id = +req.params.movie_id;
  conn.query("delete from movie where movie_id = ?", [movie_id], (err, result) => {
     if (err) throw err;
     res
       .status(200)
       .json({ affected_row: result.affectedRows });
  });
});