<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        class="text-h2"
      >
        Sign up for The Crow's Nest
      </v-col>
      <v-col
        cols="12"
        align="center"
      >
        <v-card
          flat
          outlined
          max-width="600"
        >
          <v-card-text>
            <v-slide-y-transition hide-on-leave>
              <v-progress-circular
                v-if="processing"
                indeterminate
                color="primary"
                size="250"
              />
              <v-form
                v-if="!processing && !success"
                v-model="signupValid"
              >
                <div
                  v-if="errors"
                  class="red--text"
                >
                  <p class="mb-0">
                    There Has been an error with your registration.
                  </p>
                  <p>If you think you already have an account, please login instead.</p>
                </div>
                <v-text-field
                  v-model="email"
                  type="text"
                  required
                  validate-on-blur
                  label="Email Address"
                  :rules="emailRules"
                />
                <v-text-field
                  v-model="firstName"
                  type="text"
                  required
                  validate-on-blur
                  label="First Name"
                  :rules="firstNameRules"
                />
                <v-text-field
                  v-model="lastName"
                  type="text"
                  required
                  validate-on-blur
                  label="Last Name"
                  :rules="lastNameRules"
                />
                <v-text-field
                  v-model="password"
                  type="password"
                  required
                  validate-on-blur
                  label="Password"
                  :error-count="passwordHints.length"
                  persistent-hint
                  :messages="passwordHints"
                />
                <v-btn
                  :disabled="!signupValid"
                  color="primary"
                  class="my-4"
                  block
                  @click="submit"
                >
                  Sign Up
                </v-btn>
              </v-form>
              <div v-if="success">
                <p>Thank you for registering.</p>
                <p>An Email has been sent to {{ email }}.
                  Please confirm your email address and login to continue.</p>
              </div>
            </v-slide-y-transition>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { emailRules, firstNameRules, lastNameRules } from '../helpers/rules';

export default {
  data() {
    return {
      signupValid: null,
      success: false,
      errors: false,
      emailRules,
      firstNameRules,
      lastNameRules,
    };
  },
  computed: {
    processing: {
      get() {
        return this.$store.getters.getSignUpProcessing;
      },
    },
    email: {
      get() {
        return this.$store.getters.getSignUpEmail;
      },
      set(val) {
        return this.$store.commit('updateEmail', val);
      },
    },
    firstName: {
      get() {
        return this.$store.getters.getSignUpFirstName;
      },
      set(val) {
        return this.$store.commit('updateFirstName', val);
      },
    },
    lastName: {
      get() {
        return this.$store.getters.getSignUpLastName;
      },
      set(val) {
        return this.$store.commit('updateLastName', val);
      },
    },
    password: {
      get() {
        return this.$store.getters.getSignUpPassword;
      },
      set(val) {
        return this.$store.commit('updatePassword', val);
      },
    },
    passwordHints: {
      get() {
        const messages = [];
        const pass = this.password;
        if (pass.length < 8) {
          messages.push('Password must be at least 8 characters long.');
        }
        if (!/[A-Z]/.test(pass)) {
          messages.push('Password must contain an upper case letter');
        }
        if (!/[a-z]/.test(pass)) {
          messages.push('Password must contain a lower case letter');
        }
        if (!/\d/.test(pass)) {
          messages.push('Password must contain a number');
        }
        if (!/\W/.test(pass)) {
          messages.push('Password must contain a symbol');
        }

        return messages;
      },
    },
  },
  methods: {
    async submit() {
      this.$store.commit('updateSignUpProcessing', true);
      this.$store.dispatch('signup')
        .then((response) => {
          console.log(response);
          this.$store.commit('updateSignUpProcessing', false);
          this.success = true;
        })
        .catch((error) => {
          this.$store.commit('updateSignUpProcessing', false);
          this.errors = true;
          console.log(error);
        });
    },
  },
};
</script>

<style>

</style>
