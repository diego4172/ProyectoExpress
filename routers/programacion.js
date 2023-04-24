const express = require('express');

const {programacion} = require('../datos/cursos').infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.get('/',(req,res)=>res.send(JSON.stringify(programacion)));

/*routerProgramacion.get('/:lenguaje',(req,res)=>{
    const arrayFiltrado = programacion.filter(el=>el.lenguaje===req.params.lenguaje);
    if (arrayFiltrado.length===0) {
        return res.status(404).send(`No se encontraron cursos de ${req.params.lenguaje}`)
    }
    res.send(JSON.stringify(arrayFiltrado));
})*/

routerProgramacion.get('/:lenguaje',(req,res)=>{
    const arrayFiltrado = programacion.filter(el=>el.lenguaje===req.params.lenguaje);
    if (arrayFiltrado.length===0) {
        return res.status(404).send(`No se encontraron cursos de ${req.params.lenguaje}`)
    }
    if (req.query.ordenar==='vistas') {
        return res.send(JSON.stringify(arrayFiltrado.sort((a,b)=>b.vistas - a.vistas)));
    }
    res.send(JSON.stringify(arrayFiltrado));
})

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
    const arrayFiltrado = programacion.filter(el=>el.lenguaje===req.params.lenguaje&&el.nivel===req.params.nivel);
    if (arrayFiltrado.length===0) {
        return res.status(404).send(`No se encontraron cursos del lenguaje ${lenguaje}, y nivel ${nivel}`);
    }
    res.send(JSON.stringify(arrayFiltrado));
})

module.exports = routerProgramacion