
<script lang="ts">
import { defineComponent } from "vue";
import LoginBtn from '@/components/LoginBtn.vue';

export default defineComponent({
  name: "Home",
  components: { LoginBtn },
});
</script>
  
<template>
  <div class="w-full h-full" id="Home">
    <div class="w-full h-full p-2 md:p-10 bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen">
      <login-btn class="float-right" />
    </div>
  </div>
</template>
