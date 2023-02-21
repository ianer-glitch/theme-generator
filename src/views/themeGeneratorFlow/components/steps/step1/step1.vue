<script lang="ts">
import FormsWithoutPseudoClass from "@/components/forms/components/formsWithoutPseudoClass.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
const name = 'step1'

export default defineComponent({
  name,

  components: { 
    baseStep: baseStep as any,  
    formsWithoutPseudoClass: FormsWithoutPseudoClass as any,
    colorPickerInput: ColorPickerInput as any
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
      generalConfig:{
        generalBackgroundColor                       : '#ffffff',
        generalInputBorderColor                      : '#ced4da',
        generalInputItensColor                       : '#6f7d6c',
        generalTextInInputColor                      : '#495057',
      },
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
            <colorPickerInput v-for="(color,colorName)  in generalConfig"
              :defaultColor="color"
              @change="$emit(colorName,$event)"
              @mounted="$emit(colorName,$event)"
              :label="colorName"
            />
          </template>
          <template #container>
            <formsWithoutPseudoClass></formsWithoutPseudoClass>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
