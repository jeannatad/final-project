<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="header-title">Jacob West ▾</ion-title>
        <ion-buttons slot="end">
          <ion-icon name="ellipsis-horizontal" class="menu-icon"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="profile-container">
        <div class="user-info">
          <img src="https://via.placeholder.com/80" alt="Profile Picture" class="profile-pic" />
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
          <ion-button fill="outline" size="small" @click="navigateToEditProfile">Edit profile</ion-button>
        </div>
        <p class="bio">Tap to add bio</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToEditProfile = () => {
  router.push('/edit-profile');
};
</script>

<style scoped>
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

.bio {
  font-size: 14px;
  color: gray;
  margin: 10px 0;
}
</style>
