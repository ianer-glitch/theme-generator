<script lang="ts">
import { defineComponent } from "vue";

const name = "buttonsWithoutPseudoClass";
export default defineComponent({
  name,

  components: {},

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
    <div class="without-pseudoclass">
    <!-- severity -->
    <PButton label="Primary" />
    <PButton label="Secondary" class="p-button-secondary" />
    <PButton label="Success" class="p-button-success" />
    <PButton label="Info" class="p-button-info" />
    <PButton label="Warning" class="p-button-warning" />
    <PButton label="Warning" class="p-button-help" />
    <PButton label="Danger" class="p-button-danger" />
    <!-- text-buttons -->
    <PButton label="Submit" class="p-button-text" />
    <PButton icon="pi pi-check" class="p-button-text" />
    <PButton label="Cancel" icon="pi pi-times" class="p-button-text" />
    <PButton
      label="Search"
      icon="pi pi-search"
      iconPos="right"
      class="p-button-text p-button-text"
    />
    <!-- Raised and Rounded Buttons -->
    <PButton label="Primary" class="p-button-raised p-button-rounded" />
    <!-- Outlined Buttons -->
    <PButton label="Primary" class="p-button-outlined" />
    <!-- Link Buttons -->
    <PButton label="Link" class="p-button-link" />
    <!-- Badges -->
    <PButton type="button" label="Emails" badge="8" />
    <PButton
      type="button"
      label="Messages"
      icon="pi pi-users"
      class="p-button-warning"
      badge="8"
      badgeClass="p-badge-info"
    />
    <!-- ButtonSet -->
    <span class="p-buttonset">
      <PButton label="Save" icon="pi pi-check" />
      <PButton label="Delete" icon="pi pi-trash" />
      <PButton label="Cancel" icon="pi pi-times" />
    </span>
    <!-- Sizes -->
    <PButton label="Small" icon="pi pi-check" class="p-button-sm" />
    <PButton label="Normal" icon="pi pi-check" class="p-button" />
    <PButton label="Large" icon="pi pi-check" class="p-button-lg" />
    <!-- Loading State -->
    <PButton label="Save" icon="pi pi-check" />
    <!-- Templating -->
    <PButton type="button" class="px-3"
      ><img alt="logo" src="@/assets/images/logo.svg" style="width: 1.5rem"
    /></PButton>

    <PButton type="button" class="p-button-outlined p-button-success"
      ><img
        alt="logo"
        src="@/assets/images/logo.svg"
        style="width: 1.5rem"
      /><span class="ml-2 font-bold">PrimeVue</span></PButton
    >
    </div>

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
.without-pseudoclass{
  width: 100%; 
  display: flex;
  flex-wrap: wrap;
  gap:10px;
}

</style>
