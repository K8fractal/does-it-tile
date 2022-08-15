import express from "express"

const app = express();

app.get('/', (req,res)=> {
    res.send('Hello world!');
})

app.get('/number', (req,res)=> {
    res.send('27');
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`))