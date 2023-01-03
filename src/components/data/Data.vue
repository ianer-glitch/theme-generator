<script lang="ts">
import { defineComponent } from "vue";

const name = "Data";
export default defineComponent({
  name,

  components: {},

  props: {},

  mounted() {},

  methods: {},

  updated() {
    
  },

  data() {
    return {
    cars: [
        {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ]
     };
  },

  computed: {},
});
</script>

<template>
  <main class="data">
    <PDataTable :value="cars"
    scrollDirection="horizontal"
    responsiveLayout="scroll">
        <PColumn field="vin" header="Vin"></PColumn>
        <PColumn field="year" header="Year"></PColumn>
        <PColumn field="brand" header="Brand"></PColumn>
        <PColumn field="color" header="Color"></PColumn>
    </PDataTable>

  </main>
</template>

<style scoped>
.data{
    width: 100%;
    height: 100%;
}
:deep(.p-datatable .p-datatable-tbody){
  outline:0.15rem solid var(--teste-4);
  outline-offset: -0.15rem;
}
</style>
