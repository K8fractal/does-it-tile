import express from "express";
import { Query } from "express-serve-static-core";
import { regularTiling } from "./tilings";

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
}

const app = express();

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to <em>Does It Tile?!</em></h1>" +
      "<p> To get information about a tiling, give a description of regular polygons around a vertext. Try /3.6</p>" +
      "<p><a href='https://github.com/K8fractal/does-it-tile'>Source code</a></p>"
  );
});

app.get("/:sides.:count", (req, res) => {
  const sides = Number(req.params.sides);
  const count = Number(req.params.count);
  if (isNaN(sides) || isNaN(count)) {
    res.status(StatusCodes.BadRequest);
    res.send("Tile requests can only contain numbers");
  } else if (sides % 1 != 0 || count % 1 != 0) {
    res.status(StatusCodes.BadRequest);
    res.send("Tile requests must be in the form integer.integer");
  } else if (sides < 3) {
    res.status(StatusCodes.BadRequest);
    res.send("Number of sides must be at least 3");
  } else if (count < 3) {
    res.status(StatusCodes.BadRequest);
    res.send("Number of tiles at a vertex must be at least 3");
  } else {
    res.status(StatusCodes.OK);
    res.send(regularTiling(sides, count));
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
