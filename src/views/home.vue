<template>
  <ion-page>
    <ion-content class="content">
      <div class="title">
        <p>
          <a :button="true" @click="following()" class="link">Following | </a>
          <a :button="true" @click="foryou()" class="link"> For You</a>
        </p>
        <div class="interaction">
          <div class="search">
            <ion-icon :icon="search" aria-hidden="true"></ion-icon>
          </div>
        </div>
      </div>
      <img
        class="background-image"
        src="https://s3-alpha-sig.figma.com/img/b998/f746/c5b260c4c489bba299c17030dee13bb7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqQuvmvQJ~u-aRtKRrPayqsL3rJ2GC7V8-7jEXHQjmHLi2HQJuKQoZLTCKB4YIpoWtZ8TFoGCDZT4dQai-qjlf2CEaFUoRehTjt-MZ1PJpM2n7q0EGK1nro0AJVVJsCpnDEbMQqe-hDim5BI~ehsoqzFTEHBihXKvsDe2yjseoPuHBSYQHC4S31hVCgPrG8ylx5DH~Ww7bKTYL5y3B~qKcQSuMGwISPlyYDSmzRBk2zmy-EXy7QwmxzEICnWg7tBDiYexUh1oj7hN05TdIeSwfkmFTWBfTFi84g0fvmZObJNpnB9MRvhBbDQ~hoGnioT-K6agTBYr227AHqcJrpP5w__"
        alt="Background"
      />

      <div class="image">
        <img
          src="https://s3-alpha-sig.figma.com/img/d4c1/7ff9/18583bf15a6bdc083bcee64acc58ed55?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FPmRJjmrLYGKMWbFE5jLz~-gblEDm6XaMwT55w2LIXwY51XrRMYjMShVyrWp7z3fm5FMLkMmm5toAu3JnrguFs6srCHmAP97hUoAka64z7qTESBhE9jKKyt7ECA9msJO4vGKRVlYUBk3BL7iDoKGZ2wdvbTT1Z2dsFUbDa3u61cX7~l9fZai2DdFQUNUMkzVOcElgWWzeJAckfr6Er7LnbDr1EsH2eD2l-xO6Y9vuOxvshPzinZ5QEgFVNJwvF4Kr35ptYVIHuqqleVF9gxSa6rJqruSvBUS2Hl2bUAljGLM~Ym97pZtegJrTSJFY6b8VAr2t1j~K2j-Ujx5zND3tA__"
          alt="Profile"
        />
      </div>

      <div class="interaction">
        <div class="heart">
          <ion-icon :icon="heart" aria-hidden="true"></ion-icon>
          <h6 class="text-button">4445</h6>
        </div>
        <div class="message">
          <ion-icon :icon="chatbubble" aria-hidden="true"></ion-icon>
          <h6 class="text-button">64</h6>
        </div>
        <div class="share">
          <ion-icon :icon="share" aria-hidden="true"></ion-icon>
          <h6 class="text-button">Share</h6>
        </div>
      </div>
      <div class="disc">
        <img
          src="https://s3-alpha-sig.figma.com/img/a466/5194/f993eb307d41084b01c3f5be7f691533?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VtjTHfOcoWs7e7s5fTLY-E7dWCKHQ-RDuMFXRnKmaeGKwIPihkdFQuBg6vsQk2Biq6xht8donSBuLJLEPZ2LUkJAskdhtmuCrDGtuAXuYu7DWhlZjAfiD-CVxmyuT2VF5OKMJpW8Lv0tUfjDEyYu9JhcgIcEd1~2YCdfVTeWFt58f3BL2A-T011tXJjdtnaWDbh6BXto26d9vpJNf4JuhjRaKBZLTbjBS2LxOP~sqYeADC~ZIE6jCtQAdsnOY1E~c02YdQ4tgM65OwzmIhG3A-Zt8AZhLww1ktbyWzNZ6uTbZPO6UCdXyRrHU4AxIrfISmIpFh2~OYVr52~mFZZYeQ__"
          alt=""
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonIcon, IonContent } from '@ionic/vue';
import { heart, chatbubble, share, search } from 'ionicons/icons';

export default defineComponent({
  name: 'following',
  components: {
    IonPage,
    IonIcon,
    IonContent,
  },
  methods: {
    async following() {
      this.$router.push('/tabs/home');
    },
    async foryou() {
      this.$router.push('/tabs/foryou');
    },
  },
  setup() {
    return {
      heart,
      chatbubble,
      share,
      search,
    };
  },
});
</script>

<style scoped>
.content {
  position: relative;
  background: #000;
  color: white;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
}

.title p {
  position: relative;
  text-align: center;
  margin-top: 50px;
  color: white;
  font-size: 18px;
  z-index: 2;
}

.text {
  font-weight: bold;
  color: white;
}

.image img {
  position: absolute;
  top: 35%;
  right: 5%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
}

.disc img {
  position: absolute;
  top: 89%;
  right: 7%;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid white;
  animation: rotateImage 5s linear infinite;
}

@keyframes rotateImage {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.link {
  color: white;
  text-decoration: none;
}
.interaction {
  position: absolute;
  bottom: 15%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: 50px;
}

.interaction div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-button {
  font-size: 12px;
  margin-top: 5px;
}
</style>
