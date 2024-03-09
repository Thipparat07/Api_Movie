//Routerหาเส้นทาง
import express from "express";
import { conn } from "../dbconn";
export const router = express.Router();

router.get("/", (req, res) => {
    const sql = "SELECT * FROM movie ";
    conn.query(sql, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });