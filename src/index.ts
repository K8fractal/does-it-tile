import express from "express"
import { Query } from "express-serve-static-core";

const app = express();


app.get('/hello/:name', (req,res)=> {
    res.send('Hello '+req.params.name);
    console.log(req);
    //const id = req.query.id;
    //res.status(200).json({ ID: id });
})

app.get('/number', (req,res)=> {
    res.send('27');
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`))