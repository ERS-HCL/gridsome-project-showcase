<template>
  <Layout>


    <v-layout
    column
    justify-center
  >
    <v-subheader>Users</v-subheader>

    <v-expansion-panel popout>
      <v-expansion-panel-content
        v-for="(item,index) in $page.allFaker.edges" 
        :key="index"
        hide-actions
      >
        <v-layout
          slot="header"
          align-center
          row
          spacer
        >
          <v-flex xs4 sm2 md1>
            <v-avatar
              slot="activator"
              size="60px"
            >
              <img
               :src="item.node.avatar.src"
                alt="Avatar"
              >
            </v-avatar>
          </v-flex>

          <v-flex
            v-if="item.node.excerpt"
            class="grey--text"
            ellipsis
            hidden-sm-and-down
          >
            &mdash;
            {{ item.node.excerpt }}
          </v-flex>
        </v-layout>

        <v-card>
          <v-divider></v-divider>
          <v-card-text v-text="item.node.content"></v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
  </Layout>
</template>

<page-query>
{
  allFaker(perPage:5){
    edges{
      node{
        author
        email
        avatar
        content
        excerpt
        title
      }
    }
  }
}
</page-query>
<script>
export default {}
</script>
