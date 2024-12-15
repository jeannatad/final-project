<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar>
        <ion-title class="header-title">Jacob West ▾</ion-title>
        <ion-buttons slot="end">
          <ion-icon name="ellipsis-horizontal" class="menu-icon"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!-- Profile Content -->
    <ion-content :fullscreen="true">
      <div class="profile-container">
        <!-- User Info -->
        <div class="user-info">
          <img
            src="https://via.placeholder.com/80" 
            alt="Profile Picture"
            class="profile-pic"
          />
          <p class="username">@jacob_w</p>
          <div class="stats">
            <div>
              <p>14</p>
              <span>Following</span>
            </div>
            <div>
              <p>38</p>
              <span>Followers</span>
            </div>
            <div>
              <p>91</p>
              <span>Likes</span>
            </div>
          </div>
          <ion-button fill="outline" size="small" class="edit-btn">
            Edit profile
          </ion-button>
        </div>

        <!-- Bio -->
        <p class="bio">Tap to add bio</p>

        <!-- Posts Grid -->
        <div class="posts-grid">
          <div v-for="(image, index) in posts" :key="index" class="post-item">
            <img :src="image" alt="Post Image" />
          </div>
          <div class="create-post">
            <p>Tap to create a new video</p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon, IonButton } from '@ionic/vue';

const posts = [
  'https://via.placeholder.com/150/0000FF',
  'https://via.placeholder.com/150/555555',
  'https://via.placeholder.com/150/00FF00',
  'https://via.placeholder.com/150/AAAAAA',
  'https://via.placeholder.com/150/FF00FF',
];
</script>

<style scoped>
.header-title {
  text-align: center;
  font-weight: bold;
}

.menu-icon {
  font-size: 22px;
  margin-right: 10px;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info {
  text-align: center;
  margin-top: 20px;
}

.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.username {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.stats {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.stats div {
  margin: 0 15px;
  text-align: center;
}

.stats p {
  font-weight: bold;
  margin: 0;
}

.stats span {
  font-size: 12px;
  color: gray;
}

.edit-btn {
  margin-top: 10px;
}

.bio {
  font-size: 14px;
  color: gray;
  margin: 10px 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  width: 100%;
  margin-top: 20px;
}

.post-item img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.create-post {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  height: 120px;
  color: gray;
  text-align: center;
}
</style>
