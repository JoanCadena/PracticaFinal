const express = require('express')
const router = express.Router()

const _controlador = require("../controllers/mantenimientos");


router.get('/mantenimientos', (req, resp) => {
    _controlador.consultarMantenimientos().then(respuestaDB => {
        let registros = respuestaDB.rows;
        resp.send(registros);
    }).catch(error => {
        resp.send(error);
    })
});

router.get('/mantenimientos/:id', (req, resp) => {
    let id = req.params.id;
    _controlador.consultarMantenimiento(id).then(respuestaDB => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';
        resp.send({ ok: true, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
});

router.put('/mantenimientos/:id/:trabajo/:horas', (req, resp) =>  {
    let id = req.params.id;
    let trabajo = req.params.trabajo;
    let horas = req.params.horas;
    
    _controlador.actualizarMantenimiento(id, trabajo, horas).then(respuestaDB => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';
        resp.send({ ok: true, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
})

module.exports = router;