<script lang="ts">
import { defineComponent } from "vue";
const name = 'knob'

export default defineComponent({
  name,

  components: { }, 

  props: { 
    label:{
      type:String,
      default:'aa'
    },
    min:{
      type:Number,
      default:10
    },
    max:{
      type:Number,
      default:50
    },
    defaultValue:{
      type:Number,
      default:0
    },
    size:{
      type:Number,
      default:60
    }
  },

  mounted () {
    this.value=this.defaultValue
    this.$emit('mounted',this.value)
  },

  updated () { },

  data () {
    return { 
        value : 10
    }
  },

  methods: { 
    returnLabel(){
      let tempLabel = this.label
      const result = tempLabel.replace(/([A-Z])/g ," $1")
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
      return finalResult
    },
  },

  computed: { }, 

});
</script>

<template>
      
    <div class="container">

      <label class="label">{{returnLabel()}}</label>
      <PButton @click="value = defaultValue ; $emit('change', value)" icon="pi pi-refresh" class="p-button-rounded p-button-secondary p-button-text" />
      <div >
        <PKnob 
              v-model="value" 
              :min="min" 
              :max="max"
              textColor="#495057"
              valueColor="#495057"
              rangeColor="#F0F0F0" 
              :size="size"
              @change="$emit('change',value)"
        />
      </div>
      
    </div>
</template>


<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width:100%;
  text-align: left;
  word-wrap: break-word;
  padding:5px;
}
.label{
  color:#744c1b;
}
</style>
