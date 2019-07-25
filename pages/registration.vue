<template>
  <div class="container">
    <section class="users-section">
      <div class="header-section">
        <h1 class="text-primary -title -light">Registration</h1>
      </div>
      <RegistrationInfo />

      <div class="form-container">
        <hr class="separator" />
        <form action class="registration-form">
          <div class="form">
            <div class="form-section">
              <div class="form-group">
                <div class="header">
                  <label for class="label text-primary -black -bold">Username</label>
                </div>
                <input type="text" class="input" />
                <span class="footer text-primary -grey-dark">Instructions to show on input focus.</span>
              </div>
              <div class="form-group">
                <div class="header">
                  <label for class="label text-primary -black -bold">Name</label>
                </div>
                <input type="text" class="input" />
                <span class="footer text-primary -grey-dark">Instructions to show on input focus.</span>
              </div>
              <div class="form-group">
                <div class="header">
                  <label for class="label text-primary -black -bold">E-mail</label>
                </div>
                <input type="email" class="input" />
                <span class="footer text-primary -grey-dark">Instructions to show on input focus.</span>
              </div>
            </div>
            <div class="form-section">
              <div class="form-group">
                <div class="header">
                  <label for class="label text-primary -black -bold">City</label>
                  <span class="optional text-primary -grey-dark -light">optional</span>
                </div>
                <input type="text" class="input" />
                <span class="footer text-primary -grey-dark">Instructions to show on input focus.</span>
              </div>
              <div class="form-group -radio">
                <div class="header">
                  <label for class="label text-primary -black -bold">Ride in group</label>
                </div>
                <div class="radiowrapper">
                  <label class="radio-button text-primary">
                    Always
                    <input type="radio" checked="checked" name="radio" class="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio-button text-primary">
                    Sometimes
                    <input type="radio" checked="checked" name="radio" class="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio-button text-primary">
                    Never
                    <input type="radio" checked="checked" name="radio" class="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="footer"></div>
              </div>
              <div class="form-group -checkbox">
                <div class="header">
                  <label for class="label text-primary -black -bold">Days of the week</label>
                </div>
                <div class="checkboxwrapper">
                  <label
                    class="checkbox-button text-primary"
                    v-for="(day, index) in daysWeek"
                    :key="index"
                  >
                    {{ day }}
                    <input type="checkbox" :name="day" class="chekbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="footer"></div>
              </div>
            </div>
          </div>
          <div class="submit-buttons">
            <button class="btn-primary -green">
              <span class="text-primary -white">Save</span>
            </button>
            <button class="btn-primary -grey">
              <span class="text-primary -grey-dark">Discard</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import RegistrationInfo from '@/components/RegistrationInfo.vue'
export default {
  name: 'Registration',
  components: {
    RegistrationInfo
  },
  data() {
    return {
      daysWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.form-container {
  padding-top: 25px;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
}

.separator {
  height: 2px;
  background-color: $grey;
  border: none;
  margin-bottom: 35px;
}

.registration-form {
  > .form {
    display: flex;
    flex-wrap: wrap;
    @include breakpoint(large) {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }
}

.form-section {
  width: 100%;
  max-width: 400px;
  &:last-child {
    @include breakpoint(large) {
      max-width: 100%;
      margin-left: 80px;
    }
  }
}

.form-group {
  border: none;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  position: relative;
  > .header {
    display: flex;
    justify-content: space-between;
    .label {
      display: inline-block;
      font-size: 14px;
    }
    .optional {
      display: inline-block;
      font-size: 12px;
    }
  }

  > .input {
    margin-top: 6px;
    border: solid 2px $grey;
    border-radius: 5px;
    padding: 8px;
    background-color: $white;
    &:focus {
      border-color: $green;
      ~ .footer {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: all 0.3s ease-in-out;
      }
    }
  }

  > .footer {
    font-size: 12px;
    position: absolute;
    bottom: 0;
    transform: translate3d(0, 5px, 0);
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  // variables
  &.-radio {
    margin-top: 6px;
    > .radiowrapper {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;

      .radio-button {
        margin: 10px 0;
        @include breakpoint(medium) {
          margin: 0;
        }
        &:nth-child(2) {
          margin: 10px 46px;
          @include breakpoint(medium) {
            margin: 0 46px;
          }
        }
      }
    }
  }

  &.-checkbox {
    margin-top: 6px;
    > .checkboxwrapper {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      @include breakpoint(medium) {
        flex-wrap: nowrap;
      }

      > .checkbox-button {
        margin: 10px 6px;
        @include breakpoint(medium) {
          margin: 0 6px;
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

.radio-button {
  display: block;
  position: relative;
  padding-left: 35px;
  padding-top: 6px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;

  & .checkmark:after {
    top: 7px;
    left: 7px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $black;
  }

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkmark {
      background-color: $white;
      &:after {
        display: block;
      }
    }
  }

  > .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: $white;
    border-radius: 50%;
    border: solid 1px $grey;

    &:after {
      content: '';
      position: absolute;
      display: none;
    }
  }

  &:hover {
    > input ~ .checkmark {
      border-color: $green;
      transition: all 0.15s ease-in-out;
    }
  }
}

.checkbox-button {
  display: block;
  position: relative;
  padding-left: 35px;
  padding-top: 6px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;

  & .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid $black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkmark {
      background-color: $white;
      &:after {
        display: block;
      }
    }
  }

  > .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: $white;
    border-radius: 7px;
    border: solid 1px $grey;

    &:after {
      content: '';
      position: absolute;
      display: none;
    }
  }

  &:hover {
    > input ~ .checkmark {
      border-color: $green;
      transition: all 0.15s ease-in-out;
    }
  }
}

.submit-buttons {
  display: flex;
  margin-top: 10px;
  > .btn-primary:last-child {
    margin-left: 10px;
  }
}
</style>
