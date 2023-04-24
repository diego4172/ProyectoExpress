const express = require('express');

const {matematicas} = require('../datos/cursos').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.get('/',(req,res)=>res.send(JSON.stringify(matematicas)));

routerMatematicas.get('/:tema',(req,res)=>{
    const arrayFiltrado = matematicas.filter(el=>el.tema===req.params.tema);
    if (arrayFiltrado.length===0) {
        return res.status(404).send(`No se encontraron cursos de ${req.params.tema}`);
    }
    res.send(JSON.stringify(arrayFiltrado));
})

module.exports = routerMatematicas;