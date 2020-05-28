const ServicioPG = require("../services/postgres");

let validarFuncionario = (funcionario) => {
  if (!funcionario.tipo_documento) {
    throw {
      ok: false,
      mensaje: "El tipo documento del funcionario es obligatorio",
    };
  }
  if (!funcionario.documento) {
    throw {
      ok: false,
      mensaje: "El documento del funcionario es obligatorio",
    };
  }
  if (!funcionario.nombre) {
    throw {
      ok: false,
      mensaje: "El nombre del funcionario es obligatorio",
    };
  }
  if (!funcionario.apellidos) {
    throw {
      ok: false,
      mensaje: "El apellido del funcionario es obligatorio",
    };
  }
  if (!funcionario.celular) {
    throw {
      ok: false,
      mensaje: "El celular del funcionario es obligatorio",
    };
  }
  if (!funcionario.correo) {
    throw {
      ok: false,
      mensaje: "El correo del funcionario es obligatorio",
    };
  }
  if (!funcionario.rol) {
    throw {
      ok: false,
      mensaje: "El rol del funcionario es obligatorio",
    };
  }
  if (!funcionario.clave) {
    throw {
      ok: false,
      mensaje: "La clave del funcionario es obligatoria",
    };
  }
};

let guardarFuncionario = async (funcionario) => {
  let _servicio = new ServicioPG();
  let sql = `INSERT INTO public.usuarios(
	tipo_documento, documento, nombre, apellidos, celular, correo, rol, clave)
    VALUES (
    '${funcionario.tipo_documento}', 
    '${funcionario.documento}', 
    '${funcionario.nombre}', 
    '${funcionario.apellidos}', 
    '${funcionario.celular}', 
    '${funcionario.correo}', 
    '${funcionario.rol}', 
    '${funcionario.clave}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarFuncionarios = async () => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.usuarios;`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarFuncionario = async (documento) => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.usuarios WHERE documento=${documento}`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let eliminarFuncionario = async (documento) => {
  let _servicio = new ServicioPG();
  let sql = `DELETE FROM public.usuarios WHERE documento='${documento}'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let modificarFuncionario = async (funcionario, documento) => {
  if (funcionario.documento != documento) {
    throw { ok: false, mensaje: "Documento erroneo, no encontrado" };
  } else {
    let _servicio = new ServicioPG();
    let sql = `UPDATE public.usuarios
    SET nombre='${funcionario.nombre}', 
    apellidos='${funcionario.apellidos}', 
    celular='${funcionario.celular}', 
    correo='${funcionario.correo}', 
    rol='${funcionario.rol}', 
    clave='${funcionario.clave}' 
    WHERE documento='${documento}';`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  }
};

module.exports = {
  validarFuncionario,
  guardarFuncionario,
  consultarFuncionarios,
  consultarFuncionario,
  eliminarFuncionario,
  modificarFuncionario,
};
