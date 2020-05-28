const ServicioPG = require("../services/postgres");

let validarMoto = (moto) => {
  if (!moto.placa) {
    throw {
      ok: false,
      mensaje: "La placa de la moto es obligatoria",
    };
  }
  if (!moto.estado) {
    throw {
      ok: false,
      mensaje: "El estado de la moto es obligatorio",
    };
  }
  if (!moto.clase) {
    throw {
      ok: false,
      mensaje: "La clase de la moto es obligatoria",
    };
  }
  if (!moto.marca) {
    throw {
      ok: false,
      mensaje: "La marca de la moto es obligatoria",
    };
  }
  if (!moto.modelo) {
    throw {
      ok: false,
      mensaje: "El modelo de la moto es obligatorio",
    };
  }
  if (!moto.color) {
    throw {
      ok: false,
      mensaje: "El color de la moto es obligatorio",
    };
  }
  if (!moto.cilindraje) {
    throw {
      ok: false,
      mensaje: "El cilindraje de la moto es obligatorio",
    };
  }
  if (!moto.id_propietario) {
    throw {
      ok: false,
      mensaje: "El Doc. del propietario de la moto es obligatorio",
    };
  }
  if (!moto.nro_soat) {
    throw {
      ok: false,
      mensaje: "El Nro. de soat de la moto es obligatorio",
    };
  }
  if (!moto.vencimiento_soat) {
    throw {
      ok: false,
      mensaje: "El vencimiento del soat de la moto es obligatorio",
    };
  }
  if (!moto.nro_tecnomecanica) {
    throw {
      ok: false,
      mensaje: "El Nro. de tecnomecanica de la moto es obligatorio",
    };
  }
  if (!moto.vencimiento_tecnomecanica) {
    throw {
      ok: false,
      mensaje: "El vencimiento de la tecnomecanica de la moto es obligatorio",
    };
  }
};

let guardarMoto = async (moto) => {
  let _servicio = new ServicioPG();
  let sql = `INSERT INTO public.motos(
    placa, estado, clase, marca, modelo, color, cilindraje, id_propietario, 
    nro_soat, vencimiento_soat, nro_tecnomecanica, vencimiento_tecnomecanica)
	VALUES (
        '${moto.placa}', 
        '${moto.estado}', 
        '${moto.clase}', 
        '${moto.marca}', 
        '${moto.modelo}', 
        '${moto.color}', 
        '${moto.cilindraje}', 
        '${moto.id_propietario}', 
        '${moto.nro_soat}', 
        '${moto.vencimiento_soat}', 
        '${moto.nro_tecnomecanica}', 
        '${moto.vencimiento_tecnomecanica}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarMotos = async () => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.motos`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let consultarMoto = async (placa) => {
  let _servicio = new ServicioPG();
  let sql = `SELECT * FROM public.motos WHERE placa ='${placa}'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let eliminarMoto = async (placa) => {
  let _servicio = new ServicioPG();
  let sql = `Delete FROM public.motos WHERE placa ='${placa}'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

let modificarMoto = async (moto, placa) => {
  if (moto.placa != placa) {
    throw { ok: false, mensaje: "Placa erronea, no encontrada" };
  } else {
    let _servicio = new ServicioPG();
    let sql = `UPDATE public.motos
    SET estado='${moto.estado}', 
    clase='${moto.clase}', 
    marca='${moto.marca}', 
    modelo='${moto.modelo}', 
    color='${moto.color}', 
    cilindraje='${moto.cilindraje}', 
    nro_soat='${moto.nro_soat}', 
    vencimiento_soat='${moto.vencimiento_soat}', 
    nro_tecnomecanica='${moto.nro_tecnomecanica}', 
    vencimiento_tecnomecanica='${moto.vencimiento_tecnomecanica}' 
	WHERE placa ='${placa}';`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
  }
};

module.exports = {
  validarMoto,
  guardarMoto,
  consultarMotos,
  consultarMoto,
  eliminarMoto,
  modificarMoto,
};
