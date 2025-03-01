<script setup>
  defineProps({
    code: {
      type: String,
      required: true
    },
  });
</script>

<template>
  <pre>
    <code>
      {{ code }}
    </code>
  </pre>
</template>

<style lang="scss" scoped>
  pre {
    font-family: 'Courier New', Courier, monospace;
    background: #cacaca;
    color: #333;
    width: 100%;
    max-width: 800px;
    display: grid;
    padding: 1rem;
    overflow-x: auto;
    border-radius: 8px;
  }
</style>