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
    }
  },

  mounted () { 
    this.$emit('mounted',this.size)
  },

  updated () { },

  data () {
    return { 
        size : 10
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
              v-model="size" 
              :min="min" 
              :max="max"
              textColor="#495057"
              valueColor="#495057"
              rangeColor="#F0F0F0" 
              @change="$emit('change',size)"
          />
    </div>
</template>


<style scoped>

</style>
