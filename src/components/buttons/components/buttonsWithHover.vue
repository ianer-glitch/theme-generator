<script lang="ts">
import { defineComponent } from "vue";

const name = "buttonsWithHover";
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
  background: var(--cor-1);
  color:var(--cor-10);
  border-color:var(--cor-1); 
  border:1px solid var(--cor-5);
}

:deep(.p-button.p-button-secondary){
  background: var(--cor-27);
  color:var(--cor-10);
  border-color:var(--cor-27); 
  border:1px solid var(--cor-7)
}

:deep(.p-button.p-button-success){
  background: var(--cor-35);
  color:var(--cor-10);
  border-color:var(--cor-35);
  border:1px solid var(--cor-8)
}

:deep(.p-button.p-button-info){
  background: var(--cor-85);
  color:var(--cor-10);
  border-color:var(--cor-85);
  border:1px solid var(--cor-9)
}

:deep(.p-button.p-button-warning){
  background: var(--cor-40);
  color:var(--cor-41);
  border-color:var(--cor-40); 
  border:1px solid var(--cor-24);
}
:deep(.p-button.p-button-help){
  background: var(--cor-47);
  color:var(--cor-10);
  border-color:var(--cor-47); 
  border:1px solid var(--cor-46);
}
:deep(.p-button.p-button-danger){
  background: var(--cor-52);
  color:var(--cor-10);
  border-color:var(--cor-52); 
  border:1px solid var(--cor-23);
}
:deep(.p-button.p-button-text){
  background: var(--cor-59);
  color:var(--cor-93);
  border-color:transparent;

}

:deep(.p-button.p-button-outlined){
  background: var(--cor-59);
  color:var(--cor-93);
  border: 1px solid; 
}
:deep(.p-button.p-button-link){
  background: transparent;
  color:var(--cor-20);
  border-color:transparent; 
  text-decoration:underline;
}

:deep(.p-button.p-button-success.p-button-outlined){
  background: var(--cor-38);
  color:var(--cor-8);
  border-color:1px solid; 
}
</style>
