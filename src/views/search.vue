<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" class="icon-button">
          <i class="bi bi-arrow-left-short"></i>
        </ion-buttons>
        <ion-title>Find Friends</ion-title>
        <ion-buttons slot="end" class="icon-button">
          <i class="bi bi-qr-code-scan"></i>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="notification-container">
      <ion-searchbar></ion-searchbar>

      <div class="list-container">
        <div class="list-item">
          <div class="icon-container" style="background-color: #ff6f61">
            <i class="bi bi-person-fill-add"></i>
          </div>
          <div class="text-container">
            <p class="title">Invite Friends</p>
          </div>
          <i class="bi bi-chevron-right chevron"></i>
        </div>

        <div class="list-item">
          <div class="icon-container" style="background-color: #4caf50">
            <i class="bi bi-telephone"></i>
          </div>
          <div class="text-container">
            <p class="title">Find Contacts</p>
          </div>
          <i class="bi bi-chevron-right chevron"></i>
        </div>

        <div class="list-item">
          <div class="icon-container" style="background-color: #3b5998">
            <i class="bi bi-facebook"></i>
          </div>
          <div class="text-container">
            <p class="title">Find Facebook Friends</p>
          </div>
          <i class="bi bi-chevron-right chevron"></i>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
} from '@ionic/vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default defineComponent({
  name: 'FindFriends',
  components: {
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
  },
});
</script>

<style scoped>
.notification-container {
  padding: 16px;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
}

.list-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.list-item:hover {
  transform: translateY(-2px);
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  color: #fff;
  margin-right: 16px;
}

.text-container {
  flex: 1;
}

.title {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.chevron {
  font-size: 20px;
  color: #888;
}
</style>
