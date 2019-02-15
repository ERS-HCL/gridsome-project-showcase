<template>
  <v-app>
    <v-toolbar dense>
      <v-toolbar-title class="caption,subheading">
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
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

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
