<template>
  <div>

            <button type="button" v-on:click="calcular" v-if="this.personas.length > 1" class="btn btn-outline-secondary "> calcular sorteo</button>
          <br/><br/>

            <p v-if="this.personas.length == this.totalDePersonas" class="colorRojo"> {{`** NO PUEDES ESCRIBIR MAS DE ${this.totalDePersonas} NOMBRES **`}}</p>

              <div class="col-6" v-for="v in this.personas" v-bind:key="v.id">
                  <ul>
                    <li >{{ v.id }} - {{ v.value }} <button type="button" v-on:click="eliminar(v)" class="btn btn-warning botonEliminar" >eliminar</button></li>
                  </ul>
              </div>
  </div>
</template>

<script>

export default {
  name: 'Recount',

    props: {
    totalDePersonas: String,
    personas:{
      type: Array,
      default: () => [{}]
    },
  },

  methods:{

      calcular: function(){

        this.$emit('calcularEntrada', this.personas);

      },

      eliminar: function(e){
        
        return (this.$emit('eliminar', `${e.id_length}`))
        
      },

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
   
}
li {
  display: inline-block;
  margin: 0 10px;
  color: rgb(88, 88, 88);
}

.botonEliminar{
  margin-left:15px;
  padding: 0px 40px;
}

.colorRojo{
  color:red;
}



</style>
