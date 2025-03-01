<template>
  <div class="northern-lights">
    <div v-for="i in 3" :key="i" class="aurora" :class="`aurora-${i}`"></div>
  </div>
</template>

<style lang="scss" scoped>
  .northern-lights {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Aurora Base */
    .aurora {
      position: absolute;
      width: 120vw;
      height: 60vh;
      top: 20%;
      left: -10%;
      background: linear-gradient(
        to top,
        rgba(0, 255, 150, 0.1) 0%,
        rgba(0, 255, 150, 0.5) 50%,
        rgba(0, 255, 150, 0.05) 100%
      );
      filter: blur(80px);
      opacity: 0.6;
      animation: moveAurora 10s linear infinite alternate;

      /* Different Layers for Depth */
      &.aurora-1 {
        animation-delay: 0s;
        animation-duration: 12s;
      }

      &.aurora-2 {
        top: 30%;
        left: -20%;
        animation-duration: 15s;
        opacity: 0.5;
      }

      &.aurora-3 {
        top: 10%;
        left: 10%;
        animation-duration: 18s;
        opacity: 0.4;
      }
    }
  }

  /* Aurora Movement */
  @keyframes moveAurora {
    0% {
      transform: translateX(-10%) translateY(-10%) rotate(5deg);
    }
    50% {
      transform: translateX(10%) translateY(5%) rotate(-5deg);
    }
    100% {
      transform: translateX(-10%) translateY(-5%) rotate(5deg);
    }
  }
</style>