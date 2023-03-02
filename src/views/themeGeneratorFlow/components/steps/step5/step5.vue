<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
import buttonContainer from "./components/buttonContainer.vue";

const name = 'step5'

export default defineComponent({
  name,

  components: { 
    baseStep : baseStep as any,
    ColorPickerInput: ColorPickerInput as any,
    buttonContainer: buttonContainer as any,
    
  }, 

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
      pButton:{
        buttonColor   : '#2196F3',
        buttonBorderColor :'2196F3',
      },
    }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
    <div>
        <baseStep @index = "$emit('index',$event)" :index = "index">
          <template #control-panel>
            <colorPickerInput v-for="(color,colorName)  in  pButton"
              :defaultColor="color"
              @change="$emit(colorName,$event)"
              @mounted="$emit(colorName,$event)"
              :label="colorName"
            />
            </template>
            <template #container>
             <buttonContainer/>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
