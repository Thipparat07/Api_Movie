import express from "express";
import { conn } from "../dbconn";
export const router = express.Router();



router.get('/searchmovie', (req, res) => {
    const { searchTerm } = req.query;
    const sql = `
    SELECT 
      movie.*, 
      GROUP_CONCAT(DISTINCT CONCAT('Stars: ', p_stars.name) SEPARATOR ', ') AS stars,
      GROUP_CONCAT(DISTINCT CONCAT('Creators: ', p_creators.name) SEPARATOR ', ') AS creators
    FROM movie
    LEFT JOIN stars ON movie.movie_id = stars.movie_id
    LEFT JOIN creators ON movie.movie_id = creators.movie_id
    LEFT JOIN person p_stars ON stars.person_id = p_stars.person_id
    LEFT JOIN person p_creators ON creators.person_id = p_creators.person_id
    WHERE movie.title LIKE ?
    GROUP BY movie.movie_id`;
    
    conn.query(sql, [`%${searchTerm}%`], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error searching movie');
        } else {
            res.json(result);
        }
    });
  });
  


// router.get("/movie", (req, res) => {
//     conn.query(
//       "SELECT * FROM movie WHERE title LIKE ?",
//       ["%" + req.query.name + "%"],
//       (err, result, fields) => {
//         if (err) throw err;
//         res.json(result);
//       }
//     );
//   });
  

//   router.get("/stars", (req, res) => {
//     conn.query(
//       "SELECT person.* " +
//       "FROM person " +
//       "JOIN stars ON person.person_id = stars.person_id " +
//       "JOIN movie ON stars.movie_id = movie.movie_id " +
//       "WHERE movie.title LIKE ? " +
//       "GROUP BY person.person_id", // Use GROUP BY instead of DISTINCT
//       ["%" + req.query.name + "%"],
//       (err, result, fields) => {
//         if (err) throw err;
//         res.json(result);
//       }
//     );
//   });
  
  

//   router.get("/creators", (req, res) => {
//     conn.query(
//       "SELECT person.* " +
//       "FROM person " +
//       "JOIN creators ON person.person_id = creators.person_id " +
//       "JOIN movie ON creators.movie_id = movie.movie_id " +
//       "WHERE movie.title LIKE ? " +
//       "GROUP BY person.person_id", // Use GROUP BY instead of DISTINCT
//       ["%" + req.query.name + "%"],
//       (err, result, fields) => {
//         if (err) throw err;
//         res.json(result);
//       }
//     );
//   });
  
  



