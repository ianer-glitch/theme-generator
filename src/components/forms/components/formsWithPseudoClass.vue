<script lang="ts">
import { defineComponent } from "vue";
const name = "formsWithPseudoClass";

export default defineComponent({
  name,

  components: {},

  props: {},

  mounted() {},

  methods: {},

  updated() {

  },

  data() {
    return {
      checkBox1:true,
      checkBox2:false,
      checkBox3:false,
      radioButton:"1",
      inputText:'Neque porro quisquam est qui dolorem ipsum',
      inputDropdownOptions:[{label:'consectetur, adipisci velit..'}],
      inputDropdown:{label:'consectetur, adipisci velit..'}
    };
  },

  computed: {},
});
</script>

<template>
  <main class="forms">
    <div class="with-pseudoclass">
      <PDivider align = center >Active + Focus</PDivider>
      <PDropDown class="pseudoclass"  v-model="inputDropdown" :options="inputDropdownOptions" optionLabel="label"/>
      <PInputText class="pseudoclass" v-model="inputText"/>
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <PInputText placeholder="Username" class="pseudoclass" />
        
      </div>
       <div class="last-text-content">
        <PInputMask mask="99-999999" class="last-text-content-item"  />
        <PInputMask mask="99-999999" disabled class="last-text-content-item" />
        <PInputMask mask="99-999999" disabled class="last-text-content-item p-invalid"/>
      </div>
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
    
  </main>
</template>

<style scoped>
:deep(.p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight)){
  border-color:var(--cor-90); 
}
:deep(.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box){
    border-color: var(--cor-90);  
}
.pseudoclass{
  border-color: var(--cor-91);
  box-shadow: 0 0 0 0.2rem var(--cor-4);

}
.focus{
  box-shadow: 0 0 0 0.2rem var(--cor-4);
}
.active{
  border-color:var(--cor-20);
  background:var(--cor-20);
  color:var(--cor-10)
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
.forms {
  display: flex;
  height: 100%;
  gap:15px;
  width: 100%; 
}
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
.last-text-content{
  display:flex;
  gap:5px;
}
.last-text-content-item{
  width: calc(100%/3);
}
:deep(.p-checkbox .p-checkbox-box.p-highlight){
  border-color:var(--cor-92);
}
:deep(.p-radiobutton .p-radiobutton-box.p-highlight){
  border-color:var(--cor-92);
}
</style>
