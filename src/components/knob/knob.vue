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

  methods: { },

  computed: { }, 

});
</script>

<template>
    <div>
      <label>{{label}}</label>
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
</template>


<style scoped>

</style>
