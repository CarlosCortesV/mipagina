var express = require("express");
const app = express();
//primero declaramos las contates para llamar express y la app//
//configuraciones//
app.set("puerto",3004);
app.set("views","C:/Users/carlo/OneDrive/Escritorio/mipagina/src/views","views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//rutas//
app.get("/",(req,res) =>{
    res.render("index.html",{titulo:"Inicio"});
});
app.get("/contacto",(req,res) =>{
    res.render("contacto.html",{titulo:"Contacto"});
});
app.get("/portafolio",(req,res) =>{
    res.render("portafolio.html",{titulo:"Portafolio"});
});
app.get("/blog",(req,res) =>{
    res.render("blog.html",{titulo:"Blog"})
});
app.get("/controlremoto",(req,res) =>{
    res.render("controlremoto.html",{titulo:"Control Remoto"})
});
app.get("/carroacontrolremoto",(req,res) =>{
    res.render("carroacontrolremoto.html",{titulo:"Carro A Control Remoto"})
});
app.get("/drone",(req,res) =>{
    res.render("drone.html",{titulo:"Drone"})
});
app.get("/caoba",(req,res) =>{
    res.render("caoba.html",{titulo:"Caoba"})
});
app.get("/drone",(req,res) =>{
    res.render("drone.html",{titulo:"Drone"})
});
app.get("/lcdarduino",(req,res) =>{
    res.render("lcdarduino.html",{titulo:"LCD Arduino"})
});
app.get("/reproductorarduino",(req,res) =>{
    res.render("reproductorarduino.html",{titulo:"LCD Arduino"})
});

//archivos estaticos
app.use(express.static("C:/Users/carlo/OneDrive/Escritorio/mipagina/src/public"));

app.listen(process.env.PORT || app.get("puerto"), ()=>{
    console.log("Servidor web trabajando en el puerto", app.get("puerto"));  
})