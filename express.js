const { response } = require("express");
const { request } = require("http");    
const express = require("express");
const app = express();
app.use(express.json({extended: false}));
app.use(express.static('./css'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(process.env.PORT || 3000,()=>{
    console.log('server is start at port 3000');
})
app.get('/', (req,res) =>{      
    return res.render('index');
    
});

