const express = require('express');
const app = express(); 

//Como no tengo base de datos trbajamos con el archivo cursos.js
const {infoCursos} = require('./datos/cursos');

//Routes
/* como sería el routing con routes 

const routesProgramacion = express.Router();
app.use('/api/cursos/programacion', routesProgramacion);

esto =>  routesProgramacion.get('/',(req,res)=>res.send(infoCursos.programacion));
es igual a esto => app.get('/api/cursos/programacion',(req,res)=>res.send(infoCursos.programacion));

*/

//Routing
app.get('/',(req,res)=> res.send('Mi primer servidor con Express. cursos'));

app.get('/api/cursos',(req,res)=>res.send(infoCursos));

app.get('/api/cursos/programacion',(req,res)=>res.send(infoCursos.programacion));

app.get('/api/cursos/matematicas',(req,res)=>res.send(infoCursos.matematicas));

//Routing con parametros

//Cursos de Programacion
/*app.get('/api/cursos/programacion/:lenguaje',(req,res)=>{
    const arrayFiltrado = infoCursos.programacion.filter(el=>el.lenguaje===req.params.lenguaje);
    if (arrayFiltrado.length===0) {
        return res.status(404).send(`No se encontraron cursos de ${req.params.lenguaje}`)
    }
    res.send(JSON.stringify(arrayFiltrado));
})*/

//Cursos de Matemáticas
app.get('/api/cursos/matematicas/:tema',(req,res)=>{
    const arrayFiltrado = infoCursos.matematicas.filter(el=>el.tema===req.params.tema);
    if (arrayFiltrado.length===0) {
        return res.status(404).send(`No se encontraron cursos de ${req.params.tema}`);
    }
    res.send(JSON.stringify(arrayFiltrado));
})

//Routing con dos parametros

app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res)=>{
    const arrayFiltrado = infoCursos.programacion.filter(el=>el.lenguaje===req.params.lenguaje&&el.nivel===req.params.nivel);
    if (arrayFiltrado.length===0) {
        return res.status(404).send(`No se encontraron cursos del lenguaje ${lenguaje}, y nivel ${nivel}`);
    }
    res.send(JSON.stringify(arrayFiltrado));
})

//Busquedas con Parametros
app.get('/api/cursos/programacion/:lenguaje',(req,res)=>{
    const arrayFiltrado = infoCursos.programacion.filter(el=>el.lenguaje===req.params.lenguaje);
    if (arrayFiltrado.length===0) {
        return res.status(404).send(`No se encontraron cursos de ${req.params.lenguaje}`)
    }
    if (req.query.ordenar==='vistas') {
        return res.send(JSON.stringify(arrayFiltrado.sort((a,b)=>b.vistas - a.vistas)));
    }
    res.send(JSON.stringify(arrayFiltrado));
})

// El puerto lo asigna en vivo el hosting que se contrate, por eso usamos process.env.PORT 
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`El servidor esta escuchando en el Puerto ${PORT}...`));
