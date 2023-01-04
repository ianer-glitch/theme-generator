<script lang="ts">
import { defineComponent } from "vue";
import ColorPickerInput from "@/components/pickers/components/ColorPickerInput.vue"

const name = "Pickers";
export default defineComponent({
  name,

  components: {
    ColorPickerInput:ColorPickerInput as any,
  },
  
 
  
  props: {},

  mounted() {

  },

  methods: {
  
  },

  updated() {
    
  },

  data() {
    return { 
      isCollapsedGeneral:false,
      generalConfig:{
        generalBackgroundColor                       : '#ffffff',
        generalBoxShadowColor                        : '#a6d5fa',
        generalInputBorderColor                      : '#ced4da',
        generalInputItensColor                       : '#6f7d6c',
        generalTextInInputColor                      : '#495057',
      },
      isCollapsedPButton:true,
      pButton:{

        pButtonBackgroundColorAndGeneralInputColor   : '#2196F3',
        pButtonHoverBackgroundColor                  : '#0d89ec',
        pButtonActiveAndFocusBackgroundColor         : '#0b7ad1',
      },
      isCollapsedPbuttonSecondary:true,
      pButtonSecondary:{
        pButtonSecondaryActiveAndFocusBackgroundColor: '#4d646f',
        pButtonSecondaryBackgroundColor              : '#607D8B',
        pButtonSecondaryHoverBackgroundColor         : '#56717d',
      },
      isCollapsedPbuttonSucess:true,
      pButtonSucess:{
        pButtonSucessBackgroundColor                 : '#689F38',
        pButtonSucessHoverBackgroundColor            : '#5e8f32',
        pButtonSucessActiveAndFocusBackgroundColor   : '#537f2d',
        pButtonSucessActiveAndFocusBorderColor    : '#c2e0a8',
      },
      isCollapsedPbuttonInfo:true,
      pButtonInfo:{
        pButtonInfoActiveAndFocusBackgroundColor     : '#026da7',
        pButtonInfoBackgroundColor                   : '#0288D1',
        pButtonInfoHoverBackgroundColor              : '#027abc',
      },
      isCollapsedPbuttonWarning:true,
      pButtonWarnig:{
        pButtonWarningActiveAndFocusBackgroundColor  : '#e8a704',
        pButtonWarningActiveAndFocusBorderColor      : '#fde6ab',
        pButtonWarningBackgroundColor                : '#FBC02D',
        pButtonWarningHoverBackgroundColor           : '#fab710',
        pButtonWarningTextColor                      : '#212529',
      },
      isCollapsedPbuttonHelp:true,
      pButtonHelp:{
        pButtonHelpActiveAndFocusBackgroundColor     : '#7d1f8d',
        pButtonHelpActiveAndFocusBorderColor         : '#df9eea',
        pButtonHelpBackgroundColor                   : '#9C27B0',
        pButtonHelpHoverBackgroundColor              : '#8c239e',
      },
      isCollapsedPbuttonText:true,
      pButtonText:{
        pButtonTextActiveAndFocusBackgroundColor     : 'rgba(33, 150, 243, 0.16)',
        pButtonTextHoverBackgroundColor              : 'rgba(33, 150, 243, 0.04)',
      },
      isCollapsedPbuttonDanger:true,
      pButtonDanger:{
        pButtonDangerActiveAndFocusBackgroundColor   : '#aa2424',
        pButtonDangerActiveAndFocusBorderColor       : '#edacac',
        pButtonDangerBackgroundColor                 : '#D32F2F',
        pButtonDangerHoverBackgroundColor            : '#c02929',
      },
      isCollapsedPbuttonOutline:true,
      pButtonOutline:{
        pButtonOutlinedActiveAndFocusBackgroundColor : 'rgba(104, 159, 56, 0.16)',
        pButtonOutlinedHoverBackgroundcolor          : 'rgba(104, 159, 56, 0.04)',
        pButtonRaisedBoxshadowDown                   : 'rgba(0, 0, 0, 0.14)',
        pButtonRaisedBoxshadowUp                     : 'rgba(0, 0, 0, 0.12)',
      },
      isCollapsedOther:true,
      other:{
        inputDetailsAndGridLinesColor                : '#e9ecef',
        dataTableHeaderColor                         : '#f8f9fa',
        pDividerColor                                : '#dee2e6',
      },
      
    };
  },

  computed: {},
});
</script>

<template>
  <main class="pickers">
    <PPanel  header="general" v-model:collapsed="isCollapsedGeneral" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in generalConfig"
      :defaultColor="color"
      @change="$emit(colorName,$event)"
      @mounted="$emit(colorName,$event)"
      :label="colorName"
    />
      </div>
    </PPanel>
    <PPanel  header="pButton" v-model:collapsed="isCollapsedPButton" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in pButton"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
        />
      </div>
    </PPanel>
    <PPanel  header="pButtonSecondary" v-model:collapsed="isCollapsedPbuttonSecondary" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in pButtonSecondary"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
        />
      </div>
    </PPanel>
    <PPanel  header="pButtonSucess" v-model:collapsed="isCollapsedPbuttonSucess" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in pButtonSucess"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
        />
      </div>
    </PPanel>
    <PPanel  header="pButtonInfo" v-model:collapsed="isCollapsedPbuttonInfo" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in pButtonInfo"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
        />
      </div>
    </PPanel>
    <PPanel  header="pButtonWarning" v-model:collapsed="isCollapsedPbuttonWarning" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in pButtonWarnig"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
       />
      </div>
    </PPanel>
    <PPanel  header="pButtonHelp" v-model:collapsed="isCollapsedPbuttonHelp" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in pButtonHelp"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
        />
      </div>
    </PPanel>
    <PPanel  header="pButtonHelp" v-model:collapsed="isCollapsedPbuttonText" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in pButtonText"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
      />
      </div>
    </PPanel> 
    <PPanel  header="pButtonDanger" v-model:collapsed="isCollapsedPbuttonDanger" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in pButtonDanger"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
        />
      </div>
    </PPanel>
    <PPanel  header="pButtonOutline" v-model:collapsed="isCollapsedPbuttonOutline" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in  pButtonOutline"
          :defaultColor="color"
          @change="$emit(colorName,$event)"
          @mounted="$emit(colorName,$event)"
          :label="colorName"
        />
      </div>
    </PPanel>
    <PPanel  header="other" v-model:collapsed="isCollapsedOther" :toggleable="true">
      <div class="panel-content">
        <ColorPickerInput v-for="(color,colorName)  in other"
        :defaultColor="color"
        @change="$emit(colorName,$event)"
        @mounted="$emit(colorName,$event)"
        :label="colorName"
    />
      </div>
    </PPanel>
  </main>
</template>

<style scoped>
.pickers {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 80%;

}

.panel-content{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows : repeat(1fr,auto-fill);
}
</style>
