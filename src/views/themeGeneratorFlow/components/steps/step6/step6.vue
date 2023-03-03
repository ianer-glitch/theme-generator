<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
import buttonContainerWithHover from "./components/buttonContainerWithHover.vue";

const name = 'step6'

export default defineComponent({
  name,

  components: { 
    baseStep : baseStep as any,
    ColorPickerInput: ColorPickerInput as any,
    buttonContainerWithHover: buttonContainerWithHover as any,
    
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
        buttonHoverColor   : '#0d89ec',
        buttonHoverBorderColor: '#0d89ec',
        buttonSecondaryHoverColor:'#56717d',
        buttonSecondaryHoverBorderColor:'#56717d',
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
             <buttonContainerWithHover/>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
