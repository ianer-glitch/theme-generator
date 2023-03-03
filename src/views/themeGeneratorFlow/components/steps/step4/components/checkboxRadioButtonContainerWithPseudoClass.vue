<script lang="ts">
import { defineComponent } from "vue";
const name = 'checkboxRadioButtonContainerWithPseudoClass'

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
      <div class="radiobutton-container">
        <PRadioButton v-model="radioButton" value="1" class="pseudoclass-radio active-radio"/>
        <PRadioButton v-model="radioButton" value="2"  class="pseudoclass-radio focus-radio"/>
        <PRadioButton v-model="radioButton" value="3"  class="pseudoclass-radio "/>
      </div>
      <div class="checkbox-container">
        <PCheckBox v-model="checkBox1" :binary="true"  class="pseudoclass-radio active-check"/>
        <PCheckBox v-model="checkBox2" :binary="true" class="pseudoclass-check focus-check"/>
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
  align-items: center;
  justify-content: center;
}
.radiobutton-container,.checkbox-container{
  display: flex;
  width: 20%;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
}
.focus-radio{
  box-shadow: 0 0 0 0.2rem var(--cor-4);
}
.focus-check{
  box-shadow: 0 0 0 0.2rem var(--cor-4);
}

.pseudoclass-check{

  border-radius:4px;
}
.pseudoclass-radio{
  border-radius:4px;
}
.pseudoclass-radio{
  border-radius:50%;
}
:deep(.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight) {
  border-color: var(--checkBoxBorderHoverColor);
  background: var(--checkBoxClickedHoverColor);
  color: var(--cor-10);
}
:deep(.p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled)) {
  border-color: var(--radioButtonHoverBorderColor);
  background: var(--radioButtonClickedHoverColor);
  color: var(--cor-10);
}
:deep(.p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight)){
  border-color:var(--radioButtonHoverColor); 
}
:deep(.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box){
    border-color: var(--checkBoxHoverColor);  
}
:deep(.p-checkbox .p-checkbox-box.p-highlight){
  border-color:var(--checkBoxBorderHoverColor);
}
:deep(.p-radiobutton .p-radiobutton-box.p-highlight){
  border-color:var(--radioButtonHoverBorderColor);
}
</style>
