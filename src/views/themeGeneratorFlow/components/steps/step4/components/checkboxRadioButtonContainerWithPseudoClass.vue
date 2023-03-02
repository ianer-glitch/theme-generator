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
</style>
