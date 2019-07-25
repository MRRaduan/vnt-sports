<template>
  <div class="registration-info">
    <div class="card-info" v-for="(card, index) in cards" :key="index">
      <h3 class="title text-primary -regular -green">{{card.title}}</h3>
      <div class="wrapper">
        <div class="icon">
          <i :class="card.icon"></i>
        </div>
        <p class="text-primary -black">{{card.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationInfo',
  data() {
    return {
      cards: [
        {
          title: 'Need Help?',
          icon: 'fa fa-life-ring',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'Why register?',
          icon: 'fa fa-heart-o',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          title: 'What people are saying...',
          icon: 'fa fa-smile-o',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.registration-info {
  display: flex;
  flex-wrap: wrap;
  @include breakpoint(large) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.card-info {
  // &:first-child {
  //   > .title {
  //     margin-top: 0;
  //   }
  // }
  padding: 25px 0;
  &:first-child {
    padding-top: 0;
  }
  @include breakpoint(medium) {
    // width: 370px;
  }
  @include breakpoint(large) {
    padding-top: 0;
    width: 370px;
  }
  > .title {
    font-size: 24px;
    // @include breakpoint(medium) {
    // margin-top: 0;
    margin: 0;
    // }
  }
  > .wrapper {
    padding-top: 25px;
    display: flex;

    > .text-primary {
      margin: 0 0 0 15px;
    }
    > .icon i {
      font-size: 80px;
      color: $green;
    }
  }
}
</style>
