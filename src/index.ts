import express from "express"
import { Query } from "express-serve-static-core";
import { regularTiling } from "./tilings";


enum StatusCodes {
    OK = 200,
    BadRequest = 400,
  }

const app = express();


app.get('/hello/:name', (req,res)=> {
    res.send('Hello '+req.params.name + ". Nice to meet you!");
})

app.get('/tile', (req,res)=> {
    res.send('To get information about a tiling, give a description of regular polygons around a vertext. Try /tile/3.6');
})

app.get('/tile/:sides.:count', (req,res)=>{
    const sides = Number(req.params.sides);
    const count = Number(req.params.count)
    if(isNaN(sides) || isNaN(count)){
        res.status(StatusCodes.BadRequest);
        res.send('Tile requests must be in the form integer.integer')
    }
    else{
        res.status(StatusCodes.OK);
//        res.send('STUB: Tiling description JSON here. Info about a tiling of '+count+ ' regular '+sides+'-gons: Coming soon.');
       res.send(regularTiling(sides,count))
    }

})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`))