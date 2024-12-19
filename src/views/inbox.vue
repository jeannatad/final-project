<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header">
        <div class="header-icon">&lsaquo;</div>
        <h3 class="header-title">Direct message</h3>
        <div class="header-icon">+</div>
      </div>
      <div class="inbox-container">
        <ion-icon name="paper-plane-outline" class="inbox-icon"></ion-icon>
        <p class="inbox-title">Message your friends</p>
        <p class="inbox-description">Share videos or start a conversation</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
}

.header-title {
  font-size: 1.2rem;
  font-weight: normal;
  color: #333;
  margin: 0;
  text-align: center;
  flex-grow: 1;
}
.header-icon {
  font-size: 1.8rem; 
  color: #000;
  cursor: pointer;
  padding: 0 8px; 
  font-family: Arial, sans-serif;
}
.inbox-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px); 
  text-align: center;
  padding: 16px;
}
.inbox-icon {
  font-size: 50px; 
  color: #999;
  margin-bottom: 16px;
}
.inbox-title {
  font-size: 1.2rem; 
  color: #333;
  margin: 0 0 8px 0;
}
.inbox-description {
  font-size: 1rem; 
  color: #666;
  margin: 0;
}
</style>
