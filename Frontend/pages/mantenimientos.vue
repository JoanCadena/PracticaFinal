<template>
  <div>
    <b-container fluid="md" id="container">
      <br />
      <div id="titlecontent">Mantenimientos</div>
      <hr />

      <b-form
        action="javascript:void(0)"
        @submit="cargarLSid()"
        @reset="onReset"
        id="f1"
        v-if="cargada1"
      >
        <b-form-group id="mecanico" label="Filtrar por Nro. Documento:" label-for="filtro">
          <b-form-input
            id="mecanico"
            type="number"
            v-model="mantenimiento.id_mecanico"
            placeholder="Ingrese su número de documento"
            required
          />
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="primary">Filtrar</b-button>
        </center>
      </b-form>

      <b-form
        action="javascript:void(0)"
        @submit="actualizar()"
        @reset="onReset"
        id="mn"
        v-if="cargada2"
      >
        <b-form-group id="mn" label="Trabajo realizado:" label-for="mn">
          <b-form-textarea
            rows="3"
            max-rows="7"
            id="trabajo"
            v-model="mantenimiento.trabajos_realizados"
            placeholder="Describa el trabajo realizado"
            required
          />
        </b-form-group>

        <b-form-group id="mn" label="Horas invertidas:" label-for="mn">
          <b-form-input
            type="number"
            v-model="mantenimiento.horas_invertidas"
            placeholder="Ingrese el número de horas invertidas"
            id="modulo"
            required
          />
        </b-form-group>

        <center>
          <b-button size="sm" type="submit" variant="primary">Actualizar</b-button>
          <b-button size="sm" @click="cancelar()" class="mr-2" variant="danger">Cancelar</b-button>
        </center>
      </b-form>
      <hr />

      <div id="titlecontent">Lista de Mantenimientos</div>
      <hr />

      <b-table striped hover responsive bordered :items="lista_mantenimientos" :fields="fields">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="cargarlo(row)" class="mr-2" variant="success">Actualizar</b-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script src="@/assets/mantenimientos.js" />

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
