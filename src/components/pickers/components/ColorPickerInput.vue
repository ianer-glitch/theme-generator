<script lang="ts">
import { defineComponent } from "vue";
const name = "ColorPickerInput";

export default defineComponent({
  name,

  emits:["mounted","change"],
  components: {},
  props: {
    label : {
        type : String,
        default :"",
    },
    defaultColor : {
        type : String,
        default :"",
    },
    
    
  },

  mounted() {
    this.color=this.defaultColor
    this.$emit('mounted',this.color)   
  },

  methods: {
    emitText(){
      console.log(this.isHex(this.color))
      
      this.color = this.color[0] === "#" ? this.color.slice(1,this.color.length) : this.color
      
      console.log(this.color)
      if(this.isHex(this.color)){
        this.$emit('change', `#${this.color}`)
      }else{
        this.$emit('change', `${this.color}`)
      }
    },
    isHex(num:string) {
      return Boolean(num.match( /[0-9A-Fa-f]{6}/gm))
    },
    returnLabel(){
      let tempLabel = this.label
      const result = tempLabel.replace(/([A-Z])/g ," $1")
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
      return finalResult
    },
  },

  updated() {

  },

  data() {
    return {
        color:"" as string
    };
  },

  computed: {},
});
</script>

<template>
  <main class="color-picker">
    <p>{{returnLabel()}}</p> 
    <div class="input-group">
      <PInputText @change="emitText" :placeholder="defaultColor" class="input" v-model="color"/>
      <PButton @click="color = defaultColor ; $emit('change', `${color}`)" icon="pi pi-refresh" class="p-button-rounded p-button-secondary p-button-text" />
       <PColorPicker  v-model="color" @change="$emit('change', `#${color}`)"/>
    </div>
    
  </main>
</template>

<style scoped >
.color-picker{
  height: fit-content;
  width:100%;
  text-align: left;
  word-wrap: break-word;
  padding:5px;
}
.input-group{ 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap:5px;
  width:fit-content;
    
}

.input{
  width: 100%;
}
:deep(.p-button){
  color:#FFFFFF;
  background-color:gray;
}
:deep(.p-button:enabled:hover){
  color:#FFFFFF;
  background-color: orange;
}
:deep(.p-inputtext){
  color:gray; 
  background-color: #F0F0F0;
}
</style>
