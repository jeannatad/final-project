<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>All activity ▾</span>
            <ion-icon name="funnel-outline" style="font-size: 20px;"></ion-icon>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content>
      <div class="inbox-container">
        <!-- Placeholder Icon -->
        <ion-icon name="chatbubble-ellipses-outline" class="inbox-icon"></ion-icon>
        <p class="inbox-title">Notifications aren't available</p>
        <p class="inbox-description">
          Notifications about your account will appear here
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Inbox",
};
</script>

<style scoped>
.inbox-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #333;
}

.inbox-icon {
  font-size: 60px;
  color: #888;
  margin-bottom: 20px;
}

.inbox-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.inbox-description {
  font-size: 14px;
  color: #666;
}
</style>
