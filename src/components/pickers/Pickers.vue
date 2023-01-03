<script lang="ts">
import { defineComponent } from "vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue"

const name = "Pickers";
export default defineComponent({
  name,

  components: {
    ColorPickerInput:ColorPickerInput as any,
  },
  
  emits: ["color",
        "background-color",
        "input-border-color",
        "input-border-color-hover"
  ],
  
  props: {},

  mounted() {

  },

  methods: {},

  updated() {
    
  },

  data() {
    return { 
      color: '#f0f0f0',
      backgroundColor:'#FFFFFF',
      inputBorderColor:'#ced4da',
    };
  },

  computed: {},
});
</script>

<template>
  <main class="pickers">
    <PColorPicker
      v-model="color"
      @change="$emit('color', `#${color}`)"
      :inline="false"
    />

    <ColorPickerInput
      :defaultColor="backgroundColor"
      @change="$emit('background-color',$event) ; backgroundColor = $event"
      @mounted="$emit('background-color',$event) ;  backgroundColor = $event"
      label="background-color"
    />
  
    <ColorPickerInput
      :defaultColor="inputBorderColor"
      @change="$emit('input-border-color',$event) ;  inputBorderColor = $event"
      @mounted="$emit('input-border-color',$event) ;  inputBorderColor = $event"
      label="input-border-color"
    />
    
  </main>

</template>

<style scoped>
.pickers {
  width: fit-content;
}
</style>
