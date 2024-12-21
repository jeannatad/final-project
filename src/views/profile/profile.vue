<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <i class="bi bi-person-plus"></i>
        </ion-buttons>
        <ion-title class="header-title"
          >Jacob West <span><i class="bi bi-caret-down-fill"></i></span
        ></ion-title>
        <ion-buttons slot="end">
          <i class="bi bi-three-dots-vertical"></i>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="profile-container">
        <div class="user-info">
          <img
            src="https://s3-alpha-sig.figma.com/img/7b51/7fd1/166e1c96bb4d606ab3bc83385540dadb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g97GWbx7Wg89taRLzhBD0g-1OSUclahTpw9rh7sfO2hSkMVy4RQTPgxcqzirt2dRFc4UmX2I4lu4N2hVQiSIiX-8zS~3HK-riSPUK~zjiqohdP89K4Qk2Ohv3aC8pYnfINjkMCwo0XOORKHolax5~pDSebxZNsDspR-8IrKu018biaHGj-e9jo4FkNpyIqf-lmbVUQD2jU8zDhx6Uok4-hvItb-gjxQjefd9DAhbDtEGAxkBbmt9M38DQ42HzIUJ0H~vWO~B-cfTquR-Bk4FBorXu0hnv1MQuNFDn65x7JrDREQir7QP2-1X9xBtB8ogKAUCErKXT-aeJnJNeEpT5Q__"
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
          <div class="button-container">
            <button class="edit-profile" @click="EditProfile()">
              Edit Profile
            </button>
            <ion-icon
              :icon="bookmark"
              aria-hidden="true"
              class="bookmark"
            ></ion-icon>
          </div>
        </div>
        <p class="bio">Tap to add bio</p>
        <div class="tabs">
          <ion-icon name="grid-outline" class="active-tab"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div class="content-grid">
          <img
            src="https://s3-alpha-sig.figma.com/img/37d2/73a2/85c10061a2e525e6f625d7b107b9748b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuJgXbpYDDah-iR-fjAg4gYXtyf4~7J4pM-Fh7GuN9r1wq0bvTFl3eTS24hcimG~1WQ-Z~3ylp7~Q~PGVjgbwMQs0Md8WrygLOqEH3BRPyLwKhJsMwaWj0vGPHEtPSkCBRkstrfZhRqihA67-HRB5w8ljRVN868dcjpXj5fJJZeGqu7j49Kkt0LEZ65GyeaPi8ux2DkHhBA2YffB578xH1uTApCLfdsdpvSPgAnMrguEvm9RLoeJxib0lRfIyFfCe4ogXTJGcpvVRYZS0oqfyRWtk3fwtFk83JS7-kMwdAR0lauC1Jpjw2KLRDBh739Q77DsqUyLEPtSLTtqRPNPKQ__"
            alt="post"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/a026/a8f0/5fa85ac3918a90d73721d879ff50bc89?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdPt~FAGzHb53xjXVMfaVS2hE5yEoycqL~FSqmrjwT-zZrxttYZtDxPH-VQ1H9ixUtKiou6J1MiuQ3XjAyNbBQAHw3HthGXwVjIXzIGn0VkvVhYK~nFVX9tn~e7NvsqXO86A-3a4nsRMaAXkeI0Je2L0EgRit92QD69qcwkcgPdu3B0ERXABJsERG4xUNFSWULSuCKuxM3CS0X4AfATxJ6YH8IBC8ZNGaYNjnFeFwCgVJqyzsqLaGpfz4GpCCMI-NITeUAIpZDBCgxCDXuoRzMO8k~rrG2iB81iScU9Q1~exz27B~blIBha3lRKZ-OyLYWY85eXC8VfLFBpMgPWs3g__"
            alt="post"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/4fc4/98c5/ff8dbc0125e613f1df0ddc449c42619f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peIr5fd~Q6OvaMLD23HbinsXGY1r2IjqdTVs4Vsz2fdFqxAJHQacsxkgAUOCBqAbKL9QDFPo4DdfBGoc5g0ST5lJwnjoX-Nu6WPXQcDhYv7UyymOgj3Evh4YqCUVM5Pev4NzpO2cgdXh1hGWReJmNxaa-YIvtuxc3la3CD3n1UGczyYtxuCaw4XD3SQ0LnhMYPgb~31j3aJBj3eBNZ82GftA-FyxZvjeqqv51sVXjNFMVzmPlWy8b8WjS4g7reyP3HXRNFalSB9xZQpO~RY0ahiNoE-0WPSJSceLZLYtBPkDJ4w7-T9kSZ9vvhzC~JJ7sEdCsN0B1q8bMItdpfQMTw__"
            alt="post"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/5c41/0413/86fdd85b3e6333521eb254df5e4cc99d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZxByGAh~X7AToT-XSBqEjFAPaIU6UAhYakWSmZd3OWZxr1mDemUFVHq0ZrDGjSELJttlpcJ0wDKW~-KARS4ZRmk7Cw149Q~f-om1-XNEEYZjoMMr8Qdl92IafzNmvnO66D0DsRTx69P4dG7ldUEdH0uYbWoiEJJiejB5~Zesbr3M~JkduovEesUn9KI8xOf8otPqrgbH8LXv~NFiaMiDM~so5vVf-Ot6z7HWb0rmlQF2nu5pXwWw9YCniBwfKxS4ZxIY73RxoxLRsNDiu8fLTJ0ESIHfs5aWZYxT~N7C98KEv1Ho4mtVXYQbdGWIHWVdQC7x1nY3hvXaV-edYjHqhw__"
            alt="post"
          />
        </div>
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
import { bookmark } from 'ionicons/icons';

import 'bootstrap-icons/font/bootstrap-icons.css';

export default defineComponent({
  name: 'profile',
  components: {
    IonPage,
    IonIcon,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
  methods: {
    async EditProfile() {
      this.$router.push('/tabs/EditProfile');
    },
  },
  setup() {
    return {
      bookmark,
    };
  },
});
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.user-info {
  text-align: center;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.username {
  font-weight: bold;
  font-size: 18px;
}

.stats {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.stats div {
  margin: 0 20px;
  text-align: center;
}

.bio {
  font-size: 14px;
  color: gray;
  margin: 10px 0;
}

.edit-profile,
.bookmark {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  margin: 0 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100;
}

.edit-profile:hover,
.bookmark:hover {
  background-color: #f0f0f0;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.tabs ion-icon {
  font-size: 24px;
  margin: 0 15px;
  cursor: pointer;
}

.tabs .active-tab {
  color: black;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: 10px 0;
}

.content-grid img {
  width: 100%;
  height: 100%;
}
</style>
