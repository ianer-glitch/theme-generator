<script lang="ts">
import { defineComponent } from "vue";

const name = "buttonsWithActiveAndFocus";
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
    <div class="with-pseudoclass">
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

.with-pseudoclass{
  width: 100%; 
  display: flex;
  flex-wrap: wrap;
  gap:10px;
}

:deep(.p-button){
  background: var(--teste-20);
  color:var(--teste-10);
  border-color:var(--teste-20); 
  
  outline:none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

:deep(.p-button.p-button-secondary){
  background: var(--teste-29);
  color:var(--teste-10);
  border-color:var(--teste-29); 
  box-shadow: 0 0 0 0.2rem var(--teste-28);
}

:deep(.p-button.p-button-success){
  background: var(--teste-37);
  color:var(--teste-10);
  border-color:var(--teste-37);
  box-shadow: 0 0 0 0.2rem var(--teste-36) ; 
}

:deep(.p-button.p-button-info){
  background: var(--teste-32);
  color:var(--teste-10);
  border-color:var(--teste-32);
  box-shadow: 0 0 0 0.2rem var(--teste-31)
}

:deep(.p-button.p-button-warning){
  background: var(--teste-43);
  color:var(--teste-41);
  border-color:var(--teste-43); 
  box-shadow: 0 0 0 0.2rem var(--teste-42);
}
:deep(.p-button.p-button-help){
  background: var(--teste-49);
  color:var(--teste-10);
  border-color:var(--teste-49); 
  box-shadow:0 0 0 0.2rem var(--teste-48) ;
}
:deep(.p-button.p-button-danger){
  background: var(--teste-54);
  color:var(--teste-10);
  border-color:var(--teste-54); 
  box-shadow: 0 0 0 0.2rem var(--teste-53);
}
:deep(.p-button.p-button-text){
  background: var(--teste-60);
  color:var(--teste-5);
  border-color:transparent;
  box-shadow: 0 0 0 0.2rem var(--teste-4); 
}

:deep(.p-button.p-button-outlined){
  background: var(--teste-60);
  color:var(--teste-5);
  border: 1px solid; 
  outline:none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
:deep(.p-button.p-button-link){
  background: transparent;
  color:var(--teste-20);
  border-color:transparent; 
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

:deep(.p-button.p-button-success.p-button-outlined){
  background: var(--teste-39);
  color:var(--teste-8);
  border-color:1px solid; 
  box-shadow: 0 0 0 0.2rem var(--teste-36);
}
</style>
