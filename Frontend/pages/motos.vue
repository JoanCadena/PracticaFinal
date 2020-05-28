<template>
  <div>
    <b-container fluid="md" id="container">
      <br />
      <center>
        <div id="titlecontent">Registro de motos</div>
      </center>
      <hr />

      <b-form action="javascript:void(0)" @submit="crearMoto()" @reset="onReset">
        <b-form-group label="Nro. de placa:" label-for="placa" v-if="!enEdicion">
          <b-form-input
            type="text"
            v-model="moto.placa"
            placeholder="Ingrese su número de placa"
            id="placa"
            required
            v-if="!enEdicion"
          />
        </b-form-group>

        <b-form-group label="Estado:" label-for="estado">
          <b-form-textarea
            rows="3"
            max-rows="7"
            v-model="moto.estado"
            placeholder=" Ingrese aqui el estado de la moto"
            id="estado"
            required
          />
        </b-form-group>

        <b-form-group label="Clase:" label-for="clase">
          <b-form-input
            type="text"
            v-model="moto.clase"
            placeholder="Ingrese aqui la clase de moto"
            id="clase"
            required
          />
        </b-form-group>

        <b-form-group label="Marca:" label-for="marca">
          <b-form-input
            type="text"
            v-model="moto.marca"
            placeholder="Ingrese aqui su marca de moto"
            id="marca"
            required
          />
        </b-form-group>

        <b-form-group label="Modelo:" label-for="modelo">
          <b-form-input
            type="text"
            v-model="moto.modelo"
            placeholder="Ingrese aqui el modelo de la moto"
            id="modelo"
            required
          />
        </b-form-group>

        <b-form-group label="Color:" label-for="color">
          <b-form-input
            type="text"
            v-model="moto.color"
            placeholder="Ingrese aqui su color"
            id="color"
            required
          />
        </b-form-group>

        <b-form-group label="Cilindraje:" label-for="cilindraje">
          <b-form-input
            type="number"
            v-model="moto.cilindraje"
            placeholder="Ingrese aqui su cilindraje"
            id="cilindraje"
            required
          />
        </b-form-group>

        <b-form-group label="Doc. propietario:" label-for="id_propietario">
          <b-form-input
            type="text"
            v-model="moto.id_propietario"
            placeholder="Ingrese aqui el Nro de Doc. del propietario"
            id="id_propietario"
            required
            v-if="!enEdicion"
          />
        </b-form-group>

        <b-form-group label="Número de soat:" label-for="nro_soat">
          <b-form-input
            type="text"
            v-model="moto.nro_soat"
            placeholder="Ingrese aqui el Nro de soat"
            id="nro_soat"
            required
          />
        </b-form-group>

        <b-form-group label="Vencimiento de soat:" label-for="vencimiento_soat">
          <b-form-input
            type="date"
            v-model="moto.vencimiento_soat"
            placeholder="Ingrese aqui la fecha de vencimiento del soat"
            id="vencimiento_soat"
            required
          />
        </b-form-group>

        <b-form-group label="Número de tecnomecanica:" label-for="nro_tecnomecanica">
          <b-form-input
            type="text"
            v-model="moto.nro_tecnomecanica"
            placeholder="Ingrese aqui el Nro de tecnomecanica"
            id="nro_tecnomecanica"
            required
          />
        </b-form-group>

        <b-form-group label="Vencimiento de tecnomecanica:" label-for="vencimiento_tecnomecanica">
          <b-form-input
            type="date"
            v-model="moto.vencimiento_tecnomecanica"
            placeholder="Ingrese aqui la fecha de vencimiento del tecnomecanica"
            id="vencimiento_tecnomecanica"
            required
          />
        </b-form-group>

        <b-button type="submit" variant="primary" v-if="!enEdicion">Crear Moto</b-button>
        <b-button @click="actualizarMoto()" variant="primary" v-else>Actualizar Moto</b-button>
        <b-button @click="cancelarEdicion()" v-if="enEdicion" variant="danger">Cancelar</b-button>
      </b-form>
      <br />

      <b-table striped hover :items="lista_motos" :fields ="fields">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="cargarMoto(row)" class="mr-2">Modificar</b-button>
        </template>
      </b-table>
      <hr />
      <br />
      <div id="titlecontent">Eliminación de motos</div>

      <br />
      <b-form action="javascript:void(0)" @submit="eliminarMoto()" @reset="onReset">
        <b-form-group label="Ingrese placa de la moto a eliminar" label-for="doc">
          <b-form-input
            type="text"
            v-model="moto.placa"
            placeholder="¡Solo sirve para Eliminar!"
            id="doc"
            required
          />
        </b-form-group>
        <b-button type="submit" variant="danger" v-if="!enEdicion">Eliminar Moto</b-button>
      </b-form>

      <br />
    </b-container>
  </div>
</template>

<script src="@/assets/motos.js" />

<style>
#titlecontent {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  font-family: Oswald, sans-serif;
  font-size: 20px;
  color: #076a94;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  align-content: center;
  font-weight: bold;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#container {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 30px;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  box-shadow: -7px 7px 26px 0 #969696;
}
</style>
