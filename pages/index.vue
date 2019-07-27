<template>
  <div class="main-content">
    <nuxt />
  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: 'usersRedirect'
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';
</style>
