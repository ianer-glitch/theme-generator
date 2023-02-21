<script lang="ts">
import { defineComponent } from "vue";
import stepBar from "../../stepBar/stepBar.vue";
import buttonStep from "../../buttonStep/buttonStep.vue";
const name = 'baseStep'

export default defineComponent({
  name,

  components: {
    stepBar: stepBar as any,
    buttonStep : buttonStep as any 
  }, 

  props: { 
    index:{
      type:Number,
      default:1
    }
  },
  emits:['index'],
  mounted () { },

  updated () { },

  data () {
    return { 
      
      totalSteps:3,
    }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
    <div class="step">
      <div class="control-panel">
        <div class="control-panel-container">
          <slot name="control-panel"></slot>
        </div>
      </div> 
      <div class="step-container">
        <stepBar :totalSteps="totalSteps" :key="index" :index="index" @index="$emit('index',$event)"/>
        <div class="container">
          <slot name="container"></slot>
        </div>
        <div class="buttonSteps">
          <buttonStep icon="pi pi-arrow-left" @click="$emit('index',index <=1 ? 1 :index - 1)"/>
          <buttonStep icon="pi pi-arrow-right" @click="$emit('index',index >= totalSteps ? totalSteps : index + 1)"/>
        </div>
      </div>
    </div>
</template>


<style scoped>
.step{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* background-color: #FAF8F1; */
  background-image:url(@/assets/cookies/cookie1.svg);
  background-repeat: no-repeat;
  background-position: 70vw 50vh;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FAF8F1;
  width: 90%;
  height: 80%;
  border-radius:16px;
  padding:4rem;
}
.control-panel{
  position: absolute;
  background-color: #FAEAB1;
  width: 18%;
  height: 100%;
  left:0;
  border-radius: 0 100px 100px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  /* border:12px solid #e5ba73; */
}
.control-panel-container{
  height: calc(100% - 12px);
  width: calc(100% - 12px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:1.2rem;
  background-color: #e5ba73;
  border-radius: inherit;
}
.step-container{
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 90%;
  gap:12px;
  align-items: center;
  justify-content: center;
  background-color: #FAEAB1;
  padding: 10px;
  border-radius: 16px;
}
.buttonSteps{
  display: inline-flex;
  justify-content: space-between;
  width: 80%;
  height: fit-content;
}
</style>
