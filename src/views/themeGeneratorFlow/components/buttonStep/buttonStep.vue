<script lang="ts">
import { defineComponent } from "vue";
const name = 'buttonStep'

export default defineComponent({
  name,

  components: { }, 

  props: { 
    label:{
      type:String,
      default:'',
    },
    icon:{
      type:String,
      default:''
    }
  },

  mounted () { },

  updated () { },

  data () {
    return { }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
      <div class="buttonStep">     
        <i :class="icon" style="font-size: 1.2rem; color:#FAF8F1"></i>   
          {{ label }}
      </div>
</template>


<style scoped>
.buttonStep{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5BA73;
    width: 100px;
    height: 42px;
    border-radius: 8px;
}
.buttonStep :hover{
  cursor: pointer;
}
</style>
