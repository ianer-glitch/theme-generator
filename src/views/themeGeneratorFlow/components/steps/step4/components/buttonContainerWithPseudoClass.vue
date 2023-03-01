<script lang="ts">
import { defineComponent } from "vue";
const name = 'buttonContainerWithPseudoClass'

export default defineComponent({
  name,

  components: { }, 

  props: { },

  mounted () { },

  updated () { },

  data () {
    return {
      checkBox1:true,
      checkBox2:false,
      checkBox3:false,
      radioButton:"1",
     }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
    <div class="with-pseudoclass">
      <PButton label="Primary" />
      <div class="radiobutton-container">
        <PRadioButton v-model="radioButton" value="1" class="pseudoclass-radio active"/>
        <PRadioButton v-model="radioButton" value="2"  class="pseudoclass-radio focus"/>
        <PRadioButton v-model="radioButton" value="3"  class="pseudoclass-radio "/>
      </div>
      <div class="checkbox-container">
        <PCheckBox v-model="checkBox1" :binary="true"  class="pseudoclass-radio active"/>
        <PCheckBox v-model="checkBox2" :binary="true" class="pseudoclass-check focus"/>
        <PCheckBox v-model="checkBox3" :binary="true" class="pseudoclass-check"/>
      </div>
    </div>
</template>


<style scoped>
.with-pseudoclass{
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:10px;
}
.radiobutton-container,.checkbox-container{
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.pseudoclass-radio,.pseudoclass-check{
  border-color: var(--cor-5);
  background:var(--cor-5);
  color:var(--cor-20);
  border-radius:4px;
  
}
.pseudoclass-radio{
  border-radius:50%;
}
.focus{
  box-shadow: 0 0 0 0.2rem var(--cor-4);
}
.active{
  border-color:var(--cor-20);
  background:var(--cor-20);
  color:tomato
}

:deep(.p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight)){
  border-color:var(--cor-90); 
}
:deep(.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box){
    border-color: var(--cor-90);  
}
:deep(.p-button){
  background: var(--cor-1);
  color:var(--cor-10);
  border-color:var(--cor-1); 
  border:1px solid var(--cor-5);
}
</style>
