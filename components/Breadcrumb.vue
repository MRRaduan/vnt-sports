<template>
  <nav class="breadcrumb-default" aria-label="breadcrumb">
    <div class="container">
      <ul class="list">
        <li class="breadcrumb-item -anchor" aria-current="page">
          <i class="fas fa-home"></i>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <a href class="text-primary -green -link" title="Link to Page Name">Page Name</a>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <a href class="text-primary -green -link" title="Link to Page Name">Breadcrumb</a>
        </li>
        <li class="breadcrumb-item -current" aria-current="page">
          <a href class="text-primary -green -link" title="Link to Page Name">Current</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.breadcrumb-default {
  width: 100%;
  background-color: $grey-light;
  height: 36px;
  @include breakpoint(medium) {
    height: 40px;
  }

  > .container {
    display: flex;
    align-items: center;
    > .list {
      display: flex;
    }
  }
}

.breadcrumb-item {
  // margin: 0 5px;
  display: flex;
  align-items: center;
  &:after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f054';
    color: $grey-dark-1;
    margin: 0 3px;
    @include breakpoint(medium) {
      margin: 0 15px;
    }
  }

  &:last-child {
    &:after {
      display: none;
    }
  }

  > .text-primary {
    font-size: 14px;
  }

  &.-anchor {
    > i {
      color: $green;
    }
  }

  &.-current {
    > .text-primary {
      color: $black;
      pointer-events: none;
    }
  }
}
</style>
