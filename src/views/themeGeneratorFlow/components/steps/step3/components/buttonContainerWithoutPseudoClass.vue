<script lang="ts">
import { defineComponent } from "vue";
const name = 'buttonContainerWithoutPseudoClass'

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
      radioButton:"1",
     }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
    <div class="without-pseudoclass">
      <PButton label="Primary" />
      <div class="radiobutton-container">
        <PRadioButton v-model="radioButton" value="1" />
        <PRadioButton v-model="radioButton" value="2" />
      </div>
      <div class="checkbox-container">
        <PCheckBox v-model="checkBox1" :binary="true" />
        <PCheckBox v-model="checkBox2" :binary="true" />
      </div>
    </div>
</template>


<style scoped>
.without-pseudoclass{
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:10px;
}
.radiobutton-container,.checkbox-container{
  display: flex;
  
  width: 20%;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
