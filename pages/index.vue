<template>
  <div class="main-content">
    <div class="sports-info">
      <div class="container">
        <div class="sportsinfo-item">
          <span class="icon">
            <i class="fas fa-puzzle-piece"></i>
          </span>
          <div class="wrapper">
            <span class="text-primary type -grey-dark">Sport type</span>
            <p class="text-primary name -black -bolder">Cycling</p>
          </div>
        </div>

        <div class="sportsinfo-item">
          <span class="icon">
            <i class="fas fa-trophy"></i>
          </span>
          <div class="wrapper">
            <span class="text-primary type -grey-dark">Mode</span>
            <p class="text-primary name -black -bolder">Advanced</p>
          </div>
        </div>

        <div class="sportsinfo-item">
          <span class="icon">
            <i class="fas fa-map-signs"></i>
          </span>
          <div class="wrapper">
            <span class="text-primary type -grey-dark">Route</span>
            <p class="text-primary name -black -bolder">30 miles</p>
          </div>
        </div>
      </div>
    </div>
    <Users />
  </div>
</template>

<script>
import Users from '@/components/Users.vue'
export default {
  components: {
    Users
  },
  layout: 'default'
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.sports-info {
  background-color: $green-light;
  width: 100%;
  display: flex;
  @include breakpoint(medium) {
    height: 124px;
  }

  > .container {
    display: flex;
    flex-wrap: wrap;

    @include breakpoint(medium) {
      flex-wrap: nowrap;
    }
  }
}

.sportsinfo-item {
  display: flex;
  align-items: center;
  padding: 25px 0;
  @include breakpoint(medium) {
    padding: 0 30px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
  > .icon i {
    font-size: 52px;
    color: $green;
  }
  > .wrapper {
    margin-left: 15px;
    > .type {
      font-size: 14px;
      // margin: 0;
    }
    > .name {
      font-size: 22px;
      margin: 5px 0 0 0;
      font-weight: 900;
    }
  }
}
</style>
