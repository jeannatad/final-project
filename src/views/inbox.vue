<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" class="icon-button">
          <i class="bi bi-arrow-left-short"></i>
        </ion-buttons>
        <ion-title>Direct message</ion-title>
        <ion-buttons slot="end" class="icon-button">
          <i class="bi bi-plus"></i>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="message-container">
      <div class="message-content">
        <ion-icon :icon="send" aria-hidden="true" class="send-logo"></ion-icon>
        <p class="message-title">Message your Friends</p>
        <p class="message-subtitle">Share videos or start a conversation</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonIcon,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
import { bookmark, send } from 'ionicons/icons';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default defineComponent({
  name: 'DirectMessage',
  components: {
    IonPage,
    IonIcon,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
  setup() {
    return {
      bookmark,
      send,
    };
  },
});
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  background-color: #f9f9f9;
  top: 30%;
}

.message-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.send-logo {
  font-size: 100px;
  color: #ccc;
  margin-bottom: 16px;
  transform: rotate(-20deg);
  margin-left: 10%;
}

.message-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0 0 8px;
}

.message-subtitle {
  font-size: 14px;
  color: #777;
  margin: 0;
}

.icon-button i {
  font-size: 24px;
  color: #333;
  cursor: pointer;
}
</style>
