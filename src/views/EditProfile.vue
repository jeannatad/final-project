<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" class="icon-button">
          <i class="bi bi-arrow-left-short"></i>
        </ion-buttons>
        <ion-title>Edit Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="profile-container">
        <div class="photo-video-section">
          <div class="profile-item">
            <img
              src="https://s3-alpha-sig.figma.com/img/7b51/7fd1/166e1c96bb4d606ab3bc83385540dadb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g97GWbx7Wg89taRLzhBD0g-1OSUclahTpw9rh7sfO2hSkMVy4RQTPgxcqzirt2dRFc4UmX2I4lu4N2hVQiSIiX-8zS~3HK-riSPUK~zjiqohdP89K4Qk2Ohv3aC8pYnfINjkMCwo0XOORKHolax5~pDSebxZNsDspR-8IrKu018biaHGj-e9jo4FkNpyIqf-lmbVUQD2jU8zDhx6Uok4-hvItb-gjxQjefd9DAhbDtEGAxkBbmt9M38DQ42HzIUJ0H~vWO~B-cfTquR-Bk4FBorXu0hnv1MQuNFDn65x7JrDREQir7QP2-1X9xBtB8ogKAUCErKXT-aeJnJNeEpT5Q__"
              alt="Profile Picture"
              class="profile-pic"
            />
            <i class="bi bi-camera icon-overlay"></i>
            <p>Change photo</p>
          </div>
          <div class="profile-item">
            <div class="video-pic">
              <i class="bi bi-camera-video icon-video"></i>
            </div>
            <p>Change video</p>
          </div>
        </div>

        <ion-list class="profile-details">
          <ion-item detail>
            <ion-label>Name</ion-label>
            <ion-text slot="end">Jacob West</ion-text>
          </ion-item>
          <ion-item detail>
            <ion-label>Username</ion-label>
            <ion-text slot="end">jacob_w</ion-text>
          </ion-item>
          <ion-item>
            <p class="username">
              tiktok.com@jacob_w <span> <i class="bi bi-copy"></i></span>
            </p>
          </ion-item>
          <ion-item detail>
            <ion-label>Bio</ion-label>
            <ion-text slot="end">Add a bio to your profile</ion-text>
          </ion-item>
          <ion-item detail>
            <ion-label>Instagram</ion-label>
            <ion-text slot="end">Add Instagram to your profile</ion-text>
          </ion-item>
          <ion-item detail>
            <ion-label>YouTube</ion-label>
            <ion-text slot="end">Add YouTube to your profile</ion-text>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonIcon,
  IonItem,
  IonList,
  IonLabel,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
} from '@ionic/vue';

export default defineComponent({
  name: 'EditProfile',
  components: {
    IonPage,
    IonIcon,
    IonItem,
    IonList,
    IonLabel,
    IonText,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
  },
  methods: {
    goBack() {
      this.$router.push('/tabs/profile');
    },
  },
});
</script>

<style scoped>
.profile-container {
  padding: 16px;
}

.photo-video-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
}

.profile-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-icon {
  font-size: 50px;
  color: #ccc;
}

.profile-details {
  margin-top: 20px;
}

ion-item {
  --min-height: 48px;
  font-size: 14px;
}
.photo-video-section {
  display: flex;
  gap: 20px;
}

.profile-item {
  text-align: center;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  opacity: 50%;
}

.video-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.icon-video {
  font-size: 24px;
  color: #000;
  position: absolute;
}
.icon-overlay {
  font-size: 24px;
  color: #000;
  position: absolute;
  top: 80px;
}
.username {
  position: absolute;
  right: 5%;
}
.icon-button i {
  font-size: 24px;
  color: #333;
  cursor: pointer;
}
</style>
