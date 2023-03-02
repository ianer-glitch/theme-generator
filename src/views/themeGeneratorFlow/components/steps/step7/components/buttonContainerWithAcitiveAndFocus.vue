<script lang="ts">
import { defineComponent } from "vue";
const name = 'buttonContainerWithAcitiveAndFocus'

export default defineComponent({
  name,

  components: { }, 

  props: { },

  mounted () { },

  updated () { },

  data () {
    return { }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
    <div class="buttons">
      <div class="with-pseudoclass">
        <PButton label="Primary" class="button" />
      </div>
    </div>
</template>


<style scoped>
.buttons{
  display: flex;
  height: 100%;
  width: 100%;
  gap:15px;
  align-items: center;
  justify-content: center;
}

.with-pseudoclass{
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap:10px;
}
.button{
    width: 100%;
}
:deep(.p-button){
  background: var(--buttonActiveAndFocusColor);
  color:var(--cor-10);
  border-color:var(--buttonActiveAndFocusBorderColor); 
  
  outline:none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--cor-4);
}
</style>
