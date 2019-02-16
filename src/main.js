// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from "vuetify";
import DefaultLayout from "~/layouts/Default.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "vuetify/dist/vuetify.min.css";

export default function(Vue, { router, head, isClient }) {
  Vue.component("font-awesome-icon", FontAwesomeIcon); // Register component globally
  library.add(fas); // Include needed icons.

  Vue.use(Vuetify, {
    iconfont: 'faSvg',
  });
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
