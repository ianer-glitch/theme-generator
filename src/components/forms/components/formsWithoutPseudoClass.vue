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
      checkBox1:true,
      checkBox2:false,
      checkBox3:false,
      radioButton:"1",
    };
  },

  computed: {},
});
</script>

<template>
  <main class="forms">
    <div class="without-pseudoclass">
      <PDivider align = center >Normal</PDivider>
      <PDropDown />
      <PInputText />
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <PInputText placeholder="Username" />
      </div>
      <PInputMask mask="99-999999" />
      <div class="radiobutton-container">
        <PRadioButton v-model="radioButton" value="1" />
        <PRadioButton v-model="radioButton" value="2" />
        <PRadioButton v-model="radioButton" value="3" />
      </div>
      <div class="checkbox-container">
        <PCheckBox v-model="checkBox1" :binary="true" />
        <PCheckBox v-model="checkBox2" :binary="true" />
        <PCheckBox v-model="checkBox3" :binary="true" />
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
</style>
