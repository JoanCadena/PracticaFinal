export default {
    data() {
      return {
        mecanico: false,
        admin: false,
        show: true
      };
    },
    methods: {
      loginMecanico(){
        this.mecanico = true;
        this.admin = false;
      },
      loginAdmin(){
        this.mecanico = false;
        this.admin = true;
      }
    }
  };