<template>
  <v-app>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark >
        <v-toolbar-title> Taro's Apps </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text icon depressed to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col>
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
        <v-row>
          <v-col cols="12">
            <v-footer>
          <v-col cols="12" class="text-center">
              {{ new Date().getFullYear() }} - Taro's Apps
          </v-col>
            </v-footer>
            </v-col>
        </v-row>
  </v-app>
</template>

<script>

export default {

  data: () => ({
    drawer: false,
    //
  }),
};
</script>
