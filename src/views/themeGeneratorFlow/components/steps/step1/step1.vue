<script lang="ts">
import FormsWithoutPseudoClass from "@/components/forms/components/formsWithoutPseudoClass.vue";
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
const name = 'step1'

export default defineComponent({
  name,

  components: { baseStep: baseStep as any,  
    formsWithoutPseudoClass: FormsWithoutPseudoClass as any}, 

  props: { 
    index:{
      type:Number,
      default:1
    }
  },

  mounted () { },

  updated () { },

  data () {
    return { 
   
    }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
    <div>
        <baseStep @index ="$emit('index',$event)" :index="index">
          <template #control-panel>
            
          </template>
          <template #container>
            
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
