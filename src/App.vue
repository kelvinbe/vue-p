<template>
  <v-app :theme="theme">
    <div class="bg-img"></div>
    <v-main>
      <Form />
    </v-main>
  </v-app>
</template>

<script>
import Form from "./components/Form.vue";
import { ref } from "vue";
import {store} from './store.js'
import { useTheme } from 'vuetify'


export default {
  setup() {
  const theme = useTheme() 

    return {
    };
  },
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
.bg-img {
  min-height: 200px;
}


@media screen and (min-device-width: 376px) and (prefers-color-scheme: light) {
  .bg-img {
    background-image: url("./assets/bglightdesk.jpg");
    min-height: 300px;
  }
}

@media screen and (prefers-color-scheme: dark) {
  .bg-img {
    background-image: url("./assets/bgdarkmob.jpg");
  }
}

@media screen and (prefers-color-scheme: light) {
  .bg-img {
    background-image: url("./assets/bglightmob.jpg");
  }
}

@media screen and (min-device-width: 376px) and (prefers-color-scheme: light) {
  .bg-img {
    background-image: url("./assets/bglightdesk.jpg");
    min-height: 300px;
  }
}
@media screen and (min-device-width: 376px) and (prefers-color-scheme: dark) {
  .bg-img {
    background-image: url("./assets/bgdarkdesk.jpg");
    min-height: 300px;
  }
}

/* @media screen and (min-device-width: 376px)
 {
  .bg-img {
    background-image: url('./assets/bglightdesk.jpg');
  }
} */
</style>
