export default {
  beforeMount() {
    this.cargarLS();
  },
  data() {
    return {
      enEdicion: false,
      lista_funcionarios: [],
      fields: ["nombre", "apellidos", "celular", "correo", "rol", "acciones"],
      funcionario: {
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
      tipos_documento: [
        {
          text: "Seleccione tipo de documento",
          value: null
        },
        {
          text: "CC",
          value: 1
        },
        {
          text: "CE",
          value: 2
        },
        {
          text: "NIT",
          value: 3
        },
        {
          text: "Pasaporte",
          value: 4
        }
      ],
      roles: [
        {
          text: "Seleccione su rol",
          value: null
        },
        {
          text: "Mecanico",
          value: 1
        },
        {
          text: "Administrador",
          value: 2
        }
      ],
      show: true
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
    },

    cargarLS() {
      let url = "http://localhost:3001/funcionarios";
      this.$axios
        .get(url)
        .then(respuesta => {
          this.lista_funcionarios = respuesta.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    crearFuncionario() {
      let fr = this.funcionario;
      let url = "http://localhost:3001/funcionarios";
      this.$axios
        .post(url, fr)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {});
      this.funcionario = {
        tipo_documento: null,
        documento: "",
        nombre: "",
        apellidos: "",
        celular: "",
        correo: "",
        rol: null,
        clave: ""
      };
    },

    eliminarFuncionario() {
      let documento = this.funcionario.documento;
      let url = "http://localhost:3001/funcionarios/" + documento;
      this.$axios
        .delete(url)
        .then(respuesta => {
          if (respuesta.data.rowCount != 0) {
          } else {
          }
          this.cargarLS();
        })
        .catch(error => {});
      this.funcionario = {
        tipo_documento: null,
        documento: "",
        nombre: "",
        apellidos: "",
        celular: "",
        correo: "",
        rol: null,
        clave: ""
      };
    },

    cargarFuncionario({ item }) {
      let aux = this.lista_funcionarios.find(
        funcionario => funcionario.documento == item.documento
      );
      this.enEdicion = true;
      this.funcionario = Object.assign({}, aux);
    },

    actualizarFuncionario() {
      this.enEdicion = false;
      let documento = this.funcionario.documento;
      let fr = this.funcionario;
      let url = "http://localhost:3001/funcionarios/" + documento;
      this.$axios
        .put(url, fr)
        .then(respuesta => {
          this.cargarLS();
        })
        .catch(error => {});
      this.funcionario = {
        tipo_documento: null,
        documento: "",
        nombre: "",
        apellidos: "",
        celular: "",
        correo: "",
        rol: null,
        clave: ""
      };
    },

    cancelarEdicion() {
      this.funcionario.tipo_documento = null;
      this.funcionario.documento = "";
      this.funcionario.nombre = "";
      this.funcionario.apellidos = "";
      this.funcionario.celular = "";
      this.funcionario.correo = "";
      this.funcionario.rol = null;
      this.funcionario.clave = "";
      this.enEdicion = false;
    }
  }
};
