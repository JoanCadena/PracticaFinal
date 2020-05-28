export default {
  beforeMount() {
    this.cargarLS();
  },
  data() {
    return {
      enEdicion: false,
      lista_motos: [],
      fields: ["placa", "estado", "clase", "marca", "modelo", "color", "cilindraje", "id_propietario", "acciones"],
      moto: {
        placa: "",
        estado: "",
        clase: "",
        marca: "",
        modelo: "",
        color: "",
        cilindraje: "",
        id_propietario: "",
        nro_soat: "",
        vencimiento_soat: "",
        nro_tecnomecanica: "",
        vencimiento_tecnomecanica: "",
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
      let url = "http://localhost:3001/motos";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_motos = respuesta.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    crearMoto() {
      let mt = this.moto;
      let url = "http://localhost:3001/motos";
      this.$axios
        .post(url, mt)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {});
      this.moto = {
        placa: "",
        estado: "",
        clase: "",
        marca: "",
        modelo: "",
        color: "",
        cilindraje: "",
        id_propietario: "",
        nro_soat: "",
        vencimiento_soat: "",
        nro_tecnomecanica: "",
        vencimiento_tecnomecanica: ""
      };
    },

    eliminarMoto() {
      let placa = this.moto.placa;
      let url = "http://localhost:3001/motos/" + placa;
      this.$axios
        .delete(url)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {});
      this.moto = {
        placa: "",
        estado: "",
        clase: "",
        marca: "",
        modelo: "",
        color: "",
        cilindraje: "",
        id_propietario: "",
        nro_soat: "",
        vencimiento_soat: "",
        nro_tecnomecanica: "",
        vencimiento_tecnomecanica: ""
      };
    },

    cargarMoto({ item }) {
      let aux = this.lista_motos.find(moto => moto.placa == item.placa);
      this.enEdicion = true;
      this.moto = Object.assign({}, aux);
    },

    actualizarMoto() {
      this.enEdicion = false;
      let placa = this.moto.placa;
      let mt = this.moto;
      let url = "http://localhost:3001/motos/" + placa;
      this.$axios
        .put(url, mt)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {});
      this.moto = {
        placa: "",
        estado: "",
        clase: "",
        marca: "",
        modelo: "",
        color: "",
        cilindraje: "",
        id_propietario: "",
        nro_soat: "",
        vencimiento_soat: "",
        nro_tecnomecanica: "",
        vencimiento_tecnomecanica: ""
      };
    },

    cancelarEdicion() {
      this.moto.placa = "";
      this.moto.estado = "";
      this.moto.clase = "";
      this.moto.marca = "";
      this.moto.modelo = "";
      this.moto.color = "";
      this.moto.cilindraje = "";
      this.moto.id_propietario = "";
      this.moto.nro_soat = "";
      this.moto.vencimiento_soat = "";
      this.moto.nro_tecnomecanica = "";
      this.moto.vencimiento_tecnomecanica = "";
      this.enEdicion = false;
    }
  }
};
