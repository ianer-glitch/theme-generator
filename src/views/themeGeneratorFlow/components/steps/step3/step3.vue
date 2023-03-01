<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import buttonContainerWithoutPseudoClass from "./components/buttonContainerWithoutPseudoClass.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
const name = 'step3'

export default defineComponent({
  name,

  components: { 
    baseStep : baseStep as any,
    buttonContainerWithoutPseudoClass: buttonContainerWithoutPseudoClass as any,
    ColorPickerInput: ColorPickerInput as any
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
        checkboxColor : '#2196F3',
        checkBoxSelectedBorderColor:'#2196F3',
        radioButtonSelectedBorderColor:'#2196F3',
        checkboxBorderColor : '#ced4da',
        radioButtonColor:'#2196F3',
        radiobuttonBorderColor : '#ced4da',
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
                <buttonContainerWithoutPseudoClass/>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>
:deep(.p-checkbox .p-checkbox-box.p-highlight){
  border-color:var(--cor-92);
}
:deep(.p-radiobutton .p-radiobutton-box.p-highlight){
  border-color:var(--cor-92);
}
</style>
