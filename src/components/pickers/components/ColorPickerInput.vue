<script lang="ls">
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

  methods: {},

  updated() {

  },

  data() {
    return {
        color:null
    };
  },

  computed: {},
});
</script>

<template>
  <main class="forms">
    <p>{{label}}</p> 
    <div class="input-group">
        <PInputText :placeholder="defaultColor"  v-model="color"/>
        <div class="button">
            <PColorPicker
                v-model="color"
                @change="$emit('change', `#${color}`)"
            />
        </div>
        <PButton label="Apply!" @click="$emit('change', `#${color}`)" />
    </div>
    
  </main>
</template>

<style scoped >

.input-group{
    display: inline-flex;
    align-items: center;
    gap:5px;
    border:1px solid;
    border-color:v-bind(`#${color}`);
    border-radius:8px;
    
}
.button{
    height: 100%;
    
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
  color:gray
}
</style>
