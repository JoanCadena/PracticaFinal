export default {
  beforeMount() {
    this.cargarLS();
  },
  data() {
    return {
      cargada1: true,
      cargada2: false,
      lista_mantenimientos: [],
      fields: [
        { key: "id_mecanico", label: "Doc. Mecanico" },
        "placa",
        "fecha",
        "trabajos_realizados",
        "horas_invertidas",
        "acciones"
      ],
      mantenimiento: {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados: "",
        horas_invertidas: "",
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

    cargarLSid() {
      let id = this.mantenimiento.id_mecanico;
      let url = "http://localhost:3001/mantenimientos/" + id;
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_mantenimientos = respuesta.data.info.map(x => {
            var f = Object.assign({}, x);
            f.fecha = x.fecha.slice(0, 10);
            return f;
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    cargarlo({ item }) {
      this.cargada1 = false;
      this.cargada2 = true;
      this.mantenimiento.id_mecanico = item.id_mecanico;
      this.mantenimiento.trabajos_realizados = item.trabajos_realizados;
      this.mantenimiento.horas_invertidas = item.horas_invertidas;
    },

    actualizar() {
      this.cargada1 = true;
      this.cargada2 = false;
      let id = this.mantenimiento.id_mecanico;
      let trabajo = this.mantenimiento.trabajos_realizados;
      let horas = this.mantenimiento.horas_invertidas;
      let url =
        "http://localhost:3001/mantenimientos/" +
        id +
        "/" +
        trabajo +
        "/" +
        horas;
      this.$axios
        .put(url)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancelar() {
      this.cargada1 = true;
      this.cargada2 = false;
      this.mantenimiento = {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados: "",
        horas_invertidas: "",
      };
    }
  }
};
