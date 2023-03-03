<script lang="ts">
import { defineComponent } from "vue";

const name = 'textContainer'

export default defineComponent({
  name,

  components: { }, 

  props: { },

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
    <div class="text-container"> 
        <h1 class="primary-title">H1 Lorem Ipsum has been </h1>
        <h2 class="secondary-title" >H2 Lorem Ipsum has been </h2>
        <h3 class="third-title" >H3 Lorem Ipsum has been </h3>
        <h4 class="fourth-title" >H4 Lorem Ipsum has been </h4>
        <h5 class="fifth-title" >H5 Lorem Ipsum has been </h5>
        <h6 class="sixth-title" >H6 Lorem Ipsum has been </h6>
        <p class="paragraph">p Lorem Ipsum has been </p>    
    </div>
</template>


<style scoped>
.text-container{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width:100%;
  height: 100%;
  gap: 10%;
}
</style>
