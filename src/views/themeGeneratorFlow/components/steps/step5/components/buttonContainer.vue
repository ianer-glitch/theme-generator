<script lang="ts">
import { defineComponent } from "vue";
const name = 'buttonContainer'

export default defineComponent({
  name,

  components: { }, 

  props: { },

  mounted () { },

  updated () { },

  data () {
    return {

     }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
    <div class="without-pseudoclass">
        <div class="buttons">
            <PButton label="Primary" class="button"/>
        </div>
    </div>
</template>


<style scoped>
.without-pseudoclass{
  width: 100%; 
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap:10px;
}
.buttons{
  display: flex;
  height: 100%;
  width: 100%;
  gap:15px;
  align-items: center;
 justify-content: center;
  
}
.button{
    width: 100%;
}
</style>
