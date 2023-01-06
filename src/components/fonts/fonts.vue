<script lang="ts">
import { defineComponent } from "vue";


const name = "fonts";

export default defineComponent({
  name,

  components: {

  },

  props: {},

  mounted() {},

  methods: {},

  updated() {

  },

  data() {
    return {
        titleSize: 40,
        textSize:30,
    };
  },

  computed: {},
});
</script>

<template>
    <div class="fonts">
        <div class="title">Font Control</div>
        <PDivider></PDivider>
        <div class="content">
            <div class="config">
                <PKnob 
                    v-model="titleSize" 
                    :min="10" 
                    :max="50"
                    textColor="#495057"
                    valueColor="#495057"
                    rangeColor="#F0F0F0" 
                ></PKnob>
                <h1>h1</h1>
                <h2>h2</h2>
                <h3>h3</h3>
                <h4>h4</h4>
            </div>
            <div class="config">
                <PKnob 
                    v-model="textSize" 
                    :min="20" 
                    :max="45"
                    textColor="#495057"
                    valueColor="#495057"
                    rangeColor="#F0F0F0"  
                    ></PKnob>
                <p>Lorem Ipsum has been the industry's standard dummy text </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fonts{
    width:100%;
    height: fit-content;
    padding:10px;
    border:2px solid gray;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title{
font-size: 20px;
color:#495057;
}
.content{
    width:100%;
    height: fit-content;

    display: flex;
   align-content: start;
}
.config{
    align-items: center;
    display: inline-flex;
    gap:25px;
    height: 100%;
    justify-content: start;
    width: 100%;
}
h1,h2,h3,h4,h5,p{
    padding:none;
    margin:none;
    color:#495057
}
h1{
    font-size: v-bind(`${titleSize}px`);
}
h2{
    font-size: v-bind(`${titleSize*0.8}px`);
}
h3{
    font-size: v-bind(`${titleSize*0.6}px`);
}
h4{
    font-size: v-bind(`${titleSize*0.4}px`);
}
p{
    font-size: v-bind(`${textSize*0.4}px`);
}
</style>
