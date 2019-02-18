<template>
  <!--   <v-app>
    <v-toolbar>
      <v-toolbar-title class="title text-uppercase text-black">
        <g-link :to="{ name: 'home' }">{{ $static.metaData.siteName }}</g-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn flat :to="{ name: 'home' }" exact>Home</v-btn>
        <v-btn flat :to="{ name: 'about' }" exact>About</v-btn>
        <v-btn flat to="/blog/1" exact>Blog post 1</v-btn>
        <v-btn flat to="/blog/first-showcase" exact>Blog post md</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <slot/>
    </v-container>
  </v-app>-->
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile  :to="{ name: 'home' }" exact>
          <v-list-tile-action>
            <font-awesome-icon icon="home" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{ name: 'about' }" exact>
          <v-list-tile-action>
            <font-awesome-icon icon="users" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1">About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey darken-4" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="title text-uppercase text-black">{{ $static.metaData.siteName }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
    <v-container>
      <slot/>
    </v-container>
    </v-content>
    <v-footer color="blue-grey darken-4" app>
      <span class="white--text body-1 text-thin pa-5">ERS-HCL &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
