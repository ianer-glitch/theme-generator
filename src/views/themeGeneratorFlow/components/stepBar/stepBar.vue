<script lang="ts">
import { defineComponent } from "vue";
const name = 'stepBar'

export default defineComponent({
  name,

  components: { }, 

  props: { 
    totalSteps:{
      type:Number,
      default:0
    },
    index:{
      type:Number,
      default:0
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
    <div class="stepBar">
       <div v-for="i in totalSteps" 
          class="ball"
          :key="i"
          @click="$emit('index',i)"
        >
          <div v-if="index === i" class="ball-focused"></div>
        </div>
      
    </div>
</template>


<style scoped>
.stepBar{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80px;
    background-color: #E5BA73;
    border-radius: 8px;
    gap:10%;
}
.ball-focused{
  width: 15px;
  height: 15px;
  background-color:#C58940;
  border-radius: 100%;
}
.ball{
  width: 25px;
  height: 25px;
  background-color:#FAF8F1;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
