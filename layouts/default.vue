<template>
  <div class="layout-default">
    <div class="fixed-top">
      <TopHeader />
      <Breadcrumb />
    </div>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { loadUsersData } from '@/utils/endpoints.js'

export default {
  components: {
    TopHeader,
    Breadcrumb
  },
  methods: {
    async getTableContent() {
      const tableContent = await loadUsersData()
      this.$store.commit('UPDATE_USERS_TABLE', tableContent)
    }
  },
  mounted() {
    this.getTableContent()
  }
}
</script>


<style lang="scss">
@import '@/assets/scss/styles.scss';

.fixed-top {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.layout-default {
  padding-bottom: 60px;
  > .content {
    margin-top: 92px;
    @include breakpoint(medium) {
      margin-top: 136px;
    }
  }
}
</style>
