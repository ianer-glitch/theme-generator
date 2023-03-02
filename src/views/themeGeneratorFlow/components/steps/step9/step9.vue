<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
import textSizeContainer from "./components/textSizeContainer.vue";
import knob from "../step9/components/knob/knob.vue";

const name = 'step9'

export default defineComponent({
  name,

  components: {
    baseStep: baseStep as any,
     ColorPickerInput:  ColorPickerInput as any,
    textSizeContainer :  textSizeContainer as any,
    knob : knob as any,
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
      sizes:{
        h1FontSize:'10',                 
        h2FontSize:'10',
        h3FontSize:'10', 
        h4FontSize:'10',
        h5FontSize:'10',
        h6FontSize:'10',
        pFontSize :'10',
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
            <!-- <colorPickerInput v-for="(color,colorName)  in  colors"
              :defaultColor="color"
              @change="$emit(colorName,$event)"
              @mounted="$emit(colorName,$event)"
              :label="colorName"
            /> -->
            <knob v-for="(size,sizeName) in sizes"
                :label="sizeName"
                :min="10"
                :max="50"
                @change="$emit(sizeName,$event)"
                @mounted="$emit(sizeName,$event)"
                />
            </template>
            <template #container>
              <textSizeContainer/>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
