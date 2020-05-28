export default {
  beforeMount() {
    this.cargarLS();
    this.cargarLSmecanicos();
  },
  data() {
    return {
      carga1: true,
      carga2: false,
      placas: "",
      lista_mecanicos: [],
      lista_mantenimientos: [],
      fields1: [
        { key: "id_mecanico", label: "Doc. Mecanico" },
        "placa",
        "fecha",
        "trabajos_realizados",
        "horas_invertidas",
        "acciones"
      ],
      fields2: [
        { key: "documento", label: "Doc. Mecanico" },
        "nombre",
        "apellidos",
        "celular",
        "correo",
        "rol",
        "acciones"
      ],
      mecanico: {
        tipo_documento: null,
        documento: "",
        nombre: "",
        apellidos: "",
        celular: "",
        correo: "",
        rol: null,
        clave: "",
        acciones: true
      },
      mantenimiento: {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados: "Ninguno",
        horas_invertidas: 0,
        acciones: true
      },
      show: true
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
    },

    cargarLS() {
      let url = "http://localhost:3001/mantenimientos";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_mantenimientos = respuesta.data.map(x => {
            var f = Object.assign({}, x);
            f.fecha = x.fecha.slice(0, 10);
            return f;
          });
          console.log(this.lista_mantenimientos);
        })
        .catch(error => {
          console.log(error);
        });
    },

    cargarLSmecanicos() {
      let url = "http://localhost:3001/funcionarios/mecanicos";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_mecanicos = respuesta.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    cargarMantenimiento({ item }) {
      this.carga1 = false;
      this.carga2 = true;
      this.placas= item.placa;
      console.log(this.placas);
      
      this.mantenimiento = {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados: "Ninguno",
        horas_invertidas: 0
      };
      this.mantenimiento.id_mecanico = item.id_mecanico;
      this.mantenimiento.placa = item.placa;
      this.mantenimiento.fecha = item.fecha;
    },

    cargarMecanico({ item }) {
      this.mantenimiento = {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados: "Ninguno",
        horas_invertidas: 0
      };
      this.carga1 = true;
      this.carga2 = false;
      this.mantenimiento.id_mecanico = item.documento;
    },

    crearMantenimiento() {
      let mn = this.mantenimiento;
      let url = "http://localhost:3001/mantenimientos";
      this.$axios
        .post(url, mn)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {});
      this.mantenimiento = {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados: "Ninguno",
        horas_invertidas: 0
      };
    },

    actualizar() {
      let id = this.mantenimiento.id_mecanico;
      let x = this.mantenimiento;
      let url =
        "http://localhost:3001/mantenimientos/" + id + "/" + this.placas;
      this.$axios
        .put(url, x)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {
          console.log(error);
        });
    },

    eliminarMantenimiento() {
      let id = this.mantenimiento.id_mecanico;
      let placas = this.mantenimiento.placa;
      let url = "http://localhost:3001/mantenimientos/" + id + "/" + placas;
      this.$axios
        .delete(url)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {});
        this.mantenimiento = {
          id_mecanico: "",
          placa: "",
        };
    },

    cancelar() {
      this.carga1 = true;
      this.carga2 = false;
      this.mantenimiento = {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados: "",
        horas_invertidas: ""
      };
    }
  }
};
