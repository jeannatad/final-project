<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- Header Section -->
      <div class="header">
        <!-- Back Arrow (‹) -->
        <div class="header-icon">&lsaquo;</div>
        <!-- Title -->
        <h3 class="header-title">Direct Message</h3>
        <!-- Plus Icon (+) -->
        <div class="header-icon">+</div>
      </div>

      <!-- Inbox Section -->
      <div class="inbox-container">
        <!-- Paper Plane Icon -->
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
/* Header Section Styling */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
}

.header-title {
  font-size: 1.2rem; /* Font size */
  font-weight: normal;
  color: #333;
  margin: 0;
  text-align: center;
  flex-grow: 1; /* Ensures title takes up available space */
}

.header-icon {
  font-size: 1.8rem; /* Icon size */
  color: #000;
  cursor: pointer;
  padding: 0 8px; /* Space around the icons */
  font-family: Arial, sans-serif; /* Open arrow shape */
}

/* Inbox Section Styling */
.inbox-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px); /* Full height minus header */
  text-align: center;
  padding: 16px;
}

.inbox-icon {
  font-size: 50px; /* Icon size */
  color: #999;
  margin-bottom: 16px;
}

.inbox-title {
  font-size: 1.2rem; /* Standard text size */
  color: #333;
  margin: 0 0 8px 0;
}

.inbox-description {
  font-size: 1rem; /* Standard description text size */
  color: #666;
  margin: 0;
}
</style>
