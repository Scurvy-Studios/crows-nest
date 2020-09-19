<template>
  <v-container>
      <v-row>
          <v-col cols="12" class="text-h2">
              Sign up for The Crow's Nest
          </v-col>
          <v-col cols="12" align="center">
              <v-card flat outlined max-width="600">
                  <v-card-text>
                    <v-form v-model="signupValid">
                        <v-text-field type="text" 
                            required v-model="email" validate-on-blur label="Email Address" :rules="emailRules">
                        </v-text-field>
                        <v-text-field type="text" 
                            required v-model="firstName" validate-on-blur label="First Name" :rules="firstNameRules">
                        </v-text-field>
                        <v-text-field type="text" 
                            required v-model="lastName" validate-on-blur label="Last Name" :rules="lastNameRules">
                        </v-text-field>
                        <v-text-field type="password" 
                            required v-model="password" validate-on-blur label="Password" :error-count="passwordHints.length" persistent-hint :messages="passwordHints">
                        </v-text-field>
                        <v-btn
                            :disabled="!signupValid"
                            color="primary"
                            class="my-4"
                            @click="submit"
                            block
                        >
                            Sign Up
                        </v-btn>
                    </v-form>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { emailRules, firstNameRules, lastNameRules } from '@/helpers/rules';

export default {
    computed: {
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
                    messages.push('Password must contain a lower case letter')
                }
                if (!/\d/.test(pass)) {
                    messages.push('Password must contain a number');
                }
                if (!/\W/.test(pass)) {
                    messages.push('Password must contain a symbol');
                }

                return messages;
            }
        },
    },
    data() {
        return {
            signupValid: null,
            emailRules,
            firstNameRules,
            lastNameRules,
        };
    },
    methods: {
        submit() {
            console.log('sign up');
            this.$store.dispatch('signup');
        },
    },
    mounted() {
    },
}
</script>

<style>

</style>
