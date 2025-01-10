import express from 'exrpress'
import session from 'express session'

const app= express();

app.use(session({
    secret: 'p3-EHC#LOST-sessionespersistentes',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 24*60*60*100}
})
);

app.get('/Iniciar-Session', (req,res)=>{
    if (!req.session.inicio){
        req.session.inicio= new Date();
    }else{
        res.render('La sesion ya esta activa');

    }
});

app.get('/actualizar', (req,res)=>{
    if(req.session.inicio)
    })








app.get('/actualizar', (req, res)=>{


)}