<script lang="ts">
import { defineComponent } from "vue";
import Buttons from "@/components/buttons/Buttons.vue";
import Forms from "@/components/forms/Forms.vue";
import Pickers from "@/components/pickers/Pickers.vue";
import Data from "@/components/data/Data.vue";
import templateCss from "@/assets/template.js";
import Fonts from "@/components/fonts/fonts.vue"
const name = "HomeView";
export default defineComponent({
  name,

  components: {
    Buttons: Buttons as any,
    Data: Data as any,
    Forms: Forms as any,
    Pickers: Pickers as any,
    Fonts : Fonts as any,
  },

  props: {},

  mounted() {
  },

  methods: {
    exportCss(){
      let tempCss :string = templateCss
      tempCss = this.manipulate(tempCss)
      let a = document.createElement("a")
      let blob = new Blob([tempCss],{type: "octet/stream"})
      let url = window.URL.createObjectURL(blob)
      a.href = url
      a.download = "theme.css"
      a.click()
      window.URL.revokeObjectURL(url)
    },
    
    manipulate(tempCss :string){
      const colors : any = this.$data
      Object.keys(colors).forEach((v)=>{
        console.log(`\$${v}$`)
        tempCss = tempCss.replace(`\$${v}$`,colors[v])
        
      })
    return tempCss
    }
  },

  updated() {

    
  },

  data() {
    return {
      dataTableHeaderColor                         : null,
      generalBackgroundColor                       : null,
      generalBoxShadowColor                        : null,
      generalInputBorderColor                      : null,
      generalInputItensColor                       : null,
      generalTextInInputColor                      : null,
      inputDetailsAndGridLinesColor                : null,
      pButtonActiveAndFocusBackgroundColor         : null,
      pButtonBackgroundColorAndGeneralInputColor   : null,
      pButtonDangerActiveAndFocusBackgroundColor   : null,
      pButtonDangerActiveAndFocusBorderColor       : null,
      pButtonDangerBackgroundColor                 : null,
      pButtonDangerHoverBackgroundColor            : null,
      pButtonHelpActiveAndFocusBackgroundColor     : null,
      pButtonHelpActiveAndFocusBorderColor         : null,
      pButtonHelpBackgroundColor                   : null,
      pButtonHelpHoverBackgroundColor              : null,
      pButtonHoverBackgroundColor                  : null,
      pButtonInfoActiveAndFocusBackgroundColor     : null,
      pButtonInfoBackgroundColor                   : null,
      pButtonInfoHoverBackgroundColor              : null,
      pButtonOutlinedActiveAndFocusBackgroundColor : null,
      pButtonOutlinedHoverBackgroundcolor          : null,
      pButtonRaisedBoxshadowDown                   : null,
      pButtonRaisedBoxshadowUp                     : null,
      pButtonSecondaryActiveAndFocusBackgroundColor: null,
      pButtonSucessActiveAndFocusBorderColor    : null,
      pButtonSecondaryBackgroundColor              : null,
      pButtonSecondaryHoverBackgroundColor         : null,
      pButtonSucessActiveAndFocusBackgroundColor   : null,
      pButtonSucessBackgroundColor                 : null,
      pButtonSucessHoverBackgroundColor            : null,
      pButtonTextActiveAndFocusBackgroundColor     : null,
      pButtonTextHoverBackgroundColor              : null,
      pButtonWarningActiveAndFocusBackgroundColor  : null,
      pButtonWarningActiveAndFocusBorderColor      : null,
      pButtonWarningBackgroundColor                : null,
      pButtonWarningHoverBackgroundColor           : null,
      pButtonWarningTextColor                      : null,
      pDividerColor                                : null,
      pInvalidColor                                : null,
    };
  },

  computed: {},

  

});
</script>

<template>
  <main class="content">
    <div class="content-container">
      <div class="primary">
        <Pickers 
          @dataTableHeaderColor                          = " dataTableHeaderColor = $event "
          @generalBackgroundColor                        = " generalBackgroundColor = $event "
          @generalBoxShadowColor                         = " generalBoxShadowColor = $event "
          @generalInputBorderColor                       = " generalInputBorderColor = $event "
          @generalInputItensColor                        = " generalInputItensColor = $event "
          @generalTextInInputColor                       = " generalTextInInputColor = $event "
          @inputDetailsAndGridLinesColor                 = " inputDetailsAndGridLinesColor =  $event "
          @pButtonActiveAndFocusBackgroundColor          = " pButtonActiveAndFocusBackgroundColor = $event "
          @pButtonBackgroundColorAndGeneralInputColor    = " pButtonBackgroundColorAndGeneralInputColor = $event "
          @pButtonDangerActiveAndFocusBackgroundColor    = " pButtonDangerActiveAndFocusBackgroundColor = $event "
          @pButtonDangerActiveAndFocusBorderColor        = " pButtonDangerActiveAndFocusBorderColor = $event "
          @pButtonDangerBackgroundColor                  = " pButtonDangerBackgroundColor = $event "
          @pButtonDangerHoverBackgroundColor             = " pButtonDangerHoverBackgroundColor = $event "
          @pButtonHelpActiveAndFocusBackgroundColor      = " pButtonHelpActiveAndFocusBackgroundColor = $event "
          @pButtonHelpActiveAndFocusBorderColor          = " pButtonHelpActiveAndFocusBorderColor = $event "
          @pButtonHelpBackgroundColor                    = " pButtonHelpBackgroundColor = $event "
          @pButtonHelpHoverBackgroundColor               = " pButtonHelpHoverBackgroundColor = $event "
          @pButtonHoverBackgroundColor                   = " pButtonHoverBackgroundColor = $event "
          @pButtonInfoActiveAndFocusBackgroundColor      = " pButtonInfoActiveAndFocusBackgroundColor = $event "
          @pButtonInfoBackgroundColor                    = " pButtonInfoBackgroundColor = $event "
          @pButtonInfoHoverBackgroundColor               = " pButtonInfoHoverBackgroundColor = $event "
          @pButtonOutlinedActiveAndFocusBackgroundColor  = " pButtonOutlinedActiveAndFocusBackgroundColor = $event "
          @pButtonOutlinedHoverBackgroundcolor           = " pButtonOutlinedHoverBackgroundcolor = $event "
          @pButtonRaisedBoxshadowDown                    = " pButtonRaisedBoxshadowDown = $event "
          @pButtonRaisedBoxshadowUp                      = " pButtonRaisedBoxshadowUp = $event "
          @pButtonSecondaryActiveAndFocusBackgroundColor = " pButtonSecondaryActiveAndFocusBackgroundColor = $event "
          @pButtonSucessActiveAndFocusBorderColor     = " pButtonSucessActiveAndFocusBorderColor = $event "
          @pButtonSecondaryBackgroundColor               = " pButtonSecondaryBackgroundColor = $event "
          @pButtonSecondaryHoverBackgroundColor          = " pButtonSecondaryHoverBackgroundColor = $event "
          @pButtonSucessActiveAndFocusBackgroundColor    = " pButtonSucessActiveAndFocusBackgroundColor = $event "
          @pButtonSucessBackgroundColor                  = " pButtonSucessBackgroundColor = $event "
          @pButtonSucessHoverBackgroundColor             = " pButtonSucessHoverBackgroundColor = $event "
          @pButtonTextActiveAndFocusBackgroundColor      = " pButtonTextActiveAndFocusBackgroundColor = $event "
          @pButtonTextHoverBackgroundColor               = " pButtonTextHoverBackgroundColor = $event "
          @pButtonWarningActiveAndFocusBackgroundColor   = " pButtonWarningActiveAndFocusBackgroundColor = $event "
          @pButtonWarningActiveAndFocusBorderColor       = " pButtonWarningActiveAndFocusBorderColor = $event "
          @pButtonWarningBackgroundColor                 = " pButtonWarningBackgroundColor = $event "
          @pButtonWarningHoverBackgroundColor            = " pButtonWarningHoverBackgroundColor = $event "
          @pButtonWarningTextColor                       = " pButtonWarningTextColor = $event "
          @pDividerColor                                 = " pDividerColor = $event "
          @pInvalidColor                                 = " pInvalidColor = $event "
          />
        <Fonts/>
      </div>
      <div class="secondary">
        <Forms />
        <Buttons />
      </div>
    </div>
    <Data />
    <div class="float-export" @click="exportCss">
      <i class="pi pi-download"></i>
    </div>
  </main>
</template>

<style >
.float-export{
  background-color: rgb(71, 191, 255);
  bottom:40px;
  height: 50px;
  position: fixed;
  right:40px;
  width:50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items:center ;
  color:#FFFFFF;
  
}
.float-export:hover{
  cursor:pointer;
  background-color:gray;
}
.content {
  display: flex;
  height: 100%;
  width: 100%;
  gap:30px;
  flex-direction: column;
}
.content-container{
  display: flex;
  height: 100%;
  width: 100%;
  gap:30px;
}
.primary{
  display: flex;
  width: 100%;
  gap:30px;
  margin-bottom: 15px;
  flex-direction: column;
 
}
.secondary{
  flex-wrap: wrap;
  gap:30px;
  height: fit-content;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  
}


* {
  --teste-6 :v-bind('generalTextInInputColor');
  --teste-3 :v-bind('generalInputItensColor');
  --teste-4 :v-bind('generalBoxShadowColor');
  --teste-19:v-bind('generalInputBorderColor');
  --teste-10:v-bind('generalBackgroundColor');
  --teste-17:v-bind('inputDetailsAndGridLinesColor');
  --teste-9 :v-bind('pButtonInfoBackgroundColor');
  --teste-85:v-bind('pButtonInfoHoverBackgroundColor');
  --teste-32:v-bind('pButtonInfoActiveAndFocusBackgroundColor');
  --teste-20:v-bind('pButtonActiveAndFocusBackgroundColor');
  --teste-1 :v-bind('pButtonHoverBackgroundColor');
  --teste-5 :v-bind('pButtonBackgroundColorAndGeneralInputColor');
  --teste-59:v-bind('pButtonTextHoverBackgroundColor');
  --teste-60:v-bind('pButtonTextActiveAndFocusBackgroundColor');
  --teste-7 :v-bind('pButtonSecondaryBackgroundColor');
  --teste-27:v-bind('pButtonSecondaryHoverBackgroundColor');
  --teste-29:v-bind('pButtonSecondaryActiveAndFocusBackgroundColor');
  --teste-8 :v-bind('pButtonSucessBackgroundColor');
  --teste-35:v-bind('pButtonSucessHoverBackgroundColor');
  --teste-37:v-bind('pButtonSucessActiveAndFocusBackgroundColor');
  --teste-36:v-bind('pButtonSucessActiveAndFocusBorderColor');
  --teste-38:v-bind('pButtonOutlinedHoverBackgroundcolor');
  --teste-39:v-bind('pButtonOutlinedActiveAndFocusBackgroundColor');
  --teste-24:v-bind('pButtonWarningBackgroundColor');
  --teste-40:v-bind('pButtonWarningHoverBackgroundColor');
  --teste-43:v-bind('pButtonWarningActiveAndFocusBackgroundColor');
  --teste-41:v-bind('pButtonWarningTextColor');
  --teste-42:v-bind('pButtonWarningActiveAndFocusBorderColor');
  --teste-46:v-bind('pButtonHelpBackgroundColor');
  --teste-47:v-bind('pButtonHelpHoverBackgroundColor');
  --teste-49:v-bind('pButtonHelpActiveAndFocusBackgroundColor');
  --teste-48:v-bind('pButtonHelpActiveAndFocusBorderColor');
  --teste-23:v-bind('pButtonDangerBackgroundColor');
  --teste-52:v-bind('pButtonDangerHoverBackgroundColor');
  --teste-54:v-bind('pButtonDangerActiveAndFocusBackgroundColor');
  --teste-53:v-bind('pButtonDangerActiveAndFocusBorderColor');
  --teste-16:v-bind('pDividerColor');
  --teste-15:v-bind('pButtonRaisedBoxshadowUp');
  --teste-14:v-bind('pButtonRaisedBoxshadowDown');
  --teste-18: v-bind('dataTableHeaderColor');
  --teste-2 : v-bind('pInvalidColor');
  --teste-68: #044868;
  --teste-67: #0891cf;
  --teste-22: #191919;
  --teste-71: #224a23;
  --teste-21: #323232;
  --teste-86: #343a40;
  --teste-70: #439446;
  --teste-62: #6cbbf5;
  --teste-74: #6d5100;
  --teste-77: #73000c;
  --teste-31: #89d4fe;
  --teste-66: #B3E5FC;
  --teste-84: #b6bfc8;
  --teste-26: #c0392b; 
  --teste-69: #C8E6C9;
  --teste-73: #d9a300;
  --teste-11: #E3F2FD;
  --teste-76: #e60017;
  --teste-25: #e74c3c;
  --teste-87: #f2f2f2;
  --teste-61: #fcfcfc;
  --teste-75: #FFCDD2;
  --teste-72: #FFECB3;
  --teste-57: #fff;
  --teste-13: rgba(0, 0, 0, 0.2);
  --teste-58: rgba(0, 0, 0, 0.4);
  --teste-79: rgba(0, 0, 0, 0.5);
  --teste-82: rgba(0, 0, 0, 0.7);
  --teste-83: rgba(0, 0, 0, 0.8);
  --teste-81: rgba(0, 0, 0, 0.9);
  --teste-50: rgba(156, 39, 176, 0.04);
  --teste-51: rgba(156, 39, 176, 0.16);
  --teste-33: rgba(2, 136, 209, 0.04);
  --teste-34: rgba(2, 136, 209, 0.16);
  --teste-55: rgba(211, 47, 47, 0.04);
  --teste-56: rgba(211, 47, 47, 0.16);
  --teste-44: rgba(251, 192, 45, 0.04);
  --teste-45: rgba(251, 192, 45, 0.16);
  --teste-64: rgba(255, 255, 255, 0.1);
  --teste-65: rgba(255, 255, 255, 0.2);
  --teste-78: rgba(255, 255, 255, 0.3);
  --teste-80: rgba(255, 255, 255, 0.4);
  --teste-88: rgba(255, 255, 255, 0.6);
  --teste-63: rgba(255, 255, 255, 0);
  --teste-12: rgba(33, 150, 243, 0.24);
  --teste-30: rgba(96, 125, 139, 0.04);
  --teste-89: rgba(96, 125, 139, 0.16);
  
}
* {
  box-sizing: border-box;
}

.p-component {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: normal;
}

.p-component-overlay {
  background-color: var(--teste-58);
  transition-duration: 0.2s;
}

.p-disabled, .p-component:disabled {
  opacity: 0.6;
}

.p-error {
  color: var(--teste-2);
}

.p-text-secondary {
  color: var(--teste-3);
}

.pi {
  font-size: 1rem;
}

.p-link {
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  border-radius: 3px;
}
.p-link:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-component-overlay-enter {
  animation: p-component-overlay-enter-animation 150ms forwards;
}

.p-component-overlay-leave {
  animation: p-component-overlay-leave-animation 150ms forwards;
}

@keyframes p-component-overlay-enter-animation {
  from {
    background-color: transparent;
  }
  to {
    background-color: var(--maskbg);
  }
}
@keyframes p-component-overlay-leave-animation {
  from {
    background-color: var(--maskbg);
  }
  to {
    background-color: transparent;
  }
}

:root {
  --blue-50:#f4fafe;
  --blue-100:#cae6fc;
  --blue-200:#a0d2fa;
  --blue-300:#75bef8;
  --blue-400:#4baaf5;
  --blue-500:var(--teste-5);
  --blue-600:#1c80cf;
  --blue-700:#1769aa;
  --blue-800:#125386;
  --blue-900:#0d3c61;
  --green-50:#f6fbf6;
  --green-100:#d4ecd5;
  --green-200:#b2ddb4;
  --green-300:#90cd93;
  --green-400:#6ebe71;
  --green-500:#4caf50;
  --green-600:#419544;
  --green-700:#357b38;
  --green-800:#2a602c;
  --green-900:#1e4620;
  --yellow-50:var(--teste-57)cf5;
  --yellow-100:#fef0cd;
  --yellow-200:#fde4a5;
  --yellow-300:#fdd87d;
  --yellow-400:#fccc55;
  --yellow-500:var(--teste-24);
  --yellow-600:#d5a326;
  --yellow-700:#b08620;
  --yellow-800:#8a6a19;
  --yellow-900:#644d12;
  --cyan-50:#f2fcfd;
  --cyan-100:#c2eff5;
  --cyan-200:#91e2ed;
  --cyan-300:#61d5e4;
  --cyan-400:#30c9dc;
  --cyan-500:#00bcd4;
  --cyan-600:#00a0b4;
  --cyan-700:#008494;
  --cyan-800:#006775;
  --cyan-900:#004b55;
  --pink-50:#fef4f7;
  --pink-100:#fac9da;
  --pink-200:#f69ebc;
  --pink-300:#f1749e;
  --pink-400:#ed4981;
  --pink-500:#e91e63;
  --pink-600:#c61a54;
  --pink-700:#a31545;
  --pink-800:#801136;
  --pink-900:#5d0c28;
  --indigo-50:#f5f6fb;
  --indigo-100:#d1d5ed;
  --indigo-200:#acb4df;
  --indigo-300:#8893d1;
  --indigo-400:#6372c3;
  --indigo-500:#3f51b5;
  --indigo-600:#36459a;
  --indigo-700:#2c397f;
  --indigo-800:#232d64;
  --indigo-900:#192048;
  --teal-50:#f2faf9;
  --teal-100:#c2e6e2;
  --teal-200:#91d2cc;
  --teal-300:#61beb5;
  --teal-400:#30aa9f;
  --teal-500:#009688;
  --teal-600:#008074;
  --teal-700:#00695f;
  --teal-800:#00534b;
  --teal-900:#003c36;
  --orange-50:var(--teste-57)8f2;
  --orange-100:#fde0c2;
  --orange-200:#fbc791;
  --orange-300:#f9ae61;
  --orange-400:#f79530;
  --orange-500:#f57c00;
  --orange-600:#d06900;
  --orange-700:#ac5700;
  --orange-800:#874400;
  --orange-900:#623200;
  --bluegray-50:#f7f9f9;
  --bluegray-100:#d9e0e3;
  --bluegray-200:#bbc7cd;
  --bluegray-300:#9caeb7;
  --bluegray-400:#7e96a1;
  --bluegray-500:var(--teste-7);
  --bluegray-600:#526a76;
  --bluegray-700:#435861;
  --bluegray-800:#35454c;
  --bluegray-900:#263238;
  --purple-50:#faf4fb;
  --purple-100:#e7cbec;
  --purple-200:#d4a2dd;
  --purple-300:#c279ce;
  --purple-400:#af50bf;
  --purple-500:var(--teste-46);
  --purple-600:#852196;
  --purple-700:#6d1b7b;
  --purple-800:#561561;
  --purple-900:#3e1046;
  --red-50:var(--teste-57)5f5;
  --red-100:#ffd1ce;
  --red-200:#ffada7;
  --red-300:#ff8980;
  --red-400:#ff6459;
  --red-500:#ff4032;
  --red-600:#d9362b;
  --red-700:#b32d23;
  --red-800:#8c231c;
  --red-900:#661a14;
  --primary-50:#f4fafe;
  --primary-100:#cae6fc;
  --primary-200:#a0d2fa;
  --primary-300:#75bef8;
  --primary-400:#4baaf5;
  --primary-500:var(--teste-5);
  --primary-600:#1c80cf;
  --primary-700:#1769aa;
  --primary-800:#125386;
  --primary-900:#0d3c61;
}

.p-autocomplete .p-autocomplete-loader {
  right: 0.5rem;
}
.p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
  right: 2.857rem;
}
.p-autocomplete:not(.p-disabled):hover .p-autocomplete-multiple-container {
  border-color: var(--teste-5);
}
.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-multiple-container {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-autocomplete .p-autocomplete-multiple-container {
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {
  padding: 0.25rem 0;
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  color: var(--teste-6);
  padding: 0;
  margin: 0;
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {
  padding: 0.25rem 0.5rem;
  background: var(--teste-16);
  color: var(--teste-6);
  border-radius: 16px;
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {
  margin-left: 0.5rem;
}
.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token.p-focus {
  background: var(--teste-19);
  color: var(--teste-6);
}
.p-autocomplete.p-invalid.p-component > .p-inputtext {
  border-color: var(--teste-2);
}

.p-autocomplete-panel {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-autocomplete-panel .p-autocomplete-items {
  padding: 0.5rem 0;
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
  margin: 0;
  padding: 0.5rem 1rem;
  border: 0 none;
  color: var(--teste-6);
  background: transparent;
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight.p-focus {
  background: var(--teste-12);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:not(.p-highlight):not(.p-disabled).p-focus {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:not(.p-highlight):not(.p-disabled):hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {
  margin: 0;
  padding: 0.75rem 1rem;
  color: var(--teste-6);
  background: var(--teste-10);
  font-weight: 600;
}

.p-calendar.p-invalid.p-component > .p-inputtext {
  border-color: var(--teste-2);
}

.p-datepicker {
  padding: 0.5rem;
  background: var(--teste-10);
  color: var(--teste-6);
  border: 1px solid var(--teste-19);
  border-radius: 3px;
}
.p-datepicker:not(.p-datepicker-inline) {
  background: var(--teste-10);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
  background: var(--teste-10);
}
.p-datepicker .p-datepicker-header {
  padding: 0.5rem;
  color: var(--teste-6);
  background: var(--teste-10);
  font-weight: 600;
  margin: 0;
  border-bottom: 1px solid var(--teste-16);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-datepicker .p-datepicker-header .p-datepicker-prev,
.p-datepicker .p-datepicker-header .p-datepicker-next {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
.p-datepicker .p-datepicker-header .p-datepicker-next:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-datepicker .p-datepicker-header .p-datepicker-title {
  line-height: 2rem;
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
  color: var(--teste-6);
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  font-weight: 600;
  padding: 0.5rem;
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {
  color: var(--teste-5);
}
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
  margin-right: 0.5rem;
}
.p-datepicker table {
  font-size: 1rem;
  margin: 0.5rem 0;
}
.p-datepicker table th {
  padding: 0.5rem;
}
.p-datepicker table th > span {
  width: 2.5rem;
  height: 2.5rem;
}
.p-datepicker table td {
  padding: 0.5rem;
}
.p-datepicker table td > span {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: box-shadow 0.2s;
  border: 1px solid transparent;
}
.p-datepicker table td > span.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-datepicker table td > span:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-datepicker table td.p-datepicker-today > span {
  background: var(--teste-19);
  color: var(--teste-6);
  border-color: transparent;
}
.p-datepicker table td.p-datepicker-today > span.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-datepicker .p-datepicker-buttonbar {
  padding: 1rem 0;
  border-top: 1px solid var(--teste-16);
}
.p-datepicker .p-datepicker-buttonbar .p-button {
  width: auto;
}
.p-datepicker .p-timepicker {
  border-top: 1px solid var(--teste-16);
  padding: 0.5rem;
}
.p-datepicker .p-timepicker button {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-datepicker .p-timepicker button:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-datepicker .p-timepicker button:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-datepicker .p-timepicker button:last-child {
  margin-top: 0.2em;
}
.p-datepicker .p-timepicker span {
  font-size: 1.25rem;
}
.p-datepicker .p-timepicker > div {
  padding: 0 0.5rem;
}
.p-datepicker.p-datepicker-timeonly .p-timepicker {
  border-top: 0 none;
}
.p-datepicker .p-monthpicker {
  margin: 0.5rem 0;
}
.p-datepicker .p-monthpicker .p-monthpicker-month {
  padding: 0.5rem;
  transition: box-shadow 0.2s;
  border-radius: 3px;
}
.p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-datepicker .p-yearpicker {
  margin: 0.5rem 0;
}
.p-datepicker .p-yearpicker .p-yearpicker-year {
  padding: 0.5rem;
  transition: box-shadow 0.2s;
  border-radius: 3px;
}
.p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
  border-left: 1px solid var(--teste-16);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 0;
  padding-bottom: 0;
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
  padding-left: 0;
  border-left: 0 none;
}
.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
  padding-right: 0;
}
.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
  background: var(--teste-17);
}
.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
  background: var(--teste-17);
}
.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
  background: var(--teste-17);
}
.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

@media screen and (max-width: 769px) {
  .p-datepicker table th, .p-datepicker table td {
    padding: 0;
  }
}
.p-cascadeselect {
  background: var(--teste-10);
  border: 1px solid var(--teste-19);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 3px;
}
.p-cascadeselect:not(.p-disabled):hover {
  border-color: var(--teste-5);
}
.p-cascadeselect:not(.p-disabled).p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-cascadeselect .p-cascadeselect-label {
  background: transparent;
  border: 0 none;
  padding: 0.5rem 0.5rem;
}
.p-cascadeselect .p-cascadeselect-label.p-placeholder {
  color: var(--teste-3);
}
.p-cascadeselect .p-cascadeselect-label:enabled:focus {
  outline: 0 none;
  box-shadow: none;
}
.p-cascadeselect .p-cascadeselect-trigger {
  background: transparent;
  color: var(--teste-3);
  width: 2.357rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.p-cascadeselect.p-invalid.p-component {
  border-color: var(--teste-2);
}

.p-cascadeselect-panel {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-cascadeselect-panel .p-cascadeselect-items {
  padding: 0.5rem 0;
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {
  margin: 0;
  border: 0 none;
  color: var(--teste-6);
  background: transparent;
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight.p-focus {
  background: var(--teste-12);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {
  padding: 0.5rem 1rem;
}
.p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {
  font-size: 0.875rem;
}

.p-input-filled .p-cascadeselect {
  background: var(--teste-18);
}
.p-input-filled .p-cascadeselect:not(.p-disabled):hover {
  background-color: var(--teste-18);
}
.p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
  background-color: var(--teste-10);
}

.p-checkbox {
  width: 20px;
  height: 20px;
}
.p-checkbox .p-checkbox-box {
  border: 2px solid var(--teste-19);
  background: var(--teste-10);
  width: 20px;
  height: 20px;
  color: var(--teste-6);
  border-radius: 3px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-checkbox .p-checkbox-box .p-checkbox-icon {
  transition-duration: 0.2s;
  color: var(--teste-10);
  font-size: 14px;
}
.p-checkbox .p-checkbox-box.p-highlight {
  border-color: var(--teste-5);
  background: var(--teste-5);
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
  border-color: var(--teste-5);
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
  border-color: var(--teste-20);
  background: var(--teste-20);
  color: var(--teste-10);
}
.p-checkbox.p-invalid > .p-checkbox-box {
  border-color: var(--teste-2);
}

.p-input-filled .p-checkbox .p-checkbox-box {
  background-color: var(--teste-18);
}
.p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
  background: var(--teste-5);
}
.p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
  background-color: var(--teste-18);
}
.p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
  background: var(--teste-20);
}

.p-chips:not(.p-disabled):hover .p-chips-multiple-container {
  border-color: var(--teste-5);
}
.p-chips:not(.p-disabled).p-focus .p-chips-multiple-container {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-chips .p-chips-multiple-container {
  padding: 0.25rem 0.5rem;
}
.p-chips .p-chips-multiple-container .p-chips-token {
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  background: var(--teste-16);
  color: var(--teste-6);
  border-radius: 16px;
}
.p-chips .p-chips-multiple-container .p-chips-token.p-focus {
  background: var(--teste-19);
  color: var(--teste-6);
}
.p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {
  margin-left: 0.5rem;
}
.p-chips .p-chips-multiple-container .p-chips-input-token {
  padding: 0.25rem 0;
}
.p-chips .p-chips-multiple-container .p-chips-input-token input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  color: var(--teste-6);
  padding: 0;
  margin: 0;
}
.p-chips.p-invalid.p-component > .p-inputtext {
  border-color: var(--teste-2);
}

.p-colorpicker-preview {
  width: 2rem;
  height: 2rem;
}

.p-colorpicker-panel {
  background: var(--teste-21);
  border: 1px solid var(--teste-22);
}
.p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
  border-color: var(--teste-10);
}

.p-colorpicker-overlay-panel {
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}

.p-dropdown {
  background: var(--teste-10);
  border: 1px solid var(--teste-19);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 3px;
}
.p-dropdown:not(.p-disabled):hover {
  border-color: var(--teste-5);
}
.p-dropdown:not(.p-disabled).p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-dropdown.p-dropdown-clearable .p-dropdown-label {
  padding-right: 1.5rem;
}
.p-dropdown .p-dropdown-label {
  background: transparent;
  border: 0 none;
}
.p-dropdown .p-dropdown-label.p-placeholder {
  color: var(--teste-3);
}
.p-dropdown .p-dropdown-label:focus, .p-dropdown .p-dropdown-label:enabled:focus {
  outline: 0 none;
  box-shadow: none;
}
.p-dropdown .p-dropdown-trigger {
  background: transparent;
  color: var(--teste-3);
  width: 2.357rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.p-dropdown .p-dropdown-clear-icon {
  color: var(--teste-3);
  right: 2.357rem;
}
.p-dropdown.p-invalid.p-component {
  border-color: var(--teste-2);
}

.p-dropdown-panel {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-dropdown-panel .p-dropdown-header {
  padding: 0.5rem 1rem;
  border-bottom: 0 none;
  color: var(--teste-6);
  background: var(--teste-18);
  margin: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
  padding-right: 1.5rem;
  margin-right: -1.5rem;
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
  right: 0.5rem;
  color: var(--teste-3);
}
.p-dropdown-panel .p-dropdown-items {
  padding: 0.5rem 0;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  margin: 0;
  padding: 0.5rem 1rem;
  border: 0 none;
  color: var(--teste-6);
  background: transparent;
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
  background: var(--teste-12);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
  margin: 0;
  padding: 0.75rem 1rem;
  color: var(--teste-6);
  background: var(--teste-10);
  font-weight: 600;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
  padding: 0.5rem 1rem;
  color: var(--teste-6);
  background: transparent;
}

.p-input-filled .p-dropdown {
  background: var(--teste-18);
}
.p-input-filled .p-dropdown:not(.p-disabled):hover {
  background-color: var(--teste-18);
}
.p-input-filled .p-dropdown:not(.p-disabled).p-focus {
  background-color: var(--teste-10);
}
.p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {
  background-color: transparent;
}

.p-editor-container .p-editor-toolbar {
  background: var(--teste-18);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-editor-container .p-editor-toolbar.ql-snow {
  border: 1px solid var(--teste-16);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
  stroke: var(--teste-3);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
  fill: var(--teste-3);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
  border: 0 none;
  color: var(--teste-3);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
  color: var(--teste-6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
  stroke: var(--teste-6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
  fill: var(--teste-6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: var(--teste-6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: var(--teste-6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: var(--teste-6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  background: var(--teste-10);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  border-radius: 3px;
  padding: 0.5rem 0;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
  color: var(--teste-6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
  padding: 0.5rem 1rem;
}
.p-editor-container .p-editor-content {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-editor-container .p-editor-content.ql-snow {
  border: 1px solid var(--teste-16);
}
.p-editor-container .p-editor-content .ql-editor {
  background: var(--teste-10);
  color: var(--teste-6);
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
  color: var(--teste-6);
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
  stroke: var(--teste-6);
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
  fill: var(--teste-6);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
  color: var(--teste-5);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
  stroke: var(--teste-5);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
  fill: var(--teste-5);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
  color: var(--teste-5);
}

.p-inputgroup-addon {
  background: var(--teste-17);
  color: var(--teste-3);
  border-top: 1px solid var(--teste-19);
  border-left: 1px solid var(--teste-19);
  border-bottom: 1px solid var(--teste-19);
  padding: 0.5rem 0.5rem;
  min-width: 2.357rem;
}
.p-inputgroup-addon:last-child {
  border-right: 1px solid var(--teste-19);
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-float-label > .p-component {
  border-radius: 0;
  margin: 0;
}
.p-inputgroup > .p-component + .p-inputgroup-addon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
.p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
  border-left: 0 none;
}
.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-float-label > .p-component:focus {
  z-index: 1;
}
.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,
.p-inputgroup > .p-float-label > .p-component:focus ~ label {
  z-index: 1;
}

.p-inputgroup-addon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.p-inputgroup .p-float-label:first-child input {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.p-inputgroup-addon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.p-inputgroup .p-float-label:last-child input {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.p-fluid .p-inputgroup .p-button {
  width: auto;
}
.p-fluid .p-inputgroup .p-button.p-button-icon-only {
  width: 2.357rem;
}

.p-inputnumber.p-invalid.p-component > .p-inputtext {
  border-color: var(--teste-2);
}

.p-inputswitch {
  width: 3rem;
  height: 1.75rem;
}
.p-inputswitch .p-inputswitch-slider {
  background: var(--teste-19);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 30px;
}
.p-inputswitch .p-inputswitch-slider:before {
  background: var(--teste-10);
  width: 1.25rem;
  height: 1.25rem;
  left: 0.25rem;
  margin-top: -0.625rem;
  border-radius: 50%;
  transition-duration: 0.2s;
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
  transform: translateX(1.25rem);
}
.p-inputswitch.p-focus .p-inputswitch-slider {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
  background: var(--teste-84);
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
  background: var(--teste-5);
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
  background: var(--teste-10);
}
.p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {
  background: var(--teste-1);
}
.p-inputswitch.p-invalid {
  border-color: var(--teste-2);
}

.p-inputtext {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  color: var(--teste-6);
  background: var(--teste-10);
  padding: 0.5rem 0.5rem;
  border: 1px solid var(--teste-19);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  appearance: none;
  border-radius: 3px;
}
.p-inputtext:enabled:hover {
  border-color: var(--teste-5);
}
.p-inputtext:enabled:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-inputtext.p-invalid.p-component {
  border-color: var(--teste-2);
}
.p-inputtext.p-inputtext-sm {
  font-size: 0.875rem;
  padding: 0.4375rem 0.4375rem;
}
.p-inputtext.p-inputtext-lg {
  font-size: 1.25rem;
  padding: 0.625rem 0.625rem;
}

.p-float-label > label {
  left: 0.5rem;
  color: var(--teste-3);
  transition-duration: 0.2s;
}

.p-float-label > .p-invalid + label {
  color: var(--teste-2);
}

.p-input-icon-left > i:first-of-type {
  left: 0.5rem;
  color: var(--teste-3);
}

.p-input-icon-left > .p-inputtext {
  padding-left: 2rem;
}

.p-input-icon-left.p-float-label > label {
  left: 2rem;
}

.p-input-icon-right > i:last-of-type {
  right: 0.5rem;
  color: var(--teste-3);
}

.p-input-icon-right > .p-inputtext {
  padding-right: 2rem;
}

::-webkit-input-placeholder {
  color: var(--teste-3);
}

:-moz-placeholder {
  color: var(--teste-3);
}

::-moz-placeholder {
  color: var(--teste-3);
}

:-ms-input-placeholder {
  color: var(--teste-3);
}

.p-input-filled .p-inputtext {
  background-color: var(--teste-18);
}
.p-input-filled .p-inputtext:enabled:hover {
  background-color: var(--teste-18);
}
.p-input-filled .p-inputtext:enabled:focus {
  background-color: var(--teste-10);
}

.p-inputtext-sm .p-inputtext {
  font-size: 0.875rem;
  padding: 0.4375rem 0.4375rem;
}

.p-inputtext-lg .p-inputtext {
  font-size: 1.25rem;
  padding: 0.625rem 0.625rem;
}

.p-listbox {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 1px solid var(--teste-19);
  border-radius: 3px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-listbox .p-listbox-header {
  padding: 0.5rem 1rem;
  border-bottom: 0 none;
  color: var(--teste-6);
  background: var(--teste-18);
  margin: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-listbox .p-listbox-header .p-listbox-filter {
  padding-right: 1.5rem;
}
.p-listbox .p-listbox-header .p-listbox-filter-icon {
  right: 0.5rem;
  color: var(--teste-3);
}
.p-listbox .p-listbox-list {
  padding: 0.5rem 0;
  outline: 0 none;
}
.p-listbox .p-listbox-list .p-listbox-item {
  margin: 0;
  padding: 0.5rem 1rem;
  border: 0 none;
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-listbox .p-listbox-list .p-listbox-item.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-listbox .p-listbox-list .p-listbox-item-group {
  margin: 0;
  padding: 0.75rem 1rem;
  color: var(--teste-6);
  background: var(--teste-10);
  font-weight: 600;
}
.p-listbox .p-listbox-list .p-listbox-empty-message {
  padding: 0.5rem 1rem;
  color: var(--teste-6);
  background: transparent;
}
.p-listbox:not(.p-disabled) .p-listbox-item.p-highlight.p-focus {
  background: var(--teste-12);
}
.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled).p-focus {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-listbox.p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-listbox.p-invalid {
  border-color: var(--teste-2);
}

.p-multiselect {
  background: var(--teste-10);
  border: 1px solid var(--teste-19);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 3px;
}
.p-multiselect:not(.p-disabled):hover {
  border-color: var(--teste-5);
}
.p-multiselect:not(.p-disabled).p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-multiselect .p-multiselect-label {
  padding: 0.5rem 0.5rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-multiselect .p-multiselect-label.p-placeholder {
  color: var(--teste-3);
}
.p-multiselect.p-multiselect-chip .p-multiselect-token {
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  background: var(--teste-16);
  color: var(--teste-6);
  border-radius: 16px;
}
.p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {
  margin-left: 0.5rem;
}
.p-multiselect .p-multiselect-trigger {
  background: transparent;
  color: var(--teste-3);
  width: 2.357rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.p-multiselect.p-invalid.p-component {
  border-color: var(--teste-2);
}

.p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
  padding: 0.25rem 0.5rem;
}

.p-multiselect-panel {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-multiselect-panel .p-multiselect-header {
  padding: 0.5rem 1rem;
  border-bottom: 0 none;
  color: var(--teste-6);
  background: var(--teste-18);
  margin: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {
  padding-right: 1.5rem;
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {
  right: 0.5rem;
  color: var(--teste-3);
}
.p-multiselect-panel .p-multiselect-header .p-checkbox {
  margin-right: 0.5rem;
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close {
  margin-left: 0.5rem;
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-multiselect-panel .p-multiselect-items {
  padding: 0.5rem 0;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  margin: 0;
  padding: 0.5rem 1rem;
  border: 0 none;
  color: var(--teste-6);
  background: transparent;
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight.p-focus {
  background: var(--teste-12);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled).p-focus {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
  margin-right: 0.5rem;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {
  margin: 0;
  padding: 0.75rem 1rem;
  color: var(--teste-6);
  background: var(--teste-10);
  font-weight: 600;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {
  padding: 0.5rem 1rem;
  color: var(--teste-6);
  background: transparent;
}

.p-input-filled .p-multiselect {
  background: var(--teste-18);
}
.p-input-filled .p-multiselect:not(.p-disabled):hover {
  background-color: var(--teste-18);
}
.p-input-filled .p-multiselect:not(.p-disabled).p-focus {
  background-color: var(--teste-10);
}

.p-password.p-invalid.p-component > .p-inputtext {
  border-color: var(--teste-2);
}

.p-password-panel {
  padding: 1rem;
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  border-radius: 3px;
}
.p-password-panel .p-password-meter {
  margin-bottom: 0.5rem;
  background: var(--teste-16);
}
.p-password-panel .p-password-meter .p-password-strength.weak {
  background: var(--teste-23);
}
.p-password-panel .p-password-meter .p-password-strength.medium {
  background: var(--teste-24);
}
.p-password-panel .p-password-meter .p-password-strength.strong {
  background: var(--teste-8);
}

.p-radiobutton {
  width: 20px;
  height: 20px;
}
.p-radiobutton .p-radiobutton-box {
  border: 2px solid var(--teste-19);
  background: var(--teste-10);
  width: 20px;
  height: 20px;
  color: var(--teste-6);
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {
  border-color: var(--teste-5);
}
.p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
  width: 12px;
  height: 12px;
  transition-duration: 0.2s;
  background-color: var(--teste-10);
}
.p-radiobutton .p-radiobutton-box.p-highlight {
  border-color: var(--teste-5);
  background: var(--teste-5);
}
.p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
  border-color: var(--teste-20);
  background: var(--teste-20);
  color: var(--teste-10);
}
.p-radiobutton.p-invalid > .p-radiobutton-box {
  border-color: var(--teste-2);
}
.p-radiobutton:focus {
  outline: 0 none;
}

.p-input-filled .p-radiobutton .p-radiobutton-box {
  background-color: var(--teste-18);
}
.p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {
  background-color: var(--teste-18);
}
.p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
  background: var(--teste-5);
}
.p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
  background: var(--teste-20);
}

.p-rating {
  gap: 0.5rem;
}
.p-rating .p-rating-item .p-rating-icon {
  color: var(--teste-6);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  font-size: 1.143rem;
}
.p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
  color: var(--teste-25);
}
.p-rating .p-rating-item.p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: var(--teste-5);
}
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
  color: var(--teste-5);
}
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon.p-rating-cancel {
  color: var(--teste-26);
}

.p-selectbutton .p-button {
  background: var(--teste-10);
  border: 1px solid var(--teste-19);
  color: var(--teste-6);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-selectbutton .p-button .p-button-icon-left,
.p-selectbutton .p-button .p-button-icon-right {
  color: var(--teste-3);
}
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
  background: var(--teste-17);
  border-color: var(--teste-19);
  color: var(--teste-6);
}
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
  color: var(--teste-3);
}
.p-selectbutton .p-button.p-highlight {
  background: var(--teste-5);
  border-color: var(--teste-5);
  color: var(--teste-10);
}
.p-selectbutton .p-button.p-highlight .p-button-icon-left,
.p-selectbutton .p-button.p-highlight .p-button-icon-right {
  color: var(--teste-10);
}
.p-selectbutton .p-button.p-highlight:hover {
  background: var(--teste-1);
  border-color: var(--teste-1);
  color: var(--teste-10);
}
.p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
.p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {
  color: var(--teste-10);
}
.p-selectbutton.p-invalid > .p-button {
  border-color: var(--teste-2);
}

.p-slider {
  background: var(--teste-16);
  border: 0 none;
  border-radius: 3px;
}
.p-slider.p-slider-horizontal {
  height: 0.286rem;
}
.p-slider.p-slider-horizontal .p-slider-handle {
  margin-top: -0.5715rem;
  margin-left: -0.5715rem;
}
.p-slider.p-slider-vertical {
  width: 0.286rem;
}
.p-slider.p-slider-vertical .p-slider-handle {
  margin-left: -0.5715rem;
  margin-bottom: -0.5715rem;
}
.p-slider .p-slider-handle {
  height: 1.143rem;
  width: 1.143rem;
  background: var(--teste-10);
  border: 2px solid var(--teste-5);
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-slider .p-slider-handle:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-slider .p-slider-range {
  background: var(--teste-5);
}
.p-slider:not(.p-disabled) .p-slider-handle:hover {
  background: var(--teste-5);
  border-color: var(--teste-5);
}

.p-treeselect {
  background: var(--teste-10);
  border: 1px solid var(--teste-19);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 3px;
}
.p-treeselect:not(.p-disabled):hover {
  border-color: var(--teste-5);
}
.p-treeselect:not(.p-disabled).p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-treeselect .p-treeselect-label {
  padding: 0.5rem 0.5rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-treeselect .p-treeselect-label.p-placeholder {
  color: var(--teste-3);
}
.p-treeselect.p-treeselect-chip .p-treeselect-token {
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  background: var(--teste-16);
  color: var(--teste-6);
  border-radius: 16px;
}
.p-treeselect .p-treeselect-trigger {
  background: transparent;
  color: var(--teste-3);
  width: 2.357rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.p-treeselect.p-invalid.p-component {
  border-color: var(--teste-2);
}

.p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
  padding: 0.25rem 0.5rem;
}

.p-treeselect-panel {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
  border: 0 none;
}
.p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {
  padding: 0.5rem 1rem;
  color: var(--teste-6);
  background: transparent;
}

.p-input-filled .p-treeselect {
  background: var(--teste-18);
}
.p-input-filled .p-treeselect:not(.p-disabled):hover {
  background-color: var(--teste-18);
}
.p-input-filled .p-treeselect:not(.p-disabled).p-focus {
  background-color: var(--teste-10);
}

.p-togglebutton.p-button {
  background: var(--teste-10);
  border: 1px solid var(--teste-19);
  color: var(--teste-6);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-togglebutton.p-button .p-button-icon-left,
.p-togglebutton.p-button .p-button-icon-right {
  color: var(--teste-3);
}
.p-togglebutton.p-button:not(.p-disabled).p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: var(--teste-5);
}
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
  background: var(--teste-17);
  border-color: var(--teste-19);
  color: var(--teste-6);
}
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
  color: var(--teste-3);
}
.p-togglebutton.p-button.p-highlight {
  background: var(--teste-5);
  border-color: var(--teste-5);
  color: var(--teste-10);
}
.p-togglebutton.p-button.p-highlight .p-button-icon-left,
.p-togglebutton.p-button.p-highlight .p-button-icon-right {
  color: var(--teste-10);
}
.p-togglebutton.p-button.p-highlight:hover {
  background: var(--teste-1);
  border-color: var(--teste-1);
  color: var(--teste-10);
}
.p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
.p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {
  color: var(--teste-10);
}
.p-togglebutton.p-button.p-invalid > .p-button {
  border-color: var(--teste-2);
}

.p-button {
  color: var(--teste-10);
  background: var(--teste-5);
  border: 1px solid var(--teste-5);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 3px;
}
.p-button:enabled:hover {
  background: var(--teste-1);
  color: var(--teste-10);
  border-color: var(--teste-1);
}
.p-button:enabled:active {
  background: var(--teste-20);
  color: var(--teste-10);
  border-color: var(--teste-20);
}
.p-button.p-button-outlined {
  background-color: transparent;
  color: var(--teste-5);
  border: 1px solid;
}
.p-button.p-button-outlined:enabled:hover {
  background: var(--teste-59);
  color: var(--teste-5);
  border: 1px solid;
}
.p-button.p-button-outlined:enabled:active {
  background: var(--teste-60);
  color: var(--teste-5);
  border: 1px solid;
}
.p-button.p-button-outlined.p-button-plain {
  color: var(--teste-3);
  border-color: var(--teste-3);
}
.p-button.p-button-outlined.p-button-plain:enabled:hover {
  background: var(--teste-17);
  color: var(--teste-3);
}
.p-button.p-button-outlined.p-button-plain:enabled:active {
  background: var(--teste-16);
  color: var(--teste-3);
}
.p-button.p-button-text {
  background-color: transparent;
  color: var(--teste-5);
  border-color: transparent;
}
.p-button.p-button-text:enabled:hover {
  background: var(--teste-59);
  color: var(--teste-5);
  border-color: transparent;
}
.p-button.p-button-text:enabled:active {
  background: var(--teste-60);
  color: var(--teste-5);
  border-color: transparent;
}
.p-button.p-button-text.p-button-plain {
  color: var(--teste-3);
}
.p-button.p-button-text.p-button-plain:enabled:hover {
  background: var(--teste-17);
  color: var(--teste-3);
}
.p-button.p-button-text.p-button-plain:enabled:active {
  background: var(--teste-16);
  color: var(--teste-3);
}
.p-button:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-button .p-button-label {
  transition-duration: 0.2s;
}
.p-button .p-button-icon-left {
  margin-right: 0.5rem;
}
.p-button .p-button-icon-right {
  margin-left: 0.5rem;
}
.p-button .p-button-icon-bottom {
  margin-top: 0.5rem;
}
.p-button .p-button-icon-top {
  margin-bottom: 0.5rem;
}
.p-button .p-badge {
  margin-left: 0.5rem;
  min-width: 1rem;
  height: 1rem;
  line-height: 1rem;
  color: var(--teste-5);
  background-color: var(--teste-10);
}
.p-button.p-button-raised {
  box-shadow: 0 3px 1px -2px var(--teste-12), 0 2px 2px 0 var(--teste-14), 0 1px 5px 0 var(--teste-15);
}
.p-button.p-button-rounded {
  border-radius: 2rem;
}
.p-button.p-button-icon-only {
  width: 2.357rem;
  padding: 0.5rem 0;
}
.p-button.p-button-icon-only .p-button-icon-left,
.p-button.p-button-icon-only .p-button-icon-right {
  margin: 0;
}
.p-button.p-button-icon-only.p-button-rounded {
  border-radius: 50%;
  height: 2.357rem;
}
.p-button.p-button-sm {
  font-size: 0.875rem;
  padding: 0.4375rem 0.875rem;
}
.p-button.p-button-sm .p-button-icon {
  font-size: 0.875rem;
}
.p-button.p-button-lg {
  font-size: 1.25rem;
  padding: 0.625rem 1.25rem;
}
.p-button.p-button-lg .p-button-icon {
  font-size: 1.25rem;
}
.p-button.p-button-loading-label-only .p-button-label {
  margin-left: 0.5rem;
}
.p-button.p-button-loading-label-only .p-button-loading-icon {
  margin-right: 0;
}

.p-fluid .p-button {
  width: 100%;
}
.p-fluid .p-button-icon-only {
  width: 2.357rem;
}
.p-fluid .p-buttonset {
  display: flex;
}
.p-fluid .p-buttonset .p-button {
  flex: 1;
}

.p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button {
  color: var(--teste-10);
  background: var(--teste-7);
  border: 1px solid var(--teste-7);
}
.p-button.p-button-secondary:enabled:hover, .p-buttonset.p-button-secondary > .p-button:enabled:hover, .p-splitbutton.p-button-secondary > .p-button:enabled:hover {
  background: var(--teste-27);
  color: var(--teste-10);
  border-color: var(--teste-27);
}
.p-button.p-button-secondary:enabled:focus, .p-buttonset.p-button-secondary > .p-button:enabled:focus, .p-splitbutton.p-button-secondary > .p-button:enabled:focus {
  box-shadow: 0 0 0 0.2rem var(--teste-28);
}
.p-button.p-button-secondary:enabled:active, .p-buttonset.p-button-secondary > .p-button:enabled:active, .p-splitbutton.p-button-secondary > .p-button:enabled:active {
  background: var(--teste-29);
  color: var(--teste-10);
  border-color: var(--teste-29);
}
.p-button.p-button-secondary.p-button-outlined, .p-buttonset.p-button-secondary > .p-button.p-button-outlined, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined {
  background-color: transparent;
  color: var(--teste-7);
  border: 1px solid;
}
.p-button.p-button-secondary.p-button-outlined:enabled:hover, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:hover {
  background: var(--teste-30);
  color: var(--teste-7);
  border: 1px solid;
}
.p-button.p-button-secondary.p-button-outlined:enabled:active, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:active {
  background: var(--teste-89);
  color: var(--teste-7);
  border: 1px solid;
}
.p-button.p-button-secondary.p-button-text, .p-buttonset.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text {
  background-color: transparent;
  color: var(--teste-7);
  border-color: transparent;
}
.p-button.p-button-secondary.p-button-text:enabled:hover, .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:hover {
  background: var(--teste-30);
  border-color: transparent;
  color: var(--teste-7);
}
.p-button.p-button-secondary.p-button-text:enabled:active, .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:active {
  background: var(--teste-89);
  border-color: transparent;
  color: var(--teste-7);
}

.p-button.p-button-info, .p-buttonset.p-button-info > .p-button, .p-splitbutton.p-button-info > .p-button {
  color: var(--teste-10);
  background: var(--teste-9);
  border: 1px solid var(--teste-9);
}
.p-button.p-button-info:enabled:hover, .p-buttonset.p-button-info > .p-button:enabled:hover, .p-splitbutton.p-button-info > .p-button:enabled:hover {
  background: var(--teste-85);
  color: var(--teste-10);
  border-color: var(--teste-85);
}
.p-button.p-button-info:enabled:focus, .p-buttonset.p-button-info > .p-button:enabled:focus, .p-splitbutton.p-button-info > .p-button:enabled:focus {
  box-shadow: 0 0 0 0.2rem var(--teste-31);
}
.p-button.p-button-info:enabled:active, .p-buttonset.p-button-info > .p-button:enabled:active, .p-splitbutton.p-button-info > .p-button:enabled:active {
  background: var(--teste-32);
  color: var(--teste-10);
  border-color: var(--teste-32);
}
.p-button.p-button-info.p-button-outlined, .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined {
  background-color: transparent;
  color: var(--teste-9);
  border: 1px solid;
}
.p-button.p-button-info.p-button-outlined:enabled:hover, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:hover {
  background: var(--teste-33);
  color: var(--teste-9);
  border: 1px solid;
}
.p-button.p-button-info.p-button-outlined:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:active {
  background: var(--teste-34);
  color: var(--teste-9);
  border: 1px solid;
}
.p-button.p-button-info.p-button-text, .p-buttonset.p-button-info > .p-button.p-button-text, .p-splitbutton.p-button-info > .p-button.p-button-text {
  background-color: transparent;
  color: var(--teste-9);
  border-color: transparent;
}
.p-button.p-button-info.p-button-text:enabled:hover, .p-buttonset.p-button-info > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:hover {
  background: var(--teste-33);
  border-color: transparent;
  color: var(--teste-9);
}
.p-button.p-button-info.p-button-text:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:active {
  background: var(--teste-34);
  border-color: transparent;
  color: var(--teste-9);
}

.p-button.p-button-success, .p-buttonset.p-button-success > .p-button, .p-splitbutton.p-button-success > .p-button {
  color: var(--teste-10);
  background: var(--teste-8);
  border: 1px solid var(--teste-8);
}
.p-button.p-button-success:enabled:hover, .p-buttonset.p-button-success > .p-button:enabled:hover, .p-splitbutton.p-button-success > .p-button:enabled:hover {
  background: var(--teste-35);
  color: var(--teste-10);
  border-color: var(--teste-35);
}
.p-button.p-button-success:enabled:focus, .p-buttonset.p-button-success > .p-button:enabled:focus, .p-splitbutton.p-button-success > .p-button:enabled:focus {
  box-shadow: 0 0 0 0.2rem var(--teste-36);
}
.p-button.p-button-success:enabled:active, .p-buttonset.p-button-success > .p-button:enabled:active, .p-splitbutton.p-button-success > .p-button:enabled:active {
  background: var(--teste-37);
  color: var(--teste-10);
  border-color: var(--teste-37);
}
.p-button.p-button-success.p-button-outlined, .p-buttonset.p-button-success > .p-button.p-button-outlined, .p-splitbutton.p-button-success > .p-button.p-button-outlined {
  background-color: transparent;
  color: var(--teste-8);
  border: 1px solid;
}
.p-button.p-button-success.p-button-outlined:enabled:hover, .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:hover {
  background: var(--teste-38);
  color: var(--teste-8);
  border: 1px solid;
}
.p-button.p-button-success.p-button-outlined:enabled:active, .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:active {
  background: var(--teste-39);
  color: var(--teste-8);
  border: 1px solid;
}
.p-button.p-button-success.p-button-text, .p-buttonset.p-button-success > .p-button.p-button-text, .p-splitbutton.p-button-success > .p-button.p-button-text {
  background-color: transparent;
  color: var(--teste-8);
  border-color: transparent;
}
.p-button.p-button-success.p-button-text:enabled:hover, .p-buttonset.p-button-success > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:hover {
  background: var(--teste-38);
  border-color: transparent;
  color: var(--teste-8);
}
.p-button.p-button-success.p-button-text:enabled:active, .p-buttonset.p-button-success > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:active {
  background: var(--teste-39);
  border-color: transparent;
  color: var(--teste-8);
}

.p-button.p-button-warning, .p-buttonset.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button {
  color: var(--teste-41);
  background: var(--teste-24);
  border: 1px solid var(--teste-24);
}
.p-button.p-button-warning:enabled:hover, .p-buttonset.p-button-warning > .p-button:enabled:hover, .p-splitbutton.p-button-warning > .p-button:enabled:hover {
  background: var(--teste-40);
  color: var(--teste-41);
  border-color: var(--teste-40);
}
.p-button.p-button-warning:enabled:focus, .p-buttonset.p-button-warning > .p-button:enabled:focus, .p-splitbutton.p-button-warning > .p-button:enabled:focus {
  box-shadow: 0 0 0 0.2rem var(--teste-42);
}
.p-button.p-button-warning:enabled:active, .p-buttonset.p-button-warning > .p-button:enabled:active, .p-splitbutton.p-button-warning > .p-button:enabled:active {
  background: var(--teste-43);
  color: var(--teste-41);
  border-color: var(--teste-43);
}
.p-button.p-button-warning.p-button-outlined, .p-buttonset.p-button-warning > .p-button.p-button-outlined, .p-splitbutton.p-button-warning > .p-button.p-button-outlined {
  background-color: transparent;
  color: var(--teste-24);
  border: 1px solid;
}
.p-button.p-button-warning.p-button-outlined:enabled:hover, .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:hover {
  background: var(--teste-44);
  color: var(--teste-24);
  border: 1px solid;
}
.p-button.p-button-warning.p-button-outlined:enabled:active, .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:active {
  background: var(--teste-45);
  color: var(--teste-24);
  border: 1px solid;
}
.p-button.p-button-warning.p-button-text, .p-buttonset.p-button-warning > .p-button.p-button-text, .p-splitbutton.p-button-warning > .p-button.p-button-text {
  background-color: transparent;
  color: var(--teste-24);
  border-color: transparent;
}
.p-button.p-button-warning.p-button-text:enabled:hover, .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:hover {
  background: var(--teste-44);
  border-color: transparent;
  color: var(--teste-24);
}
.p-button.p-button-warning.p-button-text:enabled:active, .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:active {
  background: var(--teste-45);
  border-color: transparent;
  color: var(--teste-24);
}

.p-button.p-button-help, .p-buttonset.p-button-help > .p-button, .p-splitbutton.p-button-help > .p-button {
  color: var(--teste-10);
  background: var(--teste-46);
  border: 1px solid var(--teste-46);
}
.p-button.p-button-help:enabled:hover, .p-buttonset.p-button-help > .p-button:enabled:hover, .p-splitbutton.p-button-help > .p-button:enabled:hover {
  background: var(--teste-47);
  color: var(--teste-10);
  border-color: var(--teste-47);
}
.p-button.p-button-help:enabled:focus, .p-buttonset.p-button-help > .p-button:enabled:focus, .p-splitbutton.p-button-help > .p-button:enabled:focus {
  box-shadow: 0 0 0 0.2rem var(--teste-48);
}
.p-button.p-button-help:enabled:active, .p-buttonset.p-button-help > .p-button:enabled:active, .p-splitbutton.p-button-help > .p-button:enabled:active {
  background: var(--teste-49);
  color: var(--teste-10);
  border-color: var(--teste-49);
}
.p-button.p-button-help.p-button-outlined, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined {
  background-color: transparent;
  color: var(--teste-46);
  border: 1px solid;
}
.p-button.p-button-help.p-button-outlined:enabled:hover, .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:hover {
  background: var(--teste-50);
  color: var(--teste-46);
  border: 1px solid;
}
.p-button.p-button-help.p-button-outlined:enabled:active, .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:active {
  background: var(--teste-51);
  color: var(--teste-46);
  border: 1px solid;
}
.p-button.p-button-help.p-button-text, .p-buttonset.p-button-help > .p-button.p-button-text, .p-splitbutton.p-button-help > .p-button.p-button-text {
  background-color: transparent;
  color: var(--teste-46);
  border-color: transparent;
}
.p-button.p-button-help.p-button-text:enabled:hover, .p-buttonset.p-button-help > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:hover {
  background: var(--teste-50);
  border-color: transparent;
  color: var(--teste-46);
}
.p-button.p-button-help.p-button-text:enabled:active, .p-buttonset.p-button-help > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:active {
  background: var(--teste-51);
  border-color: transparent;
  color: var(--teste-46);
}

.p-button.p-button-danger, .p-buttonset.p-button-danger > .p-button, .p-splitbutton.p-button-danger > .p-button {
  color: var(--teste-10);
  background: var(--teste-23);
  border: 1px solid var(--teste-23);
}
.p-button.p-button-danger:enabled:hover, .p-buttonset.p-button-danger > .p-button:enabled:hover, .p-splitbutton.p-button-danger > .p-button:enabled:hover {
  background: var(--teste-52);
  color: var(--teste-10);
  border-color: var(--teste-52);
}
.p-button.p-button-danger:enabled:focus, .p-buttonset.p-button-danger > .p-button:enabled:focus, .p-splitbutton.p-button-danger > .p-button:enabled:focus {
  box-shadow: 0 0 0 0.2rem var(--teste-53);
}
.p-button.p-button-danger:enabled:active, .p-buttonset.p-button-danger > .p-button:enabled:active, .p-splitbutton.p-button-danger > .p-button:enabled:active {
  background: var(--teste-54);
  color: var(--teste-10);
  border-color: var(--teste-54);
}
.p-button.p-button-danger.p-button-outlined, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined {
  background-color: transparent;
  color: var(--teste-23);
  border: 1px solid;
}
.p-button.p-button-danger.p-button-outlined:enabled:hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:hover {
  background: var(--teste-55);
  color: var(--teste-23);
  border: 1px solid;
}
.p-button.p-button-danger.p-button-outlined:enabled:active, .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:active {
  background: var(--teste-56);
  color: var(--teste-23);
  border: 1px solid;
}
.p-button.p-button-danger.p-button-text, .p-buttonset.p-button-danger > .p-button.p-button-text, .p-splitbutton.p-button-danger > .p-button.p-button-text {
  background-color: transparent;
  color: var(--teste-23);
  border-color: transparent;
}
.p-button.p-button-danger.p-button-text:enabled:hover, .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:hover {
  background: var(--teste-55);
  border-color: transparent;
  color: var(--teste-23);
}
.p-button.p-button-danger.p-button-text:enabled:active, .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:active {
  background: var(--teste-56);
  border-color: transparent;
  color: var(--teste-23);
}

.p-button.p-button-link {
  color: var(--teste-20);
  background: transparent;
  border: transparent;
}
.p-button.p-button-link:enabled:hover {
  background: transparent;
  color: var(--teste-20);
  border-color: transparent;
}
.p-button.p-button-link:enabled:hover .p-button-label {
  text-decoration: underline;
}
.p-button.p-button-link:enabled:focus {
  background: transparent;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  border-color: transparent;
}
.p-button.p-button-link:enabled:active {
  background: transparent;
  color: var(--teste-20);
  border-color: transparent;
}

.p-speeddial-button.p-button.p-button-icon-only {
  width: 4rem;
  height: 4rem;
}
.p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
  font-size: 1.3rem;
}

.p-speeddial-list {
  outline: 0 none;
}

.p-speeddial-item.p-focus > .p-speeddial-action {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-speeddial-action {
  width: 3rem;
  height: 3rem;
  background: var(--teste-6);
  color: var(--teste-57);
}
.p-speeddial-action:hover {
  background: var(--teste-86);
  color: var(--teste-57);
}

.p-speeddial-direction-up .p-speeddial-item {
  margin: 0.25rem 0;
}
.p-speeddial-direction-up .p-speeddial-item:first-child {
  margin-bottom: 0.5rem;
}

.p-speeddial-direction-down .p-speeddial-item {
  margin: 0.25rem 0;
}
.p-speeddial-direction-down .p-speeddial-item:first-child {
  margin-top: 0.5rem;
}

.p-speeddial-direction-left .p-speeddial-item {
  margin: 0 0.25rem;
}
.p-speeddial-direction-left .p-speeddial-item:first-child {
  margin-right: 0.5rem;
}

.p-speeddial-direction-right .p-speeddial-item {
  margin: 0 0.25rem;
}
.p-speeddial-direction-right .p-speeddial-item:first-child {
  margin-left: 0.5rem;
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
  margin: 0;
}
.p-speeddial-circle .p-speeddial-item:first-child, .p-speeddial-circle .p-speeddial-item:last-child,
.p-speeddial-semi-circle .p-speeddial-item:first-child,
.p-speeddial-semi-circle .p-speeddial-item:last-child,
.p-speeddial-quarter-circle .p-speeddial-item:first-child,
.p-speeddial-quarter-circle .p-speeddial-item:last-child {
  margin: 0;
}

.p-speeddial-mask {
  background-color: var(--teste-58);
}

.p-splitbutton {
  border-radius: 3px;
}
.p-splitbutton.p-button-outlined > .p-button {
  background-color: transparent;
  color: var(--teste-5);
  border: 1px solid;
}
.p-splitbutton.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-59);
  color: var(--teste-5);
}
.p-splitbutton.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-60);
  color: var(--teste-5);
}
.p-splitbutton.p-button-outlined.p-button-plain > .p-button {
  color: var(--teste-3);
  border-color: var(--teste-3);
}
.p-splitbutton.p-button-outlined.p-button-plain > .p-button:enabled:hover, .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-17);
  color: var(--teste-3);
}
.p-splitbutton.p-button-outlined.p-button-plain > .p-button:enabled:active, .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-16);
  color: var(--teste-3);
}
.p-splitbutton.p-button-text > .p-button {
  background-color: transparent;
  color: var(--teste-5);
  border-color: transparent;
}
.p-splitbutton.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-59);
  color: var(--teste-5);
  border-color: transparent;
}
.p-splitbutton.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-60);
  color: var(--teste-5);
  border-color: transparent;
}
.p-splitbutton.p-button-text.p-button-plain > .p-button {
  color: var(--teste-3);
}
.p-splitbutton.p-button-text.p-button-plain > .p-button:enabled:hover, .p-splitbutton.p-button-text.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-17);
  color: var(--teste-3);
}
.p-splitbutton.p-button-text.p-button-plain > .p-button:enabled:active, .p-splitbutton.p-button-text.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-16);
  color: var(--teste-3);
}
.p-splitbutton.p-button-raised {
  box-shadow: 0 3px 1px -2px var(--teste-12), 0 2px 2px 0 var(--teste-14), 0 1px 5px 0 var(--teste-15);
}
.p-splitbutton.p-button-rounded {
  border-radius: 2rem;
}
.p-splitbutton.p-button-rounded > .p-button {
  border-radius: 2rem;
}
.p-splitbutton.p-button-sm > .p-button {
  font-size: 0.875rem;
  padding: 0.4375rem 0.875rem;
}
.p-splitbutton.p-button-sm > .p-button .p-button-icon {
  font-size: 0.875rem;
}
.p-splitbutton.p-button-lg > .p-button {
  font-size: 1.25rem;
  padding: 0.625rem 1.25rem;
}
.p-splitbutton.p-button-lg > .p-button .p-button-icon {
  font-size: 1.25rem;
}

.p-splitbutton.p-button-secondary.p-button-outlined > .p-button {
  background-color: transparent;
  color: var(--teste-7);
  border: 1px solid;
}
.p-splitbutton.p-button-secondary.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-30);
  color: var(--teste-7);
}
.p-splitbutton.p-button-secondary.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-89);
  color: var(--teste-7);
}
.p-splitbutton.p-button-secondary.p-button-text > .p-button {
  background-color: transparent;
  color: var(--teste-7);
  border-color: transparent;
}
.p-splitbutton.p-button-secondary.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-30);
  border-color: transparent;
  color: var(--teste-7);
}
.p-splitbutton.p-button-secondary.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-89);
  border-color: transparent;
  color: var(--teste-7);
}

.p-splitbutton.p-button-info.p-button-outlined > .p-button {
  background-color: transparent;
  color: var(--teste-9);
  border: 1px solid;
}
.p-splitbutton.p-button-info.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-33);
  color: var(--teste-9);
}
.p-splitbutton.p-button-info.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-34);
  color: var(--teste-9);
}
.p-splitbutton.p-button-info.p-button-text > .p-button {
  background-color: transparent;
  color: var(--teste-9);
  border-color: transparent;
}
.p-splitbutton.p-button-info.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-info.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-33);
  border-color: transparent;
  color: var(--teste-9);
}
.p-splitbutton.p-button-info.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-info.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-34);
  border-color: transparent;
  color: var(--teste-9);
}

.p-splitbutton.p-button-success.p-button-outlined > .p-button {
  background-color: transparent;
  color: var(--teste-8);
  border: 1px solid;
}
.p-splitbutton.p-button-success.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-38);
  color: var(--teste-8);
}
.p-splitbutton.p-button-success.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-39);
  color: var(--teste-8);
}
.p-splitbutton.p-button-success.p-button-text > .p-button {
  background-color: transparent;
  color: var(--teste-8);
  border-color: transparent;
}
.p-splitbutton.p-button-success.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-success.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-38);
  border-color: transparent;
  color: var(--teste-8);
}
.p-splitbutton.p-button-success.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-success.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-39);
  border-color: transparent;
  color: var(--teste-8);
}

.p-splitbutton.p-button-warning.p-button-outlined > .p-button {
  background-color: transparent;
  color: var(--teste-24);
  border: 1px solid;
}
.p-splitbutton.p-button-warning.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-44);
  color: var(--teste-24);
}
.p-splitbutton.p-button-warning.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-45);
  color: var(--teste-24);
}
.p-splitbutton.p-button-warning.p-button-text > .p-button {
  background-color: transparent;
  color: var(--teste-24);
  border-color: transparent;
}
.p-splitbutton.p-button-warning.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-warning.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-44);
  border-color: transparent;
  color: var(--teste-24);
}
.p-splitbutton.p-button-warning.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-warning.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-45);
  border-color: transparent;
  color: var(--teste-24);
}

.p-splitbutton.p-button-help.p-button-outlined > .p-button {
  background-color: transparent;
  color: var(--teste-46);
  border: 1px solid;
}
.p-splitbutton.p-button-help.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-50);
  color: var(--teste-46);
}
.p-splitbutton.p-button-help.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-51);
  color: var(--teste-46);
}
.p-splitbutton.p-button-help.p-button-text > .p-button {
  background-color: transparent;
  color: var(--teste-46);
  border-color: transparent;
}
.p-splitbutton.p-button-help.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-help.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-50);
  border-color: transparent;
  color: var(--teste-46);
}
.p-splitbutton.p-button-help.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-help.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-51);
  border-color: transparent;
  color: var(--teste-46);
}

.p-splitbutton.p-button-danger.p-button-outlined > .p-button {
  background-color: transparent;
  color: var(--teste-23);
  border: 1px solid;
}
.p-splitbutton.p-button-danger.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-55);
  color: var(--teste-23);
}
.p-splitbutton.p-button-danger.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-56);
  color: var(--teste-23);
}
.p-splitbutton.p-button-danger.p-button-text > .p-button {
  background-color: transparent;
  color: var(--teste-23);
  border-color: transparent;
}
.p-splitbutton.p-button-danger.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-danger.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
  background: var(--teste-55);
  border-color: transparent;
  color: var(--teste-23);
}
.p-splitbutton.p-button-danger.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-danger.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
  background: var(--teste-56);
  border-color: transparent;
  color: var(--teste-23);
}

.p-carousel .p-carousel-content .p-carousel-prev,
.p-carousel .p-carousel-content .p-carousel-next {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  margin: 0.5rem;
}
.p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
.p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-carousel .p-carousel-content .p-carousel-prev:focus,
.p-carousel .p-carousel-content .p-carousel-next:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-carousel .p-carousel-indicators {
  padding: 1rem;
}
.p-carousel .p-carousel-indicators .p-carousel-indicator {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.p-carousel .p-carousel-indicators .p-carousel-indicator button {
  background-color: var(--teste-17);
  width: 2rem;
  height: 0.5rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 0;
}
.p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
  background: var(--teste-16);
}
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
  background: var(--teste-11);
  color: var(--teste-6);
}

.p-datatable .p-paginator-top {
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.p-datatable .p-paginator-bottom {
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.p-datatable .p-datatable-header {
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-17);
  border-width: 1px 0 1px 0;
  padding: 1rem 1rem;
  font-weight: 600;
}
.p-datatable .p-datatable-footer {
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  padding: 1rem 1rem;
  font-weight: 600;
}
.p-datatable .p-datatable-thead > tr > th {
  text-align: left;
  padding: 1rem 1rem;
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  font-weight: 600;
  color: var(--teste-6);
  background: var(--teste-18);
  transition: box-shadow 0.2s;
}
.p-datatable .p-datatable-tfoot > tr > td {
  text-align: left;
  padding: 1rem 1rem;
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  font-weight: 600;
  color: var(--teste-6);
  background: var(--teste-18);
}
.p-datatable .p-sortable-column .p-sortable-column-icon {
  color: var(--teste-3);
  margin-left: 0.5rem;
}
.p-datatable .p-sortable-column .p-sortable-column-badge {
  border-radius: 50%;
  height: 1.143rem;
  min-width: 1.143rem;
  line-height: 1.143rem;
  color: var(--teste-6);
  background: var(--teste-11);
  margin-left: 0.5rem;
}
.p-datatable .p-sortable-column:not(.p-highlight):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
  color: var(--teste-3);
}
.p-datatable .p-sortable-column.p-highlight {
  background: var(--teste-18);
  color: var(--teste-5);
}
.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
  color: var(--teste-5);
}
.p-datatable .p-sortable-column.p-highlight:hover {
  background: var(--teste-17);
  color: var(--teste-5);
}
.p-datatable .p-sortable-column.p-highlight:hover .p-sortable-column-icon {
  color: var(--teste-5);
}
.p-datatable .p-sortable-column:focus {
  box-shadow: inset 0 0 0 0.15rem var(--teste-4);
  outline: 0 none;
}
.p-datatable .p-datatable-tbody > tr {
  background: var(--teste-10);
  color: var(--teste-6);
  transition: box-shadow 0.2s;
}
.p-datatable .p-datatable-tbody > tr > td {
  text-align: left;
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  padding: 1rem 1rem;
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
  margin-right: 0.5rem;
}
.p-datatable .p-datatable-tbody > tr > td > .p-column-title {
  font-weight: 600;
}
.p-datatable .p-datatable-tbody > tr:focus {
  outline: 0.15rem solid var(--teste-4);
  outline-offset: -0.15rem;
}
.p-datatable .p-datatable-tbody > tr.p-highlight {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
  box-shadow: inset 0 2px 0 0 var(--teste-11);
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
  box-shadow: inset 0 -2px 0 0 var(--teste-11);
}
.p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-datatable .p-column-resizer-helper {
  background: var(--teste-5);
}
.p-datatable .p-datatable-scrollable-header,
.p-datatable .p-datatable-scrollable-footer {
  background: var(--teste-18);
}
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot, .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead,
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
  background-color: var(--teste-18);
}
.p-datatable .p-datatable-loading-icon {
  font-size: 2rem;
}
.p-datatable.p-datatable-gridlines .p-datatable-header {
  border-width: 1px 1px 0 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-footer {
  border-width: 0 1px 1px 1px;
}
.p-datatable.p-datatable-gridlines .p-paginator-top {
  border-width: 0 1px 0 1px;
}
.p-datatable.p-datatable-gridlines .p-paginator-bottom {
  border-width: 0 1px 1px 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
  border-width: 1px 1px 1px 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {
  border-width: 1px;
}
.p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {
  border-width: 1px;
}
.p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-thead > tr > th + th {
  border-left-width: 0;
}
.p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-tbody > tr > td + td {
  border-left-width: 0;
}
.p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-tbody > tr + tr > td, .p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-tbody > tr:first-child > td {
  border-top-width: 0;
}
.p-datatable.p-datatable-gridlines.p-datatable-scrollable .p-datatable-tfoot > tr > td + td {
  border-left-width: 0;
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even) {
  background: var(--teste-61);
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight .p-row-toggler {
  color: var(--teste-6);
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even).p-highlight .p-row-toggler:hover {
  color: var(--teste-6);
}
.p-datatable.p-datatable-sm .p-datatable-header {
  padding: 0.5rem 0.5rem;
}
.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
  padding: 0.5rem 0.5rem;
}
.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
  padding: 0.5rem 0.5rem;
}
.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
  padding: 0.5rem 0.5rem;
}
.p-datatable.p-datatable-sm .p-datatable-footer {
  padding: 0.5rem 0.5rem;
}
.p-datatable.p-datatable-lg .p-datatable-header {
  padding: 1.25rem 1.25rem;
}
.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
  padding: 1.25rem 1.25rem;
}
.p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
  padding: 1.25rem 1.25rem;
}
.p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
  padding: 1.25rem 1.25rem;
}
.p-datatable.p-datatable-lg .p-datatable-footer {
  padding: 1.25rem 1.25rem;
}

.p-dataview .p-paginator-top {
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.p-dataview .p-paginator-bottom {
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.p-dataview .p-dataview-header {
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-17);
  border-width: 1px 0 1px 0;
  padding: 1rem 1rem;
  font-weight: 600;
}
.p-dataview .p-dataview-content {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  padding: 0;
}
.p-dataview.p-dataview-list .p-dataview-content > .p-grid > div {
  border: solid var(--teste-17);
  border-width: 0 0 1px 0;
}
.p-dataview .p-dataview-footer {
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  padding: 1rem 1rem;
  font-weight: 600;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.p-column-filter-row .p-column-filter-menu-button,
.p-column-filter-row .p-column-filter-clear-button {
  margin-left: 0.5rem;
}

.p-column-filter-menu-button {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-column-filter-menu-button:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-column-filter-menu-button.p-column-filter-menu-button-open, .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-column-filter-menu-button.p-column-filter-menu-button-active, .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-column-filter-menu-button:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-column-filter-clear-button {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-column-filter-clear-button:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-column-filter-clear-button:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-column-filter-overlay {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  min-width: 12.5rem;
}
.p-column-filter-overlay .p-column-filter-row-items {
  padding: 0.5rem 0;
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item {
  margin: 0;
  padding: 0.5rem 1rem;
  border: 0 none;
  color: var(--teste-6);
  background: transparent;
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.15rem var(--teste-4);
}
.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {
  border-top: 1px solid var(--teste-16);
  margin: 0.25rem 0;
}

.p-column-filter-overlay-menu .p-column-filter-operator {
  padding: 0.5rem 1rem;
  border-bottom: 0 none;
  color: var(--teste-6);
  background: var(--teste-18);
  margin: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-column-filter-overlay-menu .p-column-filter-constraint {
  padding: 1rem;
  border-bottom: 1px solid var(--teste-16);
}
.p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-matchmode-dropdown {
  margin-bottom: 0.5rem;
}
.p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-remove-button {
  margin-top: 0.5rem;
}
.p-column-filter-overlay-menu .p-column-filter-constraint:last-child {
  border-bottom: 0 none;
}
.p-column-filter-overlay-menu .p-column-filter-add-rule {
  padding: 0.5rem 1rem;
}
.p-column-filter-overlay-menu .p-column-filter-buttonbar {
  padding: 1rem;
}

.fc {
  /* FullCalendar 4 */
  /* FullCalendar 5 */
}
.fc.fc-unthemed .fc-view-container th {
  background: var(--teste-18);
  border: 1px solid var(--teste-16);
  color: var(--teste-6);
}
.fc.fc-unthemed .fc-view-container td.fc-widget-content {
  border: 1px solid var(--teste-16);
  color: var(--teste-6);
}
.fc.fc-unthemed .fc-view-container td.fc-head-container {
  border: 1px solid var(--teste-16);
}
.fc.fc-unthemed .fc-view-container .fc-view {
  background: var(--teste-10);
}
.fc.fc-unthemed .fc-view-container .fc-row {
  border-right: 1px solid var(--teste-16);
}
.fc.fc-unthemed .fc-view-container .fc-event {
  background: var(--teste-1);
  border: 1px solid var(--teste-1);
  color: var(--teste-10);
}
.fc.fc-unthemed .fc-view-container .fc-divider {
  background: var(--teste-18);
  border: 1px solid var(--teste-16);
}
.fc.fc-unthemed .fc-toolbar .fc-button {
  color: var(--teste-10);
  background: var(--teste-5);
  border: 1px solid var(--teste-5);
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 3px;
  display: flex;
  align-items: center;
}
.fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {
  background: var(--teste-1);
  color: var(--teste-10);
  border-color: var(--teste-1);
}
.fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {
  background: var(--teste-20);
  color: var(--teste-10);
  border-color: var(--teste-20);
}
.fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left {
  font-family: "PrimeIcons" !important;
  text-indent: 0;
  font-size: 1rem;
}
.fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left:before {
  content: "\e900";
}
.fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right {
  font-family: "PrimeIcons" !important;
  text-indent: 0;
  font-size: 1rem;
}
.fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right:before {
  content: "\e901";
}
.fc.fc-unthemed .fc-toolbar .fc-button:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {
  background: var(--teste-10);
  border: 1px solid var(--teste-19);
  color: var(--teste-6);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:hover {
  background: var(--teste-17);
  border-color: var(--teste-19);
  color: var(--teste-6);
}
.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {
  background: var(--teste-5);
  border-color: var(--teste-5);
  color: var(--teste-10);
}
.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active:hover {
  background: var(--teste-1);
  border-color: var(--teste-1);
  color: var(--teste-10);
}
.fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:focus, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:focus, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  z-index: 1;
}
.fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button {
  border-radius: 0;
}
.fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:last-child {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.fc.fc-theme-standard .fc-view-harness .fc-scrollgrid {
  border-color: var(--teste-16);
}
.fc.fc-theme-standard .fc-view-harness th {
  background: var(--teste-18);
  border-color: var(--teste-16);
  color: var(--teste-6);
}
.fc.fc-theme-standard .fc-view-harness td {
  color: var(--teste-6);
  border-color: var(--teste-16);
}
.fc.fc-theme-standard .fc-view-harness .fc-view {
  background: var(--teste-10);
}
.fc.fc-theme-standard .fc-view-harness .fc-popover {
  background: none;
  border: 0 none;
}
.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header {
  border: 1px solid var(--teste-16);
  padding: 1rem;
  background: var(--teste-18);
  color: var(--teste-6);
}
.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close {
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "PrimeIcons" !important;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:before {
  content: "\e90b";
}
.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-body {
  padding: 1rem;
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  border-top: 0 none;
}
.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event {
  color: var(--teste-10);
  background: var(--teste-1);
  border-color: var(--teste-1);
}
.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event .fc-event-main {
  color: var(--teste-10);
}
.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event .fc-daygrid-event-dot {
  background: var(--teste-1);
  border-color: var(--teste-1);
}
.fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event:hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {
  background: var(--teste-18);
}
.fc.fc-theme-standard .fc-toolbar .fc-button {
  color: var(--teste-10);
  background: var(--teste-5);
  border: 1px solid var(--teste-5);
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 3px;
}
.fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
  background: var(--teste-1);
  color: var(--teste-10);
  border-color: var(--teste-1);
}
.fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {
  background: var(--teste-20);
  color: var(--teste-10);
  border-color: var(--teste-20);
}
.fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.fc.fc-theme-standard .fc-toolbar .fc-button:disabled {
  opacity: 0.6;
  color: var(--teste-10);
  background: var(--teste-5);
  border: 1px solid var(--teste-5);
}
.fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left {
  font-family: "PrimeIcons" !important;
  text-indent: 0;
  font-size: 1rem;
}
.fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left:before {
  content: "\e900";
}
.fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right {
  font-family: "PrimeIcons" !important;
  text-indent: 0;
  font-size: 1rem;
}
.fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right:before {
  content: "\e901";
}
.fc.fc-theme-standard .fc-toolbar .fc-button:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button {
  background: var(--teste-10);
  border: 1px solid var(--teste-19);
  color: var(--teste-6);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:hover {
  background: var(--teste-17);
  border-color: var(--teste-19);
  color: var(--teste-6);
}
.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {
  background: var(--teste-5);
  border-color: var(--teste-5);
  color: var(--teste-10);
}
.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active:hover {
  background: var(--teste-1);
  border-color: var(--teste-1);
  color: var(--teste-10);
}
.fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:not(:disabled):focus, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:not(:disabled):focus, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:not(:disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
  z-index: 1;
}
.fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button {
  border-radius: 0;
}
.fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:last-child {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.fc.fc-theme-standard .fc-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}

.p-orderlist .p-orderlist-controls {
  padding: 1rem;
}
.p-orderlist .p-orderlist-controls .p-button {
  margin-bottom: 0.5rem;
}
.p-orderlist .p-orderlist-header {
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-16);
  padding: 1rem;
  font-weight: 600;
  border-bottom: 0 none;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-orderlist .p-orderlist-list {
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  padding: 0.5rem 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  outline: 0 none;
}
.p-orderlist .p-orderlist-list .p-orderlist-item {
  padding: 0.5rem 1rem;
  margin: 0;
  border: 0 none;
  color: var(--teste-6);
  background: transparent;
  transition: transform 0.2s, box-shadow 0.2s;
}
.p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-orderlist .p-orderlist-list .p-orderlist-item.p-focus {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight.p-focus {
  background: var(--teste-12);
}
.p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {
  background: var(--teste-17);
}
.p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {
  background: var(--teste-17);
}

.p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-organizationchart .p-organizationchart-node-content.p-highlight {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {
  color: var(--teste-62);
}
.p-organizationchart .p-organizationchart-line-down {
  background: var(--teste-16);
}
.p-organizationchart .p-organizationchart-line-left {
  border-right: 1px solid var(--teste-16);
  border-color: var(--teste-16);
}
.p-organizationchart .p-organizationchart-line-top {
  border-top: 1px solid var(--teste-16);
  border-color: var(--teste-16);
}
.p-organizationchart .p-organizationchart-node-content {
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  padding: 1rem;
}
.p-organizationchart .p-organizationchart-node-content .p-node-toggler {
  background: inherit;
  color: inherit;
  border-radius: 50%;
}
.p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-paginator {
  background: var(--teste-10);
  color: var(--teste-3);
  border: solid var(--teste-17);
  border-width: 0;
  padding: 0.5rem 1rem;
  border-radius: 3px;
}
.p-paginator .p-paginator-first,
.p-paginator .p-paginator-prev,
.p-paginator .p-paginator-next,
.p-paginator .p-paginator-last {
  background-color: transparent;
  border: 0 none;
  color: var(--teste-3);
  min-width: 2.357rem;
  height: 2.357rem;
  margin: 0.143rem;
  transition: box-shadow 0.2s;
  border-radius: 3px;
}
.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
  background: var(--teste-17);
  border-color: transparent;
  color: var(--teste-6);
}
.p-paginator .p-paginator-first {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-paginator .p-paginator-last {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.p-paginator .p-dropdown {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 2.357rem;
}
.p-paginator .p-dropdown .p-dropdown-label {
  padding-right: 0;
}
.p-paginator .p-paginator-page-input {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.p-paginator .p-paginator-page-input .p-inputtext {
  max-width: 2.357rem;
}
.p-paginator .p-paginator-current {
  background-color: transparent;
  border: 0 none;
  color: var(--teste-3);
  min-width: 2.357rem;
  height: 2.357rem;
  margin: 0.143rem;
  padding: 0 0.5rem;
}
.p-paginator .p-paginator-pages .p-paginator-page {
  background-color: transparent;
  border: 0 none;
  color: var(--teste-3);
  min-width: 2.357rem;
  height: 2.357rem;
  margin: 0.143rem;
  transition: box-shadow 0.2s;
  border-radius: 3px;
}
.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background: var(--teste-11);
  border-color: var(--teste-11);
  color: var(--teste-6);
}
.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
  background: var(--teste-17);
  border-color: transparent;
  color: var(--teste-6);
}

.p-picklist .p-picklist-buttons {
  padding: 1rem;
}
.p-picklist .p-picklist-buttons .p-button {
  margin-bottom: 0.5rem;
}
.p-picklist .p-picklist-header {
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-16);
  padding: 1rem;
  font-weight: 600;
  border-bottom: 0 none;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-picklist .p-picklist-list {
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  padding: 0.5rem 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  outline: 0 none;
}
.p-picklist .p-picklist-list .p-picklist-item {
  padding: 0.5rem 1rem;
  margin: 0;
  border: 0 none;
  color: var(--teste-6);
  background: transparent;
  transition: transform 0.2s, box-shadow 0.2s;
}
.p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-picklist .p-picklist-list .p-picklist-item.p-focus {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-picklist .p-picklist-list .p-picklist-item.p-highlight {
  color: var(--teste-6);
  background: var(--teste-11);
}
.p-picklist .p-picklist-list .p-picklist-item.p-highlight.p-focus {
  background: var(--teste-12);
}
.p-picklist.p-picklist-striped .p-picklist-list .p-picklist-item:nth-child(even) {
  background: var(--teste-17);
}
.p-picklist.p-picklist-striped .p-picklist-list .p-picklist-item:nth-child(even):hover {
  background: var(--teste-17);
}

.p-timeline .p-timeline-event-marker {
  border: 2px solid var(--teste-5);
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background-color: var(--teste-10);
}
.p-timeline .p-timeline-event-connector {
  background-color: var(--teste-16);
}
.p-timeline.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline.p-timeline-vertical .p-timeline-event-content {
  padding: 0 1rem;
}
.p-timeline.p-timeline-vertical .p-timeline-event-connector {
  width: 2px;
}
.p-timeline.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline.p-timeline-horizontal .p-timeline-event-content {
  padding: 1rem 0;
}
.p-timeline.p-timeline-horizontal .p-timeline-event-connector {
  height: 2px;
}

.p-tree {
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  padding: 1rem;
  border-radius: 3px;
}
.p-tree .p-tree-container .p-treenode {
  padding: 0.143rem;
  outline: 0 none;
}
.p-tree .p-tree-container .p-treenode:focus > .p-treenode-content {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.15rem var(--teste-4);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content {
  border-radius: 3px;
  transition: box-shadow 0.2s;
  padding: 0;
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
  margin-right: 0.5rem;
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {
  margin-right: 0.5rem;
  color: var(--teste-3);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {
  margin-right: 0.5rem;
}
.p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox .p-indeterminate .p-checkbox-icon {
  color: var(--teste-6);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {
  color: var(--teste-6);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {
  color: var(--teste-6);
}
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-tree .p-tree-filter-container {
  margin-bottom: 0.5rem;
}
.p-tree .p-tree-filter-container .p-tree-filter {
  width: 100%;
  padding-right: 1.5rem;
}
.p-tree .p-tree-filter-container .p-tree-filter-icon {
  right: 0.5rem;
  color: var(--teste-3);
}
.p-tree .p-treenode-children {
  padding: 0 0 0 1rem;
}
.p-tree .p-tree-loading-icon {
  font-size: 2rem;
}

.p-treetable .p-paginator-top {
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.p-treetable .p-paginator-bottom {
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.p-treetable .p-treetable-header {
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-17);
  border-width: 1px 0 1px 0;
  padding: 1rem 1rem;
  font-weight: 600;
}
.p-treetable .p-treetable-footer {
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  padding: 1rem 1rem;
  font-weight: 600;
}
.p-treetable .p-treetable-thead > tr > th {
  text-align: left;
  padding: 1rem 1rem;
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  font-weight: 600;
  color: var(--teste-6);
  background: var(--teste-18);
  transition: box-shadow 0.2s;
}
.p-treetable .p-treetable-tfoot > tr > td {
  text-align: left;
  padding: 1rem 1rem;
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  font-weight: 600;
  color: var(--teste-6);
  background: var(--teste-18);
}
.p-treetable .p-sortable-column {
  outline-color: var(--teste-4);
}
.p-treetable .p-sortable-column .p-sortable-column-icon {
  color: var(--teste-3);
  margin-left: 0.5rem;
}
.p-treetable .p-sortable-column .p-sortable-column-badge {
  border-radius: 50%;
  height: 1.143rem;
  min-width: 1.143rem;
  line-height: 1.143rem;
  color: var(--teste-6);
  background: var(--teste-11);
  margin-left: 0.5rem;
}
.p-treetable .p-sortable-column:not(.p-highlight):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
  color: var(--teste-3);
}
.p-treetable .p-sortable-column.p-highlight {
  background: var(--teste-18);
  color: var(--teste-5);
}
.p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
  color: var(--teste-5);
}
.p-treetable .p-treetable-tbody > tr {
  background: var(--teste-10);
  color: var(--teste-6);
  transition: box-shadow 0.2s;
}
.p-treetable .p-treetable-tbody > tr > td {
  text-align: left;
  border: 1px solid var(--teste-17);
  border-width: 0 0 1px 0;
  padding: 1rem 1rem;
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  margin-right: 0.5rem;
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {
  margin-right: 0.5rem;
}
.p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox .p-indeterminate .p-checkbox-icon {
  color: var(--teste-6);
}
.p-treetable .p-treetable-tbody > tr:focus {
  outline: 0.15rem solid var(--teste-4);
  outline-offset: -0.15rem;
}
.p-treetable .p-treetable-tbody > tr.p-highlight {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
  color: var(--teste-6);
}
.p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
  color: var(--teste-6);
}
.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
  color: var(--teste-6);
}
.p-treetable .p-column-resizer-helper {
  background: var(--teste-5);
}
.p-treetable .p-treetable-scrollable-header,
.p-treetable .p-treetable-scrollable-footer {
  background: var(--teste-18);
}
.p-treetable .p-treetable-loading-icon {
  font-size: 2rem;
}
.p-treetable.p-treetable-gridlines .p-datatable-header {
  border-width: 1px 1px 0 1px;
}
.p-treetable.p-treetable-gridlines .p-treetable-footer {
  border-width: 0 1px 1px 1px;
}
.p-treetable.p-treetable-gridlines .p-treetable-top {
  border-width: 0 1px 0 1px;
}
.p-treetable.p-treetable-gridlines .p-treetable-bottom {
  border-width: 0 1px 1px 1px;
}
.p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {
  border-width: 1px;
}
.p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {
  border-width: 1px;
}
.p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {
  border-width: 1px;
}
.p-treetable.p-treetable-sm .p-treetable-header {
  padding: 0.875rem 0.875rem;
}
.p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
  padding: 0.5rem 0.5rem;
}
.p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
  padding: 0.5rem 0.5rem;
}
.p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
  padding: 0.5rem 0.5rem;
}
.p-treetable.p-treetable-sm .p-treetable-footer {
  padding: 0.5rem 0.5rem;
}
.p-treetable.p-treetable-lg .p-treetable-header {
  padding: 1.25rem 1.25rem;
}
.p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
  padding: 1.25rem 1.25rem;
}
.p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
  padding: 1.25rem 1.25rem;
}
.p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
  padding: 1.25rem 1.25rem;
}
.p-treetable.p-treetable-lg .p-treetable-footer {
  padding: 1.25rem 1.25rem;
}

.p-accordion .p-accordion-header .p-accordion-header-link {
  padding: 1rem;
  border: 1px solid var(--teste-16);
  color: var(--teste-6);
  background: var(--teste-18);
  font-weight: 600;
  border-radius: 3px;
  transition: box-shadow 0.2s;
}
.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
  margin-right: 0.5rem;
}
.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.2rem var(--teste-4);
}
.p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
  background: var(--teste-17);
  border-color: var(--teste-16);
  color: var(--teste-6);
}
.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
  background: var(--teste-18);
  border-color: var(--teste-16);
  color: var(--teste-6);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
  border-color: var(--teste-16);
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-accordion .p-accordion-content {
  padding: 1rem;
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-accordion .p-accordion-tab {
  margin-bottom: 0;
}
.p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link {
  border-radius: 0;
}
.p-accordion .p-accordion-tab .p-accordion-content {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header .p-accordion-header-link {
  border-top: 0 none;
}
.p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link, .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
  border-top: 0 none;
}
.p-accordion .p-accordion-tab:first-child .p-accordion-header .p-accordion-header-link {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-accordion .p-accordion-tab:last-child .p-accordion-header:not(.p-highlight) .p-accordion-header-link {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-accordion .p-accordion-tab:last-child .p-accordion-content {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.p-card {
  background: var(--teste-10);
  color: var(--teste-6);
  box-shadow: 0 2px 1px -1px var(--teste-12), 0 1px 1px 0 var(--teste-14), 0 1px 3px 0 var(--teste-15);
  border-radius: 3px;
}
.p-card .p-card-body {
  padding: 1rem;
}
.p-card .p-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.p-card .p-card-subtitle {
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: var(--teste-3);
}
.p-card .p-card-content {
  padding: 1rem 0;
}
.p-card .p-card-footer {
  padding: 1rem 0 0 0;
}

.p-fieldset {
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  border-radius: 3px;
}
.p-fieldset .p-fieldset-legend {
  padding: 1rem;
  border: 1px solid var(--teste-16);
  color: var(--teste-6);
  background: var(--teste-18);
  font-weight: 600;
  border-radius: 3px;
}
.p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
  padding: 0;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
  padding: 1rem;
  color: var(--teste-6);
  border-radius: 3px;
  transition: box-shadow 0.2s;
}
.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
  margin-right: 0.5rem;
}
.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:hover {
  color: var(--teste-6);
}
.p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
  background: var(--teste-17);
  border-color: var(--teste-16);
  color: var(--teste-6);
}
.p-fieldset .p-fieldset-content {
  padding: 1rem;
}

.p-divider .p-divider-content {
  background-color: var(--teste-10);
}
.p-divider.p-divider-horizontal {
  margin: 1rem 0;
  padding: 0 1rem;
}
.p-divider.p-divider-horizontal:before {
  border-top: 1px var(--teste-16);
}
.p-divider.p-divider-horizontal .p-divider-content {
  padding: 0 0.5rem;
}
.p-divider.p-divider-vertical {
  margin: 0 1rem;
  padding: 1rem 0;
}
.p-divider.p-divider-vertical:before {
  border-left: 1px var(--teste-16);
}
.p-divider.p-divider-vertical .p-divider-content {
  padding: 0.5rem 0;
}

.p-panel .p-panel-header {
  border: 1px solid var(--teste-16);
  padding: 1rem;
  background: var(--teste-18);
  color: var(--teste-6);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-panel .p-panel-header .p-panel-title {
  font-weight: 600;
}
.p-panel .p-panel-header .p-panel-header-icon {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-panel .p-panel-header .p-panel-header-icon:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-panel.p-panel-toggleable .p-panel-header {
  padding: 0.5rem 1rem;
}
.p-panel .p-panel-content {
  padding: 1rem;
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top: 0 none;
}
.p-panel .p-panel-footer {
  padding: 0.5rem 1rem;
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  border-top: 0 none;
}

.p-scrollpanel .p-scrollpanel-bar {
  background: var(--teste-18);
  border: 0 none;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-scrollpanel .p-scrollpanel-bar:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-splitter {
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  border-radius: 3px;
  color: var(--teste-6);
}
.p-splitter .p-splitter-gutter {
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  background: var(--teste-18);
}
.p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
  background: var(--teste-16);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-splitter .p-splitter-gutter .p-splitter-gutter-handle:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-splitter .p-splitter-gutter-resizing {
  background: var(--teste-16);
}

.p-tabview .p-tabview-nav {
  background: var(--teste-10);
  border: 1px solid var(--teste-16);
  border-width: 0 0 2px 0;
}
.p-tabview .p-tabview-nav li {
  margin-right: 0;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  border: solid var(--teste-16);
  border-width: 0 0 2px 0;
  border-color: transparent transparent var(--teste-16) transparent;
  background: var(--teste-10);
  color: var(--teste-3);
  padding: 1rem;
  font-weight: 600;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  transition: box-shadow 0.2s;
  margin: 0 0 -2px 0;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.2rem var(--teste-4);
}
.p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
  background: var(--teste-10);
  border-color: var(--teste-3);
  color: var(--teste-3);
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  background: var(--teste-10);
  border-color: var(--teste-5);
  color: var(--teste-5);
}
.p-tabview .p-tabview-nav-btn.p-link {
  background: var(--teste-10);
  color: var(--teste-5);
  width: 2.357rem;
  box-shadow: 0 3px 1px -2px var(--teste-12), 0 2px 2px 0 var(--teste-14), 0 1px 5px 0 var(--teste-15);
  border-radius: 0;
}
.p-tabview .p-tabview-nav-btn.p-link:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.2rem var(--teste-4);
}
.p-tabview .p-tabview-panels {
  background: var(--teste-10);
  padding: 1rem;
  border: 0 none;
  color: var(--teste-6);
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.p-toolbar {
  background: var(--teste-18);
  border: 1px solid var(--teste-16);
  padding: 1rem;
  border-radius: 3px;
  gap: 0.5rem;
}
.p-toolbar .p-toolbar-separator {
  margin: 0 0.5rem;
}

.p-confirm-popup {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0px 11px 15px -7px var(--teste-12), 0px 24px 38px 3px var(--teste-14), 0px 9px 46px 8px var(--teste-15);
}
.p-confirm-popup .p-confirm-popup-content {
  padding: 1rem;
}
.p-confirm-popup .p-confirm-popup-footer {
  text-align: right;
  padding: 0 1rem 1rem 1rem;
}
.p-confirm-popup .p-confirm-popup-footer button {
  margin: 0 0.5rem 0 0;
  width: auto;
}
.p-confirm-popup .p-confirm-popup-footer button:last-child {
  margin: 0;
}
.p-confirm-popup:after {
  border: solid transparent;
  border-color: var(--teste-63);
  border-bottom-color: var(--teste-10);
}
.p-confirm-popup:before {
  border: solid transparent;
  border-color: var(--teste-63);
  border-bottom-color: var(--teste-10);
}
.p-confirm-popup.p-confirm-popup-flipped:after {
  border-top-color: var(--teste-10);
}
.p-confirm-popup.p-confirm-popup-flipped:before {
  border-top-color: var(--teste-10);
}
.p-confirm-popup .p-confirm-popup-icon {
  font-size: 1.5rem;
}
.p-confirm-popup .p-confirm-popup-message {
  margin-left: 1rem;
}

.p-dialog {
  border-radius: 3px;
  box-shadow: 0px 11px 15px -7px var(--teste-12), 0px 24px 38px 3px var(--teste-14), 0px 9px 46px 8px var(--teste-15);
  border: 0 none;
}
.p-dialog .p-dialog-header {
  border-bottom: 0 none;
  background: var(--teste-10);
  color: var(--teste-6);
  padding: 1.5rem;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-dialog .p-dialog-header .p-dialog-title {
  font-weight: 600;
  font-size: 1.25rem;
}
.p-dialog .p-dialog-header .p-dialog-header-icon {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  margin-right: 0.5rem;
}
.p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-dialog .p-dialog-header .p-dialog-header-icon:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
  margin-right: 0;
}
.p-dialog .p-dialog-content {
  background: var(--teste-10);
  color: var(--teste-6);
  padding: 0 1.5rem 2rem 1.5rem;
}
.p-dialog .p-dialog-content:last-of-type {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-dialog .p-dialog-footer {
  border-top: 0 none;
  background: var(--teste-10);
  color: var(--teste-6);
  padding: 0 1.5rem 1.5rem 1.5rem;
  text-align: right;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-dialog .p-dialog-footer button {
  margin: 0 0.5rem 0 0;
  width: auto;
}
.p-dialog.p-confirm-dialog .p-confirm-dialog-icon {
  font-size: 2rem;
}
.p-dialog.p-confirm-dialog .p-confirm-dialog-message {
  margin-left: 1rem;
}

.p-overlaypanel {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0px 11px 15px -7px var(--teste-12), 0px 24px 38px 3px var(--teste-14), 0px 9px 46px 8px var(--teste-15);
}
.p-overlaypanel .p-overlaypanel-content {
  padding: 1rem;
}
.p-overlaypanel .p-overlaypanel-close {
  background: var(--teste-5);
  color: var(--teste-10);
  width: 2rem;
  height: 2rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 50%;
  position: absolute;
  top: -1rem;
  right: -1rem;
}
.p-overlaypanel .p-overlaypanel-close:enabled:hover {
  background: var(--teste-1);
  color: var(--teste-10);
}
.p-overlaypanel:after {
  border: solid transparent;
  border-color: var(--teste-63);
  border-bottom-color: var(--teste-10);
}
.p-overlaypanel:before {
  border: solid transparent;
  border-color: var(--teste-63);
  border-bottom-color: var(--teste-87);
}
.p-overlaypanel.p-overlaypanel-flipped:after {
  border-top-color: var(--teste-10);
}
.p-overlaypanel.p-overlaypanel-flipped:before {
  border-top-color: var(--teste-10);
}

.p-sidebar {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  box-shadow: 0px 11px 15px -7px var(--teste-12), 0px 24px 38px 3px var(--teste-14), 0px 9px 46px 8px var(--teste-15);
}
.p-sidebar .p-sidebar-header {
  padding: 1rem;
}
.p-sidebar .p-sidebar-header .p-sidebar-close,
.p-sidebar .p-sidebar-header .p-sidebar-icon {
  width: 2rem;
  height: 2rem;
  color: var(--teste-3);
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
.p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
  color: var(--teste-6);
  border-color: transparent;
  background: var(--teste-17);
}
.p-sidebar .p-sidebar-header .p-sidebar-close:focus,
.p-sidebar .p-sidebar-header .p-sidebar-icon:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-sidebar .p-sidebar-header + .p-sidebar-content {
  padding-top: 0;
}
.p-sidebar .p-sidebar-content {
  padding: 1rem;
}

.p-tooltip .p-tooltip-text {
  background: var(--teste-6);
  color: var(--teste-10);
  padding: 0.5rem 0.5rem;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  border-radius: 3px;
}
.p-tooltip.p-tooltip-right .p-tooltip-arrow {
  border-right-color: var(--teste-6);
}
.p-tooltip.p-tooltip-left .p-tooltip-arrow {
  border-left-color: var(--teste-6);
}
.p-tooltip.p-tooltip-top .p-tooltip-arrow {
  border-top-color: var(--teste-6);
}
.p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
  border-bottom-color: var(--teste-6);
}

.p-fileupload .p-fileupload-buttonbar {
  background: var(--teste-18);
  padding: 1rem;
  border: 1px solid var(--teste-16);
  color: var(--teste-6);
  border-bottom: 0 none;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  gap: 0.5rem;
}
.p-fileupload .p-fileupload-buttonbar .p-button.p-fileupload-choose.p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-fileupload .p-fileupload-content {
  background: var(--teste-10);
  padding: 2rem 1rem;
  border: 1px solid var(--teste-16);
  color: var(--teste-6);
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-fileupload .p-fileupload-file {
  padding: 1rem;
  border: 1px solid var(--teste-16);
  border-radius: 3px;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.p-fileupload .p-fileupload-file:last-child {
  margin-bottom: 0;
}
.p-fileupload .p-fileupload-file-name {
  margin-bottom: 0.5rem;
}
.p-fileupload .p-fileupload-file-size {
  margin-right: 0.5rem;
}
.p-fileupload .p-progressbar {
  height: 0.25rem;
}
.p-fileupload .p-fileupload-row > div {
  padding: 1rem 1rem;
}
.p-fileupload.p-fileupload-advanced .p-message {
  margin-top: 0;
}

.p-fileupload-choose:not(.p-disabled):hover {
  background: var(--teste-1);
  color: var(--teste-10);
  border-color: var(--teste-1);
}
.p-fileupload-choose:not(.p-disabled):active {
  background: var(--teste-20);
  color: var(--teste-10);
  border-color: var(--teste-20);
}

.p-breadcrumb {
  background: var(--teste-10);
  border: 1px solid var(--teste-16);
  border-radius: 3px;
  padding: 1rem;
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
  transition: box-shadow 0.2s;
  border-radius: 3px;
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
}
.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
  margin: 0 0.5rem 0 0.5rem;
  color: var(--teste-6);
}
.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {
  color: var(--teste-6);
}
.p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {
  color: var(--teste-3);
}

.p-contextmenu {
  padding: 0.25rem 0;
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  border-radius: 3px;
  width: 12.5rem;
}
.p-contextmenu .p-contextmenu-root-list {
  outline: 0 none;
}
.p-contextmenu .p-submenu-list {
  padding: 0.25rem 0;
  background: var(--teste-10);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  border-radius: 3px;
}
.p-contextmenu .p-menuitem > .p-menuitem-content {
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.75rem 1rem;
  user-select: none;
}
.p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
  margin-right: 0.5rem;
}
.p-contextmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-contextmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-contextmenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
  background: var(--teste-17);
}
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-6);
}
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-contextmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-contextmenu .p-menuitem-separator {
  border-top: 1px solid var(--teste-16);
  margin: 0.25rem 0;
}
.p-contextmenu .p-submenu-icon {
  font-size: 0.875rem;
}

.p-dock .p-dock-list-container {
  background: var(--teste-64);
  border: 1px solid var(--teste-65);
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
}
.p-dock .p-dock-list-container .p-dock-list {
  outline: 0 none;
}
.p-dock .p-dock-item {
  padding: 0.5rem;
  border-radius: 3px;
}
.p-dock .p-dock-item.p-focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.15rem var(--teste-4);
}
.p-dock .p-dock-link {
  width: 4rem;
  height: 4rem;
}
.p-dock.p-dock-top .p-dock-item-second-prev,
.p-dock.p-dock-top .p-dock-item-second-next, .p-dock.p-dock-bottom .p-dock-item-second-prev,
.p-dock.p-dock-bottom .p-dock-item-second-next {
  margin: 0 0.9rem;
}
.p-dock.p-dock-top .p-dock-item-prev,
.p-dock.p-dock-top .p-dock-item-next, .p-dock.p-dock-bottom .p-dock-item-prev,
.p-dock.p-dock-bottom .p-dock-item-next {
  margin: 0 1.3rem;
}
.p-dock.p-dock-top .p-dock-item-current, .p-dock.p-dock-bottom .p-dock-item-current {
  margin: 0 1.5rem;
}
.p-dock.p-dock-left .p-dock-item-second-prev,
.p-dock.p-dock-left .p-dock-item-second-next, .p-dock.p-dock-right .p-dock-item-second-prev,
.p-dock.p-dock-right .p-dock-item-second-next {
  margin: 0.9rem 0;
}
.p-dock.p-dock-left .p-dock-item-prev,
.p-dock.p-dock-left .p-dock-item-next, .p-dock.p-dock-right .p-dock-item-prev,
.p-dock.p-dock-right .p-dock-item-next {
  margin: 1.3rem 0;
}
.p-dock.p-dock-left .p-dock-item-current, .p-dock.p-dock-right .p-dock-item-current {
  margin: 1.5rem 0;
}

@media screen and (max-width: 960px) {
  .p-dock.p-dock-top .p-dock-list-container, .p-dock.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
  }
  .p-dock.p-dock-top .p-dock-list-container .p-dock-list, .p-dock.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
  }
  .p-dock.p-dock-left .p-dock-list-container, .p-dock.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
  }
  .p-dock.p-dock-left .p-dock-list-container .p-dock-list, .p-dock.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
  }
  .p-dock .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
  }
}
.p-megamenu {
  padding: 0.5rem;
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-16);
  border-radius: 3px;
}
.p-megamenu .p-megamenu-root-list {
  outline: 0 none;
}
.p-megamenu .p-menuitem > .p-menuitem-content {
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.75rem 1rem;
  user-select: none;
}
.p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
  margin-right: 0.5rem;
}
.p-megamenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-megamenu .p-menuitem.p-highlight > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-megamenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-megamenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
  background: var(--teste-17);
}
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-6);
}
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-megamenu .p-megamenu-panel {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-megamenu .p-submenu-header {
  margin: 0;
  padding: 0.75rem 1rem;
  color: var(--teste-6);
  background: var(--teste-10);
  font-weight: 600;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-megamenu .p-submenu-list {
  padding: 0.25rem 0;
  width: 12.5rem;
}
.p-megamenu .p-submenu-list .p-menuitem-separator {
  border-top: 1px solid var(--teste-16);
  margin: 0.25rem 0;
}
.p-megamenu.p-megamenu-vertical {
  width: 12.5rem;
  padding: 0.25rem 0;
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content {
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 3px;
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.75rem 1rem;
  user-select: none;
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
  margin-right: 0.5rem;
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
  margin-left: 0.5rem;
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}

.p-menu {
  padding: 0.25rem 0;
  background: var(--teste-10);
  color: var(--teste-6);
  border: 1px solid var(--teste-16);
  border-radius: 3px;
  width: 12.5rem;
}
.p-menu .p-menuitem > .p-menuitem-content {
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.75rem 1rem;
  user-select: none;
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
  margin-right: 0.5rem;
}
.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-menu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-menu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
  background: var(--teste-17);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-6);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-menu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-menu.p-menu-overlay {
  background: var(--teste-10);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-menu .p-submenu-header {
  margin: 0;
  padding: 0.75rem 1rem;
  color: var(--teste-6);
  background: var(--teste-10);
  font-weight: 600;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.p-menu .p-menuitem-separator {
  border-top: 1px solid var(--teste-16);
  margin: 0.25rem 0;
}

.p-menubar {
  padding: 0.5rem;
  background: var(--teste-18);
  color: var(--teste-6);
  border: 1px solid var(--teste-16);
  border-radius: 3px;
}
.p-menubar .p-menubar-root-list {
  outline: 0 none;
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content {
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 3px;
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.75rem 1rem;
  user-select: none;
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
  margin-right: 0.5rem;
}
.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
  margin-left: 0.5rem;
}
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-menubar .p-menuitem > .p-menuitem-content {
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.75rem 1rem;
  user-select: none;
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
  margin-right: 0.5rem;
}
.p-menubar .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-menubar .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
  background: var(--teste-17);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-6);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-menubar .p-submenu-list {
  padding: 0.25rem 0;
  background: var(--teste-10);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  width: 12.5rem;
}
.p-menubar .p-submenu-list .p-menuitem-separator {
  border-top: 1px solid var(--teste-16);
  margin: 0.25rem 0;
}
.p-menubar .p-submenu-list .p-submenu-icon {
  font-size: 0.875rem;
}

@media screen and (max-width: 960px) {
  .p-menubar {
    position: relative;
  }
  .p-menubar .p-menubar-button {
    display: flex;
    width: 2rem;
    height: 2rem;
    color: var(--teste-3);
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .p-menubar .p-menubar-button:hover {
    color: var(--teste-3);
    background: var(--teste-17);
  }
  .p-menubar .p-menubar-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem var(--teste-4);
  }
  .p-menubar .p-menubar-root-list {
    position: absolute;
    display: none;
    padding: 0.25rem 0;
    background: var(--teste-10);
    border: 0 none;
    box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
    width: 100%;
  }
  .p-menubar .p-menubar-root-list .p-menuitem-separator {
    border-top: 1px solid var(--teste-16);
    margin: 0.25rem 0;
  }
  .p-menubar .p-menubar-root-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-menubar .p-menubar-root-list .p-menuitem {
    width: 100%;
    position: static;
  }
  .p-menubar .p-menubar-root-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
  }
  .p-menubar .p-menubar-root-list .p-menuitem.p-menuitem-active > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-180deg);
  }
  .p-menubar .p-menubar-root-list .p-submenu-list {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
  }
  .p-menubar .p-menubar-root-list .p-submenu-list .p-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
  }
  .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-90deg);
  }
  .p-menubar .p-menubar-root-list .p-menuitem {
    width: 100%;
    position: static;
  }
  .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 2.25rem;
  }
  .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 3.75rem;
  }
  .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 5.25rem;
  }
  .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 6.75rem;
  }
  .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link {
    padding-left: 8.25rem;
  }
  .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
  }
}
.p-panelmenu .p-panelmenu-header {
  outline: 0 none;
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content {
  border: 1px solid var(--teste-16);
  color: var(--teste-6);
  background: var(--teste-18);
  border-radius: 3px;
  transition: box-shadow 0.2s;
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
  padding: 1rem;
  font-weight: 600;
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action .p-submenu-icon {
  margin-right: 0.5rem;
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action .p-menuitem-icon {
  margin-right: 0.5rem;
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled):focus .p-panelmenu-header-content {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.2rem var(--teste-4);
}
.p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover .p-panelmenu-header-content {
  background: var(--teste-17);
  border-color: var(--teste-16);
  color: var(--teste-6);
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight .p-panelmenu-header-content {
  background: var(--teste-18);
  border-color: var(--teste-16);
  color: var(--teste-6);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  margin-bottom: 0;
}
.p-panelmenu .p-panelmenu-header:not(.p-disabled).p-highlight:hover .p-panelmenu-header-content {
  border-color: var(--teste-16);
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-panelmenu .p-panelmenu-content {
  padding: 0.25rem 0;
  border: 1px solid var(--teste-16);
  background: var(--teste-10);
  color: var(--teste-6);
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-panelmenu .p-panelmenu-content .p-panelmenu-root-list {
  outline: 0 none;
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content {
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.75rem 1rem;
  user-select: none;
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
  margin-right: 0.5rem;
}
.p-panelmenu .p-panelmenu-content .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-panelmenu .p-panelmenu-content .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
  background: var(--teste-17);
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-6);
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  margin-right: 0.5rem;
}
.p-panelmenu .p-panelmenu-content .p-menuitem-separator {
  border-top: 1px solid var(--teste-16);
  margin: 0.25rem 0;
}
.p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-list) {
  padding: 0 0 0 1rem;
}
.p-panelmenu .p-panelmenu-panel {
  margin-bottom: 0;
}
.p-panelmenu .p-panelmenu-panel .p-panelmenu-header .p-panelmenu-header-content {
  border-radius: 0;
}
.p-panelmenu .p-panelmenu-panel .p-panelmenu-content {
  border-radius: 0;
}
.p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header .p-panelmenu-header-content {
  border-top: 0 none;
}
.p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover .p-panelmenu-header-content, .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header:not(.p-disabled).p-highlight:hover .p-panelmenu-header-content {
  border-top: 0 none;
}
.p-panelmenu .p-panelmenu-panel:first-child .p-panelmenu-header .p-panelmenu-header-content {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-header:not(.p-highlight) .p-panelmenu-header-content {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-content {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.p-steps .p-steps-item .p-menuitem-link {
  background: transparent;
  transition: box-shadow 0.2s;
  border-radius: 3px;
  background: var(--teste-10);
}
.p-steps .p-steps-item .p-menuitem-link .p-steps-number {
  color: var(--teste-6);
  border: 1px solid var(--teste-17);
  background: var(--teste-10);
  min-width: 2rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.143rem;
  z-index: 1;
  border-radius: 50%;
}
.p-steps .p-steps-item .p-menuitem-link .p-steps-title {
  margin-top: 0.5rem;
  color: var(--teste-3);
}
.p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-steps .p-steps-item.p-highlight .p-steps-number {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-steps .p-steps-item.p-highlight .p-steps-title {
  font-weight: 600;
  color: var(--teste-6);
}
.p-steps .p-steps-item:before {
  content: " ";
  border-top: 1px solid var(--teste-16);
  width: 100%;
  top: 50%;
  left: 0;
  display: block;
  position: absolute;
  margin-top: -1rem;
}

.p-tabmenu .p-tabmenu-nav {
  background: var(--teste-10);
  border: 1px solid var(--teste-16);
  border-width: 0 0 2px 0;
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
  margin-right: 0;
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
  border: solid var(--teste-16);
  border-width: 0 0 2px 0;
  border-color: transparent transparent var(--teste-16) transparent;
  background: var(--teste-10);
  color: var(--teste-3);
  padding: 1rem;
  font-weight: 600;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  transition: box-shadow 0.2s;
  margin: 0 0 -2px 0;
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
  margin-right: 0.5rem;
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: inset 0 0 0 0.2rem var(--teste-4);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
  background: var(--teste-10);
  border-color: var(--teste-3);
  color: var(--teste-3);
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
  background: var(--teste-10);
  border-color: var(--teste-5);
  color: var(--teste-5);
}

.p-tieredmenu {
  padding: 0.25rem 0;
  background: var(--teste-10);
  color: var(--teste-6);
  border: 1px solid var(--teste-16);
  border-radius: 3px;
  width: 12.5rem;
}
.p-tieredmenu.p-tieredmenu-overlay {
  background: var(--teste-10);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-tieredmenu .p-tieredmenu-root-list {
  outline: 0 none;
}
.p-tieredmenu .p-submenu-list {
  padding: 0.25rem 0;
  background: var(--teste-10);
  border: 0 none;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
}
.p-tieredmenu .p-menuitem > .p-menuitem-content {
  color: var(--teste-6);
  transition: box-shadow 0.2s;
  border-radius: 0;
}
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link {
  padding: 0.75rem 1rem;
  user-select: none;
}
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: var(--teste-3);
  margin-right: 0.5rem;
}
.p-tieredmenu .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-tieredmenu .p-menuitem.p-highlight > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-tieredmenu .p-menuitem.p-highlight.p-focus > .p-menuitem-content {
  background: var(--teste-17);
}
.p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
  color: var(--teste-6);
  background: var(--teste-16);
}
.p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-menuitem-icon, .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content .p-menuitem-link .p-submenu-icon {
  color: var(--teste-6);
}
.p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover {
  color: var(--teste-6);
  background: var(--teste-17);
}
.p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-text {
  color: var(--teste-6);
}
.p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-menuitem-icon, .p-tieredmenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-link .p-submenu-icon {
  color: var(--teste-3);
}
.p-tieredmenu .p-menuitem-separator {
  border-top: 1px solid var(--teste-16);
  margin: 0.25rem 0;
}
.p-tieredmenu .p-submenu-icon {
  font-size: 0.875rem;
}

.p-inline-message {
  padding: 0.5rem 0.5rem;
  margin: 0;
  border-radius: 3px;
}
.p-inline-message.p-inline-message-info {
  background: var(--teste-66);
  border: solid var(--teste-67);
  border-width: 0px;
  color: var(--teste-68);
}
.p-inline-message.p-inline-message-info .p-inline-message-icon {
  color: var(--teste-68);
}
.p-inline-message.p-inline-message-success {
  background: var(--teste-69);
  border: solid var(--teste-70);
  border-width: 0px;
  color: var(--teste-71);
}
.p-inline-message.p-inline-message-success .p-inline-message-icon {
  color: var(--teste-71);
}
.p-inline-message.p-inline-message-warn {
  background: var(--teste-72);
  border: solid var(--teste-73);
  border-width: 0px;
  color: var(--teste-74);
}
.p-inline-message.p-inline-message-warn .p-inline-message-icon {
  color: var(--teste-74);
}
.p-inline-message.p-inline-message-error {
  background: var(--teste-75);
  border: solid var(--teste-76);
  border-width: 0px;
  color: var(--teste-77);
}
.p-inline-message.p-inline-message-error .p-inline-message-icon {
  color: var(--teste-77);
}
.p-inline-message .p-inline-message-icon {
  font-size: 1rem;
  margin-right: 0.5rem;
}
.p-inline-message .p-inline-message-text {
  font-size: 1rem;
}
.p-inline-message.p-inline-message-icon-only .p-inline-message-icon {
  margin-right: 0;
}

.p-message {
  margin: 1rem 0;
  border-radius: 3px;
}
.p-message .p-message-wrapper {
  padding: 1rem 1.5rem;
}
.p-message .p-message-close {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: transparent;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-message .p-message-close:hover {
  background: var(--teste-78);
}
.p-message .p-message-close:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-message.p-message-info {
  background: var(--teste-66);
  border: solid var(--teste-67);
  border-width: 0 0 0 6px;
  color: var(--teste-68);
}
.p-message.p-message-info .p-message-icon {
  color: var(--teste-68);
}
.p-message.p-message-info .p-message-close {
  color: var(--teste-68);
}
.p-message.p-message-success {
  background: var(--teste-69);
  border: solid var(--teste-70);
  border-width: 0 0 0 6px;
  color: var(--teste-71);
}
.p-message.p-message-success .p-message-icon {
  color: var(--teste-71);
}
.p-message.p-message-success .p-message-close {
  color: var(--teste-71);
}
.p-message.p-message-warn {
  background: var(--teste-72);
  border: solid var(--teste-73);
  border-width: 0 0 0 6px;
  color: var(--teste-74);
}
.p-message.p-message-warn .p-message-icon {
  color: var(--teste-74);
}
.p-message.p-message-warn .p-message-close {
  color: var(--teste-74);
}
.p-message.p-message-error {
  background: var(--teste-75);
  border: solid var(--teste-76);
  border-width: 0 0 0 6px;
  color: var(--teste-77);
}
.p-message.p-message-error .p-message-icon {
  color: var(--teste-77);
}
.p-message.p-message-error .p-message-close {
  color: var(--teste-77);
}
.p-message .p-message-text {
  font-size: 1rem;
  font-weight: 500;
}
.p-message .p-message-icon {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.p-toast {
  opacity: 0.9;
}
.p-toast .p-toast-message {
  margin: 0 0 1rem 0;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  border-radius: 3px;
}
.p-toast .p-toast-message .p-toast-message-content {
  padding: 1rem;
  border-width: 0 0 0 6px;
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
  margin: 0 0 0 1rem;
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
  font-size: 2rem;
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
  font-weight: 700;
}
.p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
  margin: 0.5rem 0 0 0;
}
.p-toast .p-toast-message .p-toast-icon-close {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: transparent;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-toast .p-toast-message .p-toast-icon-close:hover {
  background: var(--teste-78);
}
.p-toast .p-toast-message .p-toast-icon-close:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}
.p-toast .p-toast-message.p-toast-message-info {
  background: var(--teste-66);
  border: solid var(--teste-67);
  border-width: 0 0 0 6px;
  color: var(--teste-68);
}
.p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
  color: var(--teste-68);
}
.p-toast .p-toast-message.p-toast-message-success {
  background: var(--teste-69);
  border: solid var(--teste-70);
  border-width: 0 0 0 6px;
  color: var(--teste-71);
}
.p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
  color: var(--teste-71);
}
.p-toast .p-toast-message.p-toast-message-warn {
  background: var(--teste-72);
  border: solid var(--teste-73);
  border-width: 0 0 0 6px;
  color: var(--teste-74);
}
.p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
  color: var(--teste-74);
}
.p-toast .p-toast-message.p-toast-message-error {
  background: var(--teste-75);
  border: solid var(--teste-76);
  border-width: 0 0 0 6px;
  color: var(--teste-77);
}
.p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
  color: var(--teste-77);
}

.p-galleria .p-galleria-close {
  margin: 0.5rem;
  background: transparent;
  color: var(--teste-18);
  width: 4rem;
  height: 4rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 50%;
}
.p-galleria .p-galleria-close .p-galleria-close-icon {
  font-size: 2rem;
}
.p-galleria .p-galleria-close:hover {
  background: var(--teste-64);
  color: var(--teste-18);
}
.p-galleria .p-galleria-item-nav {
  background: transparent;
  color: var(--teste-18);
  width: 4rem;
  height: 4rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 3px;
  margin: 0 0.5rem;
}
.p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
  font-size: 2rem;
}
.p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
  background: var(--teste-64);
  color: var(--teste-18);
}
.p-galleria .p-galleria-caption {
  background: var(--teste-79);
  color: var(--teste-18);
  padding: 1rem;
}
.p-galleria .p-galleria-indicators {
  padding: 1rem;
}
.p-galleria .p-galleria-indicators .p-galleria-indicator button {
  background-color: var(--teste-17);
  width: 1rem;
  height: 1rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 50%;
}
.p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
  background: var(--teste-16);
}
.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-galleria.p-galleria-indicators-bottom .p-galleria-indicator, .p-galleria.p-galleria-indicators-top .p-galleria-indicator {
  margin-right: 0.5rem;
}
.p-galleria.p-galleria-indicators-left .p-galleria-indicator, .p-galleria.p-galleria-indicators-right .p-galleria-indicator {
  margin-bottom: 0.5rem;
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
  background: var(--teste-79);
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {
  background: var(--teste-80);
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {
  background: var(--teste-88);
}
.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
  background: var(--teste-11);
  color: var(--teste-6);
}
.p-galleria .p-galleria-thumbnail-container {
  background: var(--teste-81);
  padding: 1rem 0.25rem;
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
  margin: 0.5rem;
  background-color: transparent;
  color: var(--teste-18);
  width: 2rem;
  height: 2rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  border-radius: 50%;
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
  background: var(--teste-64);
  color: var(--teste-18);
}
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-galleria-mask {
  --maskbg: var(--teste-81);
}

.p-image-mask {
  --maskbg: var(--teste-81);
}

.p-image-preview-indicator {
  background-color: transparent;
  color: var(--teste-18);
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}

.p-image-preview-container:hover > .p-image-preview-indicator {
  background-color: var(--teste-79);
}

.p-image-toolbar {
  padding: 1rem;
}

.p-image-action.p-link {
  color: var(--teste-18);
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  margin-right: 0.5rem;
}
.p-image-action.p-link:last-child {
  margin-right: 0;
}
.p-image-action.p-link:hover {
  color: var(--teste-18);
  background-color: var(--teste-64);
}
.p-image-action.p-link i {
  font-size: 1.5rem;
}

.p-avatar {
  background-color: var(--teste-16);
  border-radius: 3px;
}
.p-avatar.p-avatar-lg {
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
}
.p-avatar.p-avatar-lg .p-avatar-icon {
  font-size: 1.5rem;
}
.p-avatar.p-avatar-xl {
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
}
.p-avatar.p-avatar-xl .p-avatar-icon {
  font-size: 2rem;
}

.p-avatar-group .p-avatar {
  border: 2px solid var(--teste-10);
}

.p-badge {
  background: var(--teste-5);
  color: var(--teste-10);
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
}
.p-badge.p-badge-secondary {
  background-color: var(--teste-7);
  color: var(--teste-10);
}
.p-badge.p-badge-success {
  background-color: var(--teste-8);
  color: var(--teste-10);
}
.p-badge.p-badge-info {
  background-color: var(--teste-9);
  color: var(--teste-10);
}
.p-badge.p-badge-warning {
  background-color: var(--teste-24);
  color: var(--teste-41);
}
.p-badge.p-badge-danger {
  background-color: var(--teste-23);
  color: var(--teste-10);
}
.p-badge.p-badge-lg {
  font-size: 1.125rem;
  min-width: 2.25rem;
  height: 2.25rem;
  line-height: 2.25rem;
}
.p-badge.p-badge-xl {
  font-size: 1.5rem;
  min-width: 3rem;
  height: 3rem;
  line-height: 3rem;
}

.p-chip {
  background-color: var(--teste-16);
  color: var(--teste-6);
  border-radius: 16px;
  padding: 0 0.5rem;
}
.p-chip .p-chip-text {
  line-height: 1.5;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.p-chip .p-chip-icon {
  margin-right: 0.5rem;
}
.p-chip img {
  width: 2rem;
  height: 2rem;
  margin-left: -0.5rem;
  margin-right: 0.5rem;
}
.p-chip .p-chip-remove-icon {
  margin-left: 0.5rem;
  border-radius: 3px;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-chip .p-chip-remove-icon:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-inplace .p-inplace-display {
  padding: 0.5rem 0.5rem;
  border-radius: 3px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.p-inplace .p-inplace-display:not(.p-disabled):hover {
  background: var(--teste-17);
  color: var(--teste-6);
}
.p-inplace .p-inplace-display:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: 0 0 0 0.2rem var(--teste-4);
}

.p-progressbar {
  border: 0 none;
  height: 1.5rem;
  background: var(--teste-16);
  border-radius: 3px;
}
.p-progressbar .p-progressbar-value {
  border: 0 none;
  margin: 0;
  background: var(--teste-5);
}
.p-progressbar .p-progressbar-label {
  color: var(--teste-10);
  line-height: 1.5rem;
}

.p-scrolltop {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 2px 4px -1px var(--teste-12), 0 4px 5px 0 var(--teste-14), 0 1px 10px 0 var(--teste-15);
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.p-scrolltop.p-link {
  background: var(--teste-82);
}
.p-scrolltop.p-link:hover {
  background: var(--teste-83);
}
.p-scrolltop .p-scrolltop-icon {
  font-size: 1.5rem;
  color: var(--teste-18);
}

.p-skeleton {
  background-color: var(--teste-17);
  border-radius: 3px;
}
.p-skeleton:after {
  background: linear-gradient(90deg, var(--teste-63), var(--teste-80), var(--teste-63));
}

.p-tag {
  background: var(--teste-5);
  color: var(--teste-10);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.4rem;
  border-radius: 3px;
}
.p-tag.p-tag-success {
  background-color: var(--teste-8);
  color: var(--teste-10);
}
.p-tag.p-tag-info {
  background-color: var(--teste-9);
  color: var(--teste-10);
}
.p-tag.p-tag-warning {
  background-color: var(--teste-24);
  color: var(--teste-41);
}
.p-tag.p-tag-danger {
  background-color: var(--teste-23);
  color: var(--teste-10);
}
.p-tag .p-tag-icon {
  margin-right: 0.25rem;
  font-size: 0.75rem;
}

.p-terminal {
  background: var(--teste-10);
  color: var(--teste-6);
  border: 1px solid var(--teste-16);
  padding: 1rem;
}
.p-terminal .p-terminal-input {
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/* Customizations to the designer theme should be defined here */
.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
  background-color: var(--teste-5);
}

.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
  background-color: var(--teste-5);
}

.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
  box-shadow: inset 0 2px 0 0 var(--teste-5);
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
  box-shadow: inset 0 -2px 0 0 var(--teste-5);
}




</style>
