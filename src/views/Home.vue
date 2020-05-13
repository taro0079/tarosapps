<template>
<v-app>
  <v-content>
    <v-container class="text-left">
      <!-- V-Card section -->
      <v-row d-flex>
        <v-col>
          <v-card class="pa-2" tile>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline"> application </div>
                <v-list-item-title>Wire fab App</v-list-item-title>
                <v-list-item-subtitle> Calculate application for wire fabrication. 
                  This app obtain the length of wire after fabrication from precursor diameter and length, 
                  and the diameter after fabrication.</v-list-item-subtitle>
                  <v-card-actions>
                    <v-btn 
                      text color="deep-purple accent-4"
                      to="/Wirefab"
                    > 
                      Start </v-btn>
                  </v-card-actions>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>


    </v-container>
  </v-content>
</v-app>
</template>

<script>
// @ is an alias to /src
export default {
}
</script>
