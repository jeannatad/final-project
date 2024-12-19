<template>
  <ion-page>
    <ion-content class="content">
      <div class="title">
        <p>
          <button class="link" @click="following">Following |</button>
          <button class="link" @click="foryou">For You</button>
        </p>
      </div>
      <img
        class="background-image"
        src="https://s3-alpha-sig.figma.com/img/85b4/6e7b/896cecf908e24d76e3b9dd958c0dcb60?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EL2TsYynrE6HsfvgkkhWJW4VQQgwJi7xOMqyMZxC~C9jKb3tVERBLcPVPEd24xT9Wf4ubvX-Dzjbryg80RVCyS8TG~-4BqGJ34cI08vjXLYQRcL9xIAQO9Sp6dx8d7JZzxuUQO2FqkPvrOPnLkM1R~eZm3D3OZFeIJoePHn0hUYFss3CX5Atp6dfkGEaFWopxPsGpge5MJ2973dH0NTlJmKVdlykITmfBRFFvPBmpnMXfUG3H~wxjG88YDEniBfXe353kjqnRkWDaoV8fQzrNmsYiuvqzGD0nZIzbxn~tl3js1Kv-eIallVUFi6HMqTSVNSeX2cyibumWvUbahP9EA__"
        alt="Background"
      />
      <div class="image">
        <img
          src="https://s3-alpha-sig.figma.com/img/fe10/b423/a179f6612bd6b395294a31af333e0bb6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FS2KC~HzoBjK99IuIdvaP1LsIEB8ybE4biJpJ9Pfkurrd5c6INUYmEkg2lFNsHdlvcBxsLGyE0ZzDYj4iyilJ4i-igpuzvXy7IqY4wzaBMFuXv4UEcQv9uQmdb3HAEcU94DkAc1PbtiFKT1x5m46w2oFN~Qie3XDU3a24lAW17YKTnXlc-TI5-kELF2fhuIDm-L7tKpaaTA3DKBE8fsvzmasby99mkpv1pJbnRCcoT1b8TtRbmExGs3K4mVl2grAgynpMy~qrK04pkSHEhyOgVfI3729gIGZEPmNvBk676kfEnV1~QzS4g3MMQWKu0dCJRt5Y6dIaQHRBoUBa2p4OA__"
          alt="Profile"
        />
      </div>
      c<div class="interaction">
        <div class="icon-wrapper">
          <ion-icon :icon="heart" class="icon"></ion-icon>
          <h6 class="text-button">328.7k</h6>
        </div>
        <div class="icon-wrapper">
          <ion-icon :icon="chatbubble" class="icon"></ion-icon>
          <h6 lass="text-button">578</h6>
        </div>
        <div class="icon-wrapper">
          <ion-icon :icon="share" class="icon"></ion-icon>
          <h6 class="text-button">Share</h6>
        </div>
      </div>
      <div class="disc">
        <img
          src="https://s3-alpha-sig.figma.com/img/a466/5194/f993eb307d41084b01c3f5be7f691533?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VtjTHfOcoWs7e7s5fTLY-E7dWCKHQ-RDuMFXRnKmaeGKwIPihkdFQuBg6vsQk2Biq6xht8donSBuLJLEPZ2LUkJAskdhtmuCrDGtuAXuYu7DWhlZjAfiD-CVxmyuT2VF5OKMJpW8Lv0tUfjDEyYu9JhcgIcEd1~2YCdfVTeWFt58f3BL2A-T011tXJjdtnaWDbh6BXto26d9vpJNf4JuhjRaKBZLTbjBS2LxOP~sqYeADC~ZIE6jCtQAdsnOY1E~c02YdQ4tgM65OwzmIhG3A-Zt8AZhLww1ktbyWzNZ6uTbZPO6UCdXyRrHU4AxIrfISmIpFh2~OYVr52~mFZZYeQ__"
          alt="Music Disc"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { heart, chatbubble, share } from 'ionicons/icons';

export default defineComponent({
  name: 'Following',
  components: {
    IonIcon,
  },
  methods: {
    following() {
      this.$router.push('/tabs/home');
    },
    foryou() {
      this.$router.push('/manual-location');
    },
  },
  setup() {
    return {
      heart,
      chatbubble,
      share,
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
  z-index: -1;
}

.title {
  text-align: center;
  margin-top: 50px;
  color: white;
  font-size: 18px;
}

.link {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.image img {
  position: absolute;
  top: 40%;
  right: 3%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
}

.disc img {
  position: absolute;
  top: 92%;
  right: 5%;
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

.interaction {
  position: absolute;
  bottom: 9%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: white;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  font-size: 30px;
}

.text-button {
  font-size: 10px;
  text-align: center;
}
</style>
