<script lang="ts">
import { defineComponent } from "vue";
import buttonsWithActiveAndFocus from "@/components/buttons/components/buttonsWithActiveAndFocus.vue"
import buttonsWithHover from "@/components/buttons/components/buttonsWithHover.vue";
import buttonsWithoutPseudoClass from "@/components/buttons/components/buttonsWithoutPseudoClass.vue"

const name = "Buttons";
export default defineComponent({
  name,

  components: {
    buttonsWithActiveAndFocus: buttonsWithActiveAndFocus as any,
    buttonsWithHover: buttonsWithHover as any,
    buttonsWithoutPseudoClass: buttonsWithoutPseudoClass as any,

  },

  props: {},

  mounted() {},

  methods: {},

  updated() {},

  data() {
    return { 
      
    };
  },

  computed: {},
});
</script>

<template>
  <main class = "buttons">
    <PDivider align = center >Normal</PDivider>
    <buttonsWithoutPseudoClass/>
    <PDivider align = center >Hover</PDivider>
    <buttonsWithHover/>
    <PDivider align = center >Active + Focus</PDivider>
    <buttonsWithActiveAndFocus/>

  </main>
</template>

<style scoped>
.buttons{
  display: flex;
  height: 100%;
  width: 100%;
  gap:15px;
  flex-wrap: wrap;
  
}
</style>
