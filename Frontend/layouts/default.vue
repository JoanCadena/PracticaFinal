<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <img src="../static/2.png" fluid alt="Universidad de Medellín" height="55px" width="120px" />
        <b-navbar-brand href="#"></b-navbar-brand>
        <b-navbar-brand>Taller de Motos CadenaP</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-if="admin">|</b-nav-item>
            <b-nav-item :to="{ name: 'funcionarios' }" v-if="admin">Registro de funcionarios</b-nav-item>
            <b-nav-item>|</b-nav-item>
            <b-nav-item :to="{ name: 'motos' }">Registro de motos</b-nav-item>
            <b-nav-item v-if="admin">|</b-nav-item>
            <b-nav-item :to="{ name: 'asignacion' }" v-if="admin">Asignación de mantenimientos</b-nav-item>
            <b-nav-item v-if="mecanico">|</b-nav-item>
            <b-nav-item :to="{ name: 'mantenimientos' }" v-if="mecanico">Lista de mantenimientos</b-nav-item>
            <b-nav-item>|</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>Ingresar</em>
              </template>
              <b-dropdown-item @click="loginMecanico()">Mecanico</b-dropdown-item>
              <b-dropdown-item @click="loginAdmin()">Admininistrador</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
  </div>
</template>

<script src="@/assets/default.js" />

<style>
.navbar.navbar-dark.bg-dark {
  background-color: goldenrod !important;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-image: url("https://thumbs.dreamstime.com/b/rastros-de-neum%C3%A1ticos-de-coche-en-el-asfalto-textura-de-la-superficie-del-asfalto-canse-las-marcas-pisada-del-neum%C3%A1tico-marcas-97520006.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
