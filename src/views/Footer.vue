<template>
  <ion-page>
    <ion-tabs color="black">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar color="bottom" slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon aria-hidden="true" :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="upload" class="upload" href="/tabs/upload">
          <ion-icon aria-hidden="true" :icon="add" />
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/tabs/chat">
          <ion-icon aria-hidden="true" :icon="chatbox" />
          <ion-label>Inbox</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { search, home, add, chatbox, person } from 'ionicons/icons';
</script>

<style scoped>
.upload {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 35px;
  border-radius: 10%;
  background: linear-gradient(to right, #4bcffa, white 70%, #ff3f34);
}
</style>
