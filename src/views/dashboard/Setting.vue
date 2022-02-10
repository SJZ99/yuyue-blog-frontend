<template>
  <div 
    id="settings-wrapper"
    style="position: fixed; top: 115px; right: -35px;"
  >
    <v-card
      id="settings"
      class="py-2 px-4"
      color="rgba(0, 0, 0, .4)"
      flat
      link
      min-width="100"
      
    >
      <v-icon large></v-icon>
    </v-card>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      activator="#settings"
      bottom
      content-class="v-settings"
      left
      nudge-left="8"
      offset-x
      origin="top right"
      transition="scale-transition"
    >
      <v-card
        class="text-center mb-0"
        width="300"
      >
        <v-card-text class="text-left">
          <v-file-input
            v-model="img"
            counter
            show-size
            label="Image"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an img"
          ></v-file-input>

          <v-divider class="mt-5 mb-3"/>

          The content of article will be saved automatically to the local storage,
          but if you want to push it to the backend server, you need to use the SAVE button.
          If you want to make it become public, using the PUBLISH button
          <v-divider class="mt-3"/>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn 
            @click="emit('save-img', img)"
          >
            SAVE IMG
          </v-btn>
          <v-spacer />

          <v-btn
            @click="emit('save-all', img)"
          >
            SAVE ALL
          </v-btn>
          <v-spacer />

          <v-btn
            @click="emit('publish', img)"
          >
            PUBLISH
          </v-btn>
          <v-spacer />

        </v-card-actions>
        
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  // Mixins
  import Proxyable from 'vuetify/lib/mixins/proxyable'

  export default {
    name: 'Settings',

    mixins: [Proxyable],

    data: () => ({
      img: null,
      tips: false,
      menu: false,
    }),
  }
</script>

<style lang="scss" scope>
#setting {
  height: auto;
  width: auto;
}

#setting:hover {
  filter: brightness(150%)
}

</style>
