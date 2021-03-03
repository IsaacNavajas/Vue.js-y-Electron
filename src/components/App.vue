<template>
  <div>
    <center>
    <div class="background col-5">
        
        <img alt="Vue logo" src="../assets/logo.png" class="logo">
          <h5>{{resultado ? `enhorabuena ${this.resultado.value} &#129395; &#127881; &#127881;` : this.msg  }}</h5>
            <p class="maximoTexto">
              el maximo de concursantes es de; <input type="number" class="inputTotalNumero" v-model="totalDePersonas"/> 
            </p>
            <h6 class="totalDePersonas">El total de personas es de {{totalDePersonas}}</h6>

          <div class="col-12 capsula">
            <center>
              <div class="input-group mb-3">
                <input type="text" v-model="entrada" class="form-control col-12" placeholder="Escribe aqui el nombres..." id="texto"  :disabled="disabled === 1">
                  <div class="input-group-append col-12">
                    <button type="button" v-on:click="retornarlo" class="btn btn-outline-secondary boton-uno"> agregar un nombre</button>
                  </div>
              </div>
            </center>  
          </div>

          <p class ="final"> persona {{personas.length + 1}}/{{totalDePersonas}} => {{ entrada}} </p><br/>

          <button type="button" v-on:click="resetear" class="final btn btn-danger"> resetear concurso</button>
    </div>
    <div class="hello col-7 margen-altura ">
        <Recount :personas="personas" :totalDePersonas="totalDePersonas" v-on:eliminar="eliminar" v-on:calcularEntrada="ResultadoBloqueo"/>
    </div>
      </center>
  </div>
</template>

<script>
import Recount from '@/components/Recount.vue';
import swal from 'sweetalert';

export default {
  name: 'App',
  
  data:function(){
    return{
      hola: 'hola',
      entrada:'',
      totalDePersonas:"10",
      personas:[],
      resultado:"",
      resultadoFijo:false,
      msg:"RinoConcurso",
      disabled:0,
      id:0,
    }
  },
  components:{
    Recount
  },

  methods:{
      retornarlo: function(){
        if(this.entrada != '' && this.personas.length < this.totalDePersonas ){
          return (this.personas.push({'id': `${this.id += 1}`,'id_length': `${this.personas.length + 1}`, 'value': `${this.entrada}`}), this.entrada="")
        }
      },


    resetear() {
      this.resultado = "",
      this.personas = [],
      this.totalDePersonas = "10",
      this.disabled = 0,
      this.id = 0
    },

    eliminar: function(e){
     
        this.personas.splice(e - 1, 1);
 
    },

    ResultadoBloqueo: function(e){

        if(e && !this.resultadoFijo){
          this.resultado = e[Math.floor(Math.random()*(e.length))];
          swal(`Felicidades ${this.resultado.value}`, `Eres el ganador de rino-concurso`, "success");
          this.disabled = 1;
          this.resultadoFijo = true
        }
        else{
          swal(`Felicidades ${this.resultado.value}`, `Eres el ganador de rino-concurso`, "success");
        }  
    }

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
a {
  color: #42b983;
}
.margen-altura {
  margin-top:50px;
}
.capsula{
  margin-top:20px;
}

.background {
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 45%, rgba(34,193,195,1) 100%);
  height: all;
  border-left-color: rgb(201, 76, 76);
}
input{
    margin-left: 15%;
    margin-right: 15%;
}

.boton-uno{
  margin-top:20px;
  margin-bottom:10px;
}

.final{
  margin-bottom:5px;
}
.logo{
  margin-top:20px;
  margin-bottom:15px;
}
.inputTotalNumero{
  width:100px;
  height:30px;
  margin-right: 15%;
  padding:0;
}

.totalDePersonas{
  font-size:10px;
  margin-top:-10px;
}



</style>
