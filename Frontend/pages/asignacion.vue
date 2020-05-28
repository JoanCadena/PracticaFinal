<template>
  <div>
    <b-container fluid="md" id="container">
      <br />
      <div id="titlecontent">Asignación de mantenimientos</div>
      <hr />

      <b-form
        action="javascript:void(0)"
        @submit="crearMantenimiento()"
        @reset="onReset"
        id="mn"
        v-if="carga1"
      >
        <b-form-group id="id" label="Documento del mecanico:" label-for="id">
          <b-form-input
            type="text"
            id="id"
            v-model="mantenimiento.id_mecanico"
            placeholder="Nro. de documento del mecanico"
            disabled
            required
          />
        </b-form-group>

        <b-form-group id="placa" label="Placa de la moto:" label-for="placa">
          <b-form-input
            type="text"
            id="placa"
            v-model="mantenimiento.placa"
            placeholder="Ingrese aqui la placa de la moto"
            required
          />
        </b-form-group>

        <b-form-group id="fecha" label="Fecha de la asignación:" label-for="fecha">
          <b-form-input
            type="date"
            id="fecha"
            v-model="mantenimiento.fecha"
            placeholder="Ingrese aqui la fecha de la asignación"
            required
          />
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="primary">Asignar</b-button>
        </center>
      </b-form>

      <b-form
        action="javascript:void(0)"
        @submit="actualizar()"
        @reset="onReset"
        id="mn"
        v-if="carga2"
      >
        <b-form-group id="id2" label="Documento del mecanico:" label-for="id2">
          <b-form-input
            type="text"
            id="id2"
            v-model="mantenimiento.id_mecanico"
            placeholder="Nro. de documento del mecanico"
            disabled
            required
          />
        </b-form-group>

        <b-form-group id="placa2" label="Placa de la moto:" label-for="placa2">
          <b-form-input
            type="text"
            id="placa2"
            v-model="mantenimiento.placa"
            placeholder="Ingrese aqui la placa de la moto"
            required
          />
        </b-form-group>

        <b-form-group id="fecha2" label="Fecha de la asignación:" label-for="fecha2">
          <b-form-input
            type="date"
            id="fecha2"
            v-model="mantenimiento.fecha"
            placeholder="Ingrese aqui la fecha de la asignación"
            required
          />
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="primary">Actualizar</b-button>
        </center>
      </b-form>
      <hr />

      <div id="titlecontent">Lista de Mecanicos</div>
      <hr />

      <b-table striped hover responsive bordered :items="lista_mecanicos" :fields="fields2">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="cargarMecanico(row)" class="mr-2" variant="success">Asignar</b-button>
        </template>
      </b-table>
      <hr />

      <div id="titlecontent">Lista de Mantenimientos</div>
      <hr />

      <b-table striped hover responsive bordered :items="lista_mantenimientos" :fields="fields1">
        <template v-slot:cell(acciones)="row">
          <b-button
            size="sm"
            @click="cargarMantenimiento(row)"
            class="mr-2"
            variant="success"
          >Actualizar</b-button>
        </template>
      </b-table>
      <hr />
      <br />

      <div id="titlecontent">Eliminación de Mantenimientos</div>

      <br />
      <b-form action="javascript:void(0)" @submit="eliminarMantenimiento()" @reset="onReset">
        <b-form-group
          label="Ingrese documento del mecanico del Mantenimiento a eliminar"
          label-for="del"
        >
          <b-form-input
            type="number"
            v-model="mantenimiento.id_mecanico"
            placeholder="¡Solo sirve para Eliminar!"
            id="doc"
            required
          />
        </b-form-group>

        <b-form-group label="Ingrese placa de la moto del Mantenimiento a eliminar" label-for="del">
          <b-form-input
            type="text"
            v-model="mantenimiento.placa"
            placeholder="¡Solo sirve para Eliminar!"
            id="pl"
            required
          />
        </b-form-group>
        <b-button type="submit" variant="danger" v-if="carga1">Eliminar Funcionario</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script src="@/assets/asignacion.js" />

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
