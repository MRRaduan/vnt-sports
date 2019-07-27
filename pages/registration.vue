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
                <input type="text" class="input" v-model="form.username" />
                <span class="footer text-primary -grey-dark">Instructions to show on input focus.</span>
                <span
                  class="error-message"
                  v-if="submitted && !$v.form.username.required"
                >This field is required</span>
              </div>
              <div class="form-group">
                <div class="header">
                  <label for class="label text-primary -black -bold">Name</label>
                </div>
                <input type="text" class="input" v-model="form.name" />
                <span class="footer text-primary -grey-dark">Instructions to show on input focus.</span>
                <span
                  class="error-message"
                  v-if="submitted && !$v.form.name.required"
                >This field is required</span>
              </div>
              <div class="form-group">
                <div class="header">
                  <label for class="label text-primary -black -bold">E-mail</label>
                </div>
                <input type="email" class="input" v-model="form.email" />
                <span class="footer text-primary -grey-dark">Instructions to show on input focus.</span>
                <span
                  class="error-message"
                  v-if="submitted && !$v.form.email.required"
                >This field is required</span>
                <span
                  class="error-message"
                  v-if="submitted && !$v.form.email.email"
                >This field is required</span>
              </div>
            </div>
            <div class="form-section">
              <div class="form-group">
                <div class="header">
                  <label for class="label text-primary -black -bold">City</label>
                  <span class="optional text-primary -grey-dark -light">optional</span>
                </div>
                <input type="text" class="input" v-model="form.address.city" />
                <span class="footer text-primary -grey-dark">Instructions to show on input focus.</span>
              </div>
              <div class="form-group -radio">
                <div class="header">
                  <label for class="label text-primary -black -bold">Ride in group</label>
                </div>
                <div class="radiowrapper">
                  <label class="radio-button text-primary">
                    Always
                    <input
                      type="radio"
                      name="radio"
                      value="Always"
                      id="radio-always"
                      class="radio"
                      v-model="form.rideInGroup"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio-button text-primary">
                    Sometimes
                    <input
                      type="radio"
                      name="radio"
                      value="Sometimes"
                      id="radio-sometimes"
                      v-model="form.rideInGroup"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio-button text-primary">
                    Never
                    <input
                      type="radio"
                      name="radio"
                      value="Never"
                      id="radio-never"
                      class="radio"
                      v-model="form.rideInGroup"
                    />
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
                    <input
                      type="checkbox"
                      :name="day"
                      :value="day"
                      :id="day"
                      class="chekbox"
                      v-model="form.daysOfTheWeek"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="footer"></div>
              </div>
            </div>
          </div>
          <div class="submit-buttons">
            <button class="btn-primary -green" @click.prevent="submit" type="submit">
              <span class="text-primary -white">Save</span>
            </button>
            <button class="btn-primary -grey" @click.prevent="resetForm" type="button">
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
import { required, email } from 'vuelidate/lib/validators'
import { transformRidesDays } from '@/utils/utils'

export default {
  name: 'Registration',
  components: {
    RegistrationInfo
  },
  data() {
    return {
      submitted: false,
      daysWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      form: {
        username: '',
        name: '',
        email: '',
        address: {
          city: ''
        },
        rideInGroup: '',
        daysOfTheWeek: []
      }
    }
  },
  validations: {
    form: {
      name: { required },
      username: { required },
      email: { required, email }
    }
  },

  methods: {
    generateId() {
      return (
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)
      )
    },
    submit() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      const rideDays = transformRidesDays(this.form.daysOfTheWeek)
      const newUser = {
        id: this.generateId(),
        username: this.form.username,
        name: this.form.name,
        email: this.form.email,
        ride_in_group: this.form.rideInGroup,
        day_of_week: rideDays,
        address: this.form.address,
        posts: [],
        albums: [],
        photos: 0
      }

      this.$store.commit('ADD_USER_TABLE', newUser)
      this.$router.push('/users')
    },
    resetForm() {
      this.form = {
        username: '',
        name: '',
        email: '',
        address: {
          city: ''
        },
        rideInGroup: '',
        daysOfTheWeek: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.error-message {
  color: $red;
  font-size: 12px;
}

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
