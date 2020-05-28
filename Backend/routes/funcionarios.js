const express = require('express')
const router = express.Router()

const _controlador = require("../controllers/funcionarios");


router.get('/funcionarios', (req, resp) => {
    _controlador.consultarFuncionarios().then(respuestaDB => {
        let registros = respuestaDB.rows;
        resp.send(registros);
    }).catch(error => {
        resp.send(error);
    })
});

router.get('/funcionarios/mecanicos', (req, resp) => {
    _controlador.consultarMecanicos().then(respuestaDB => {
        let registros = respuestaDB.rows;
        resp.send(registros);
    }).catch(error => {
        resp.send(error);
    })
});

router.get('/funcionarios/:documento', (req, resp) => {
    let documento = req.params.documento;
    _controlador.consultarFuniconario(documento).then(respuestaDB => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';
        resp.send({ ok: true, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
});

router.post("/funcionarios", (req, resp) => {
    try {
        let info_funcionario = req.body;
        _controlador.validarFuncionario(info_funcionario);
        _controlador.guardarFuncionario(info_funcionario).then(respuestaDB => {
            resp.send({ ok: true, mensaje: "Efectivamente guardado" });
        }).catch(error => {
            resp.send({ ok: false, mensaje: "Error al guardar" });
        });

    } catch (error) {
        resp.send(error);
    }
});

router.delete("/funcionarios/:documento", (req, resp) => {
    let documento = req.params.documento;
    _controlador.eliminarFuncionario(documento).then((respuestaDB) => {
        resp.send(respuestaDB);
    }).catch((error) => {
        resp.send(error);
    });
});

router.put("/funcionarios/:documento", (req, resp) => {
    let documento = req.params.documento; 
    let funcionario = req.body;
    _controlador.modificarFuncionario(funcionario, documento).then(respuestaDB => {
        resp.send({ ok: true, mensaje: "Modificado exitosamente ", info: respuestaDB });
    }).catch(error => {
        resp.send({ ok: false, mensaje: "Error al modificar ", info: error });
    })
})


module.exports = router;