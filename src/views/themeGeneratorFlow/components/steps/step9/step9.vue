<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
import textContainer from "./components/textContainer.vue";


const name = 'step9'

export default defineComponent({
  name,

  components: {
    baseStep: baseStep as any,
     ColorPickerInput:  ColorPickerInput as any,
    textContainer :  textContainer as any,
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
      colors:{
        h1FontColor:'#495057',                 
        h2FontColor:'#495057',
        h3FontColor:'#495057', 
        h4FontColor:'#495057',
        h5FontColor:'#495057',
        h6FontColor:'#495057',
        pFontColor :'#495057',
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
            <colorPickerInput v-for="(color,colorName)  in  colors"
              :defaultColor="color"
              @change="$emit(colorName,$event)"
              @mounted="$emit(colorName,$event)"
              :label="colorName"
            />
            </template>
            <template #container>
              <textContainer/>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
