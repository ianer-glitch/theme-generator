<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import formsWithPseudoClass from "@/components/forms/components/formsWithPseudoClass.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
const name = 'step2'

export default defineComponent({
  name,

  components: { 
    baseStep : baseStep as any,
    formsWithPseudoClass:formsWithPseudoClass as any,
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
        generalBoxShadowColor                        : '#a6d5fa',
        generalCheckBoxRadioButtonHoverBorderColor        : '#2196F3',
        generalInputHoverBorderColor : '#2196F3',
      }
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
            <colorPickerInput v-for="(color,colorName)  in generalConfig"
              :defaultColor="color"
              @change="$emit(colorName,$event)"
              @mounted="$emit(colorName,$event)"
              :label="colorName"
            />
            </template>
            <template #container>
                <formsWithPseudoClass></formsWithPseudoClass>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
