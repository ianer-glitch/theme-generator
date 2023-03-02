<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import checkboxRadioButtonContainerWithoutPseudoClass from "./components/checkboxRadioButtonContainerWithoutPseudoClass.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
const name = 'step3'

export default defineComponent({
  name,

  components: { 
    baseStep : baseStep as any,
    checkboxRadioButtonContainerWithoutPseudoClass: checkboxRadioButtonContainerWithoutPseudoClass as any,
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
        checkboxColor : '#2196F3',
        checkboxBorderColor : '#ced4da',
        checkBoxClickedUnfocusBorderColor: '#2196F3',
        
        radioButtonColor:'#2196F3',
        radiobuttonBorderColor : '#ced4da',
        radioButtonClickedUnfocusBorderColor:'#2196F3',
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
                <checkboxRadioButtonContainerWithoutPseudoClass/>
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
