<script lang="ts">
import { defineComponent } from "vue";
const name = "formsWithoutPseudoClass";

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
    <div class="without-pseudoclass">
      <PDivider align = center >Normal</PDivider>
      <PDropDown  v-model="inputDropdown" :options="inputDropdownOptions" optionLabel="label"/>
      <PInputText v-model="inputText"/>
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <PInputText placeholder="Username" />
      </div>
      <div class="last-text-content">
        <PInputMask mask="99-999999" class="last-text-content-item"/>
        <PInputMask mask="99-999999" disabled class="last-text-content-item" />
        <PInputMask mask="99-999999" disabled class="p-invalid last-text-content-item"/>
      </div>

    </div>
    
  </main>
</template>

<style scoped>

.forms {
  display: flex;
  height: 100%;
  gap:15px;
  width: 100%; 
}
.with-pseudoclass,.without-pseudoclass{
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
