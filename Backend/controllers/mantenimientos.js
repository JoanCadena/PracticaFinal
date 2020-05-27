const ServicioPG = require("../services/postgres");

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

module.exports = {
  consultarMantenimientos,
  consultarMantenimiento,
  actualizarMantenimiento,
};
