<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue";
import textSizeContainer from "./components/textSizeContainer.vue";
import knob from "@/components/knob/knob.vue";

const name = 'step8'

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
        h1FontSize:32,                 
        h2FontSize:26,
        h3FontSize:22, 
        h4FontSize:20,
        h5FontSize:18,
        h6FontSize:16,
        pFontSize :14,
      },
    }
  },

  methods: {
   },

  computed: { }, 

});
</script>

<template>
    <div>
        <baseStep @index = "$emit('index',$event)" :index = "index">
          <template #control-panel>
            <knob v-for="(size,sizeName) in sizes"
                :label="sizeName"
                :min="10"
                :max="60"
                :size="60"
                :defaultValue="size"
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
