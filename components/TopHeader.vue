<template>
  <header class="top-header">
    <div class="container">
      <a href class="app-logo" title="Logo da app">
        <div class="logo">
          <i class="fas fa-volleyball-ball"></i>
        </div>
        <span class="text-primary -black -bold">Venturus Sports</span>
      </a>
      <div class="user-dropdown">
        <div class="header">
          <a href class="photo text-primary -upper" title="Acessar dados da conta">JB</a>
          <button class="dropdown-toggle">
            <span class="text-primary">Jason Bourne</span>
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.top-header {
  height: 56px;
  background-color: $white;
  @include breakpoint(medium) {
    height: 96px;
  }
  > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.app-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  > .logo {
    padding: 8px;
    background-color: $green;
    border-radius: 6px;
    width: min-content;

    > i {
      font-size: 22px;
      color: $white;
    }
  }
  > .text-primary {
    margin-left: 6px;
    font-size: 18px;
    @include breakpoint(large) {
      margin-left: 8px;
      font-size: 24px;
    }
  }
}

.user-dropdown {
  > .header {
    display: flex;
    > .photo {
      text-decoration: none;
      padding: 5px;
      border: solid 1px $black;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
}

.dropdown-toggle {
  display: none;
  border: none;
  background-color: transparent;

  @include breakpoint(medium) {
    display: flex;
    align-items: center;
  }

  > i {
    color: $black;
  }

  .text-primary {
    font-size: 14px;
    @include breakpoint(medium) {
      margin: 0 10px 0 5px;
    }
  }
}
</style>
