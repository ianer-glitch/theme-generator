<script lang="ts">
import { defineComponent } from "vue";
import baseStep from "../baseStep/baseStep.vue";
import buttonContainerWithoutPseudoClass from "./components/buttonContainerWithoutPseudoClass.vue";
const name = 'step3'

export default defineComponent({
  name,

  components: { 
    baseStep : baseStep as any,
    buttonContainerWithoutPseudoClass: buttonContainerWithoutPseudoClass as any,
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

            </template>
            <template #container>
                <buttonContainerWithoutPseudoClass/>
            </template>
        </baseStep>
    </div>
</template>


<style scoped>

</style>
