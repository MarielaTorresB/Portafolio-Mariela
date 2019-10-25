<template>
  <div class="about">
    <Bubble></Bubble>
    <Avatar class="avatar"></Avatar>
    <YoComp></YoComp>
  </div>
</template>

<script>
import YoComp from '@/components/YoComp.vue';
import Avatar from "@/components/Avatar.vue";
import Bubble from "@/components/Bubble.vue";

export default {
  name: 'about',
  components: {
    YoComp,
    Avatar,
    Bubble,
  }
}
</script>

<style scoped>
.about{
  display: flex;
  flex-direction: column;
}


</style>