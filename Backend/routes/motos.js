const express = require('express')
const router = express.Router()

const _controlador = require("../controllers/motos");


router.get('/motos', (req, resp) => {
    _controlador.consultarMotos().then(respuestaDB => {
        let registros = respuestaDB.rows;
        resp.send(registros);
    }).catch(error => {
        resp.send(error);
    })
});

router.get('/motos/:placa', (req, resp) => {
    let placa = req.params.placa;
    _controlador.consultarMoto(placa).then(respuestaDB => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';
        resp.send({ ok: true, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
});

router.post("/motos", (req, resp) => {
    try {
        let info_moto = req.body;
        _controlador.validarMoto(info_moto);
        _controlador.guardarMoto(info_moto).then(respuestaDB => {
            resp.send({ ok: true, mensaje: "Efectivamente guardado" });
        }).catch(error => {
            resp.send({ ok: false, mensaje: "Error al guardar" });
        });

    } catch (error) {
        resp.send(error);
    }
});

router.delete("/motos/:placa", (req, resp) => {
    let placa = req.params.placa;
    _controlador.eliminarMoto(placa).then((respuestaDB) => {
        resp.send(respuestaDB);
    }).catch((error) => {
        resp.send(error);
    });
});

router.put("/motos/:placa", (req, resp) => {
    let placa = req.params.placa; 
    let moto = req.body;
    _controlador.modificarMoto(moto, placa).then(respuestaDB => {
        resp.send({ ok: true, mensaje: "Modificado exitosamente ", info: respuestaDB });
    }).catch(error => {
        resp.send({ ok: false, mensaje: "Error al modificar ", info: error });
    })
})


module.exports = router;