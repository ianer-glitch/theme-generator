<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
import buttonContainerWithPseudoClass from "./components/buttonContainerWithPseudoClass.vue";
const name = 'step4'

export default defineComponent({
  name,

  components: { 
    baseStep : baseStep as any,
    ColorPickerInput: ColorPickerInput as any,
    buttonContainerWithPseudoClass: buttonContainerWithPseudoClass as any
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
        buttonHoverColor   : '#2196F3',
        checkboxRadiobuttonColor       : '#2196F3',
        generalCheckBoxRadioButtonHoverBorderColor        : '#2196F3',
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
              <buttonContainerWithPseudoClass/>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
