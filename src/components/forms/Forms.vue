<script lang="ts">
import { defineComponent } from "vue";
import formsWithPseudoClass from "@/components/forms/components/formsWithPseudoClass.vue"
import formsWithoutPseudoClass from "@/components/forms/components/formsWithoutPseudoClass.vue"

const name = "Forms";

export default defineComponent({
  name,

  components: {
    formsWithPseudoClass : formsWithPseudoClass as any,
    formsWithoutPseudoClass : formsWithoutPseudoClass as any,
  },

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
    <formsWithoutPseudoClass/>
    <PDivider align = center   layout="vertical" ></PDivider>
    <formsWithPseudoClass/>
  </main>
</template>

<style scoped>

.pseudoclass{
  border-color: var(--cor-5);
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
