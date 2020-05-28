const ServicioPG = require("../services/postgres");

let validarMantenimiento = (mantenimiento) => {
  if (!mantenimiento.id_mecanico) {
    throw {
      ok: false,
      mensaje: "El documento del funcionario es obligatorio",
    };
  }
  if (!mantenimiento.placa) {
    throw {
      ok: false,
      mensaje: "La placa de la moto es obligatoria",
    };
  }
  if (!mantenimiento.fecha) {
    throw {
      ok: false,
      mensaje: "La fecha de la asignación es obligatoria",
    };
  }
  if (!mantenimiento.trabajos_realizados) {
    throw {
      ok: false,
      mensaje: "El trabajo realizado es obligatorio",
    };
  }
};

let guardarMantenimiento = async (mantenimiento) => {
  let _servicio = new ServicioPG();
  let sql = `INSERT INTO public.mantenimientos(
    id_mecanico, placa, fecha, trabajos_realizados, horas_invertidas)
    VALUES (
    '${mantenimiento.id_mecanico}', 
    '${mantenimiento.placa}', 
    '${mantenimiento.fecha}', 
    '${mantenimiento.trabajos_realizados}', 
    '${mantenimiento.horas_invertidas}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarMantenimientos = async () => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.mantenimientos`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarMantenimiento = async (id) => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.mantenimientos WHERE id_mecanico= '${id}'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let actualizarMantenimiento = async (id, trabajo, horas) => {
    let _servicio = new ServicioPG();
    let sql = `UPDATE public.mantenimientos
	SET trabajos_realizados='${trabajo}', horas_invertidas=${horas} WHERE id_mecanico= '${id}'`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  };

  let actualizarMantenimientoX = async (id, placas, x) => {
    let _servicio = new ServicioPG();
    let placa = x.placa;
    let fecha = x.fecha;
    let sql = `UPDATE public.mantenimientos
  SET placa='${placa}', fecha='${fecha}' WHERE id_mecanico= '${id}' and placa='${placas}'`;
  console.log(sql);
  
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
    
  };

  let eliminarMantenimiento = async (id, placas) => {
    let _servicio = new ServicioPG();
    let sql = `DELETE FROM public.mantenimientos WHERE id_mecanico='${id}' and placa='${placas}'`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  };

module.exports = {
  consultarMantenimientos,
  consultarMantenimiento,
  actualizarMantenimiento,
  actualizarMantenimientoX,
  validarMantenimiento,
  guardarMantenimiento,
  eliminarMantenimiento,
};
