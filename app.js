const express = require('express');
const app = express(); 

//Como no tengo base de datos trabajamos con el archivo cursos.js
const {infoCursos} = require('./datos/cursos');

//Routers

const routerMatematicas = require('./routers/matematicas');
app.use('/api/cursos/matematicas',routerMatematicas);

const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion',routerProgramacion);

//Routing
app.get('/',(req,res)=> res.send('Mi primer servidor con Express. cursos'));
app.get('/api/cursos',(req,res)=>res.send(infoCursos));


// El puerto lo asigna en vivo el hosting que se contrate, por eso usamos process.env.PORT 
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`El servidor esta escuchando en el Puerto ${PORT}...`));
