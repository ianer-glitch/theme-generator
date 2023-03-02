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
:deep(.p-button){
  background: var(--cor-1);
  color:var(--cor-10);
  border-color:var(--cor-1); 
  border:1px solid var(--cor-5);
}
.button{
  width: 100%;
}
</style>
