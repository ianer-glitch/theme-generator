import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";




import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import Calendar from "primevue/calendar"; //calendário - datas
import Checkbox from "primevue/checkbox";
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; //optional for column grouping
import DataTable from 'primevue/datatable';
import Dialog from "primevue/dialog";
import FileUpload from "primevue/fileupload";
import Galleria from "primevue/galleria";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import MultiSelect from "primevue/multiselect";
import PDropdown from "primevue/dropdown";
import RadioButton from "primevue/radiobutton";
import Row from 'primevue/row';
import Sidebar from "primevue/sidebar";
import Steps from "primevue/steps";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Tree from "primevue/tree";
import Divider from 'primevue/divider';

/* Imports CSS */
import "primeicons/primeicons.css";
// import "@/assets/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.component("PAccordion", Accordion);
app.component("PAccordionTab", AccordionTab);
app.component("PAutoComplete", AutoComplete);
app.component("PButton", Button);
app.component("PCalendar", Calendar);
app.component("PCheckBox", Checkbox);
app.component("PColorPicker", ColorPicker );
app.component("PColumn", Column);
app.component("PColumnGroup", ColumnGroup);
app.component("PDataTable", DataTable);
app.component("PDialog", Dialog);
app.component("PDropDown", PDropdown);
app.component("PFileUpload", FileUpload);
app.component("PGalleria", Galleria);
app.component("PInputMask", InputMask);
app.component("PInputNumber", InputNumber);
app.component("PInputText", InputText);
app.component("PRadioButton", RadioButton);
app.component("PRow", Row);
app.component("PSideBar", Sidebar);
app.component("PSteps", Steps);
app.component("PTextArea", Textarea);
app.component("PToast", Toast);
app.component("PTree", Tree);
app.component("VMultiSelect", MultiSelect);
app.component("PDivider", Divider);

app.mount("#app");
