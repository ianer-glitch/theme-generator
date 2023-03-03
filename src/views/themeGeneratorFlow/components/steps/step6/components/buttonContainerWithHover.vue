<script lang="ts">
import { defineComponent } from "vue";
const name = 'buttonContainerWithHover'

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
        <PButton label="Secondary" class="p-button-secondary button"  />
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
  flex-direction: column;
  gap:15px;
}
:deep(.p-button){
  background: var(--buttonHoverColor);
  color:var(--cor-10);
  border-color:var(--buttonHoverBorderColor); 
  border:1px solid var(--buttonHoverBorderColor);
}
:deep(.p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button ){
  background: var(--buttonSecondaryHoverColor);
  color: var(--cor-10);
  border-color: var(--buttonSecondaryHoverBorderColor);
  border-radius: var(--buttonSecondaryBorderRadius);
}
.button{
  width: 100%;
}
</style>
