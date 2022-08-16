import express from "express"
import { Query } from "express-serve-static-core";

const app = express();

export interface TypedRequestQuery<T extends Query> extends Express.Request {
    query: T
}

app.get('/hello/:id', (req: TypedRequestQuery<{id: string}>,res)=> {
    //res.send('Hello '+req.query.id);
    const id = req.query.id;
    res.status(200).json({ ID: id });
})

app.get('/number', (req,res)=> {
    res.send('27');
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`))