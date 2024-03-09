//Routerหาเส้นทาง
import express from "express";
import { conn } from "../dbconn";
export const router = express.Router();

router.get("/:movie_id", (req, res) => {
    let id = +req.params.movie_id;
    conn.query("select * from movie where movie_id = ?" , [id], (err, result, fields) => {
    if (err) throw err;
      res.json(result);
    });
  });