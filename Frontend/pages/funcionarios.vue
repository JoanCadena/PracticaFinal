<template>
  <div>
    <b-container fluid="md" id="container">
      <br />
      <center>
        <div id="titlecontent">Registro de funcionarios</div>
      </center>
      <hr />

      <b-form action="javascript:void(0)" @submit="crearFuncionario()" @reset="onReset">
        <b-form-group label="Tipo de documento:" label-for="tipo_documento" v-if="!enEdicion">
          <b-form-select
            id="tipo_documento"
            v-model="funcionario.tipo_documento"
            :options="tipos_documento"
            required
            v-if="!enEdicion"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Nro. de documento:" label-for="documento" v-if="!enEdicion">
          <b-form-input
            type="number"
            v-model="funcionario.documento"
            placeholder="Ingrese su número de documento"
            id="documento"
            required
            v-if="!enEdicion"
          />
        </b-form-group>

        <b-form-group label="Nombre(s):" label-for="nombre">
          <b-form-input
            type="text"
            v-model="funcionario.nombre"
            placeholder=" Ingrese aqui su nombre"
            id="nombre"
            required
          />
        </b-form-group>

        <b-form-group label="Apellido(s):" label-for="apellidos">
          <b-form-input
            type="text"
            v-model="funcionario.apellidos"
            placeholder="Ingrese aqui su apellido"
            id="apellidos"
            required
          />
        </b-form-group>

        <b-form-group label="Celular:" label-for="celular">
          <b-form-input
            type="number"
            v-model="funcionario.celular"
            placeholder="Ingrese aqui su número celular"
            id="celular"
            required
          />
        </b-form-group>

        <b-form-group label="Correo:" label-for="correo">
          <b-form-input
            type="email"
            v-model="funcionario.correo"
            placeholder="Ingrese aqui su correo electronico"
            id="correo"
            required
          />
        </b-form-group>

        <b-form-group label="Rol:" label-for="rol">
          <b-form-select
            id="rol"
            v-model="funcionario.rol"
            :options="roles"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Clave:" label-for="clave">
          <b-form-input
            type="password"
            v-model="funcionario.clave"
            placeholder="Ingrese aqui su contraseña"
            id="clave"
            required
          />
        </b-form-group>

        <b-button type="submit" variant="primary" v-if="!enEdicion">Crear Funcionario</b-button>
        <b-button @click="actualizarFuncionario()" variant="primary" v-else>Actualizar Funcionario</b-button>
        <b-button @click="cancelarEdicion()" v-if="enEdicion" variant="danger">Cancelar</b-button>
      </b-form>
      <br />

      <b-table striped hover :items="lista_funcionarios" :fields="fields">
        <template v-slot:cell(acciones)="row">
          <b-button size="sm" @click="cargarFuncionario(row)" class="mr-2">Modificar</b-button>
        </template>
      </b-table>
      <hr />
      <br />
      <div id="titlecontent">Eliminación de funcionarios</div>

      <br />
      <b-form action="javascript:void(0)" @submit="eliminarFuncionario()" @reset="onReset">
        <b-form-group label="Ingrese documento del funcionario a eliminar" label-for="doc">
          <b-form-input
            type="number"
            v-model="funcionario.documento"
            placeholder="¡Solo sirve para Eliminar!"
            id="doc"
            required
          />
        </b-form-group>
        <b-button type="submit" variant="danger" v-if="!enEdicion">Eliminar Funcionario</b-button>
      </b-form>

      <br />
    </b-container>
  </div>
</template>

<script src="@/assets/funcionarios.js" />

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
