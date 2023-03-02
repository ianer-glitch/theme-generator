<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
import buttonContainerWithAcitiveAndFocus from "./components/buttonContainerWithAcitiveAndFocus.vue";

const name = 'step7'

export default defineComponent({
  name,

  components: { 
    baseStep : baseStep as any,
    ColorPickerInput: ColorPickerInput as any,
    buttonContainerWithAcitiveAndFocus: buttonContainerWithAcitiveAndFocus as any,
    
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
        buttonActiveAndFocusColor:'#0b7ad1',
        buttonActiveAndFocusBorderColor: '#0b7ad1',
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
             <buttonContainerWithAcitiveAndFocus/>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
