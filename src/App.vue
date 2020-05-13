<template>
  <v-app>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark >
        <v-toolbar-title> Taro's Apps </v-toolbar-title>
      </v-app-bar>
    </div>
    <router-view/>
  </v-app>
</template>

<script>

export default {

  data: () => ({
    //
  }),
};
</script>
