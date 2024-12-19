<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/profile"></ion-back-button>
        </ion-buttons>
        <ion-title>Edit Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="edit-profile-container">
        <ion-item>
          <ion-label position="floating">Username</ion-label>
          <ion-input v-model="username"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Bio</ion-label>
          <ion-textarea v-model="bio"></ion-textarea>
        </ion-item>

        <ion-button expand="block" @click="saveChanges">Save Changes</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const bio = ref('');

const saveChanges = () => {
  console.log('Saved:', { username: username.value, bio: bio.value });
  router.push('/tabs/profile');
};
</script>

<style scoped>
.edit-profile-container {
  padding: 20px;
}

ion-item {
  margin-bottom: 15px;
}
</style>
