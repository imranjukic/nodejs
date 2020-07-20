const express = require('expres');
const app = express();
const port = process.env.PORT || 3000;

app.use('/',(req,res,next)=>{
    console.log("New visit from: "+req.ip);
    next();
});

app.get('/',(req,res)=>{
    res.send('Hello world.');
});

app.listen(port,()=>{
    console.log('Server listening on port'+port);
});