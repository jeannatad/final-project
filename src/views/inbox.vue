<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="activity-container">
        <h3 class="activity-title">
          All Activity
          <span class="triangle"></span>
        </h3>
        <div class="new-triangle"></div>
      </div>
    </ion-content>
    <ion-content>
      <div class="inbox-container">
        <ion-icon name="chatbubble-ellipses-outline" class="inbox-icon"></ion-icon>
        <p class="inbox-title">Notifications aren't available</p>
        <p class="inbox-description">
          Notifications about your account will appear here
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
</script>

<style scoped>
.activity-container {
  padding: 16px;
  text-align: center;
  position: relative; 
}

.activity-title {
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 4px solid transparent; 
  border-right: 4px solid transparent;
  border-top: 4px solid black;
  margin-left: 6px; 
}
.new-triangle {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 20px solid black;
  position: absolute;
  top: 16px; 
  right: 10px;
  transform: rotate(45deg);

  background: linear-gradient(to bottom, transparent 50%, white 50%);
  background-size: 100% 200%;
  background-position: top;
}
.inbox-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  height: 10vh; 
  text-align: center;
}
.inbox-icon {
  font-size: 50px;
  color: #999;
}
.inbox-title {
  font-size: 1.2rem;
  margin-top: 10px; 
  color: #333; 
}
.inbox-description {
  font-size: 1rem;
  margin-top: 5px;
  color: #666; 
}
</style>
