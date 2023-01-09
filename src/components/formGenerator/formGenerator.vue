<script lang="ts">
import { defineComponent } from "vue";
import {h} from "vue"

const name = "formGenerator";

export default defineComponent({
  name,

  components: {

  },

  props: {
    components : {
        type : Object,
        default :{},
    },
    display : {
      type : String,
      default :"flex",
    },
    columnNumber:{
      type : Number,
      default :0,
    },
    rowNumber:{
      type : Number,
      default :0,
    },
    needAllData:{
      type:Boolean,
      default:false,
    }

  },

  mounted() {
    console.log(this.components)
   
  },

  methods: {},

  updated() {

  },

  data() {
    return {
        
    };
  },

  computed: {},

  watch:{
    needAllData(newValue){
      let valuesToReturn : Array<Object>  = []
      this.components.forEach((element : any) => {
        valuesToReturn.push(element.vmodel)
      });
      this.$emit('all-data',valuesToReturn)
    }
  }

});
</script>

<template>
    <main :class="display ===  'flex' ? 'form-flex' : 'form-grid'">    
        <div v-for="component,index in components" class="container">
            <p>{{component.props.label}}</p>
            <component 
                :is="component.name"
                :style="component.style"
                v-bind="component.props ? component.props : {} "
                v-model="component.vmodel.defaultValue"
                v-on:change="$emit(`${component.vmodel.name}-change`,component.vmodel.defaultValue)"
                >
            </component>
        </div>
            

    </main>
</template>

<style scoped>
.form-flex{
    width: 100%;
    height: 100%;
    display: flex;
    gap:15px;
}
.form-grid{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(v-bind('rowNumber'),1fr);
    grid-template-columns: repeat(v-bind('columnNumber'),1fr);
    gap:15px;
}
.container{
    width: 100%;
    height: 100%;
}
</style>
