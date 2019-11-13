<template>
  <div class="about">
    <div class="greeting">
      <Bubble></Bubble>
      <Avatar class="avatar"></Avatar>
    </div>
    <YoComp class="myAbout"></YoComp>
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
  align-items: center;
}

.avatar{
  width: 35vw;
}

.myAbout{
  width: 90%;
}

@media screen and (min-width:1000px) {
  .about{
    flex-direction: row;
  }

  .myAbout{
    width: 50vw;
  }
}

</style>