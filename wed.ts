import express from "express";
import { router as index  } from "./api/index";
import { router as movie  } from "./api/movie";
import { router as stars  } from "./api/stars";
import { router as creators  } from "./api/creators";
import { router as person  } from "./api/person";
import { router as detil  } from "./api/detil";
import { router as search  } from "./api/search";
import bodyParser from "body-parser";
import cors from "cors";
//app
export const app = express();

app.use(
    cors({
      origin: "*",
    })
  );

app.use(bodyParser.text());
app.use(bodyParser.json());

app.use("/", index);
app.use("/detil", detil);
app.use("/movie", movie);
app.use("/stars", stars);
app.use("/creators", creators);
app.use("/person", person);
app.use("/search", search);




