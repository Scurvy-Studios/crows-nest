<template>
  <v-dialog
      fullscreen
      v-model="showAppointmentModal"
      persistent
    >
      <v-card>
          <v-container>
        <v-card-title class="text-h4">Create New Appointment</v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
                <v-col cols="6">
                    <h4 class="headline">Participants</h4>
                    <v-data-table
                    :items="participants"
                    ></v-data-table>
                </v-col>
                <v-col cols="6">
                    <v-row>
                        <v-col cols="12">
                        <p class="text-overline mb-0">Appointment Length</p>
                        <v-btn-toggle
                            v-model="meetingLength"
                            tile
                            mandatory
                            >
                            <v-btn :value="15">
                                15 Minutes
                            </v-btn>
                            <v-btn :value="30">
                                30 Minutes
                            </v-btn>
                            <v-btn :value="45">
                                45 Minutes
                            </v-btn>
                            <v-btn :value="60">
                                60 Minutes
                            </v-btn>
                            <v-btn value="custom">
                                Custom
                            </v-btn>
                        </v-btn-toggle>
                        </v-col>
                        <v-col cols="12">
                            <p class="text-overline mb-0">Appointment Date</p>
                            <v-menu
                            v-model="showDatePicker"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                full-width
                                outlined
                                v-model="appointmentDate"
                                prepend-icon="mdi-calendar-month"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="appointmentDate" @input="showDatePicker = false"></v-date-picker>
                        </v-menu>
                        </v-col>
                        <time-input label="Appointment Time Start"></time-input>
                        <time-input v-if="meetingLength === 'custom'" label="Appointment Time End"></time-input>
                    </v-row>
                </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click.stop="close"
          >
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click.stop="close"
          >
            Request Appointment
          </v-btn>
        </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
import TimeInput from './TimeInput.vue';

export default {
    components: {
        'time-input': TimeInput,
    },
    props: {
        showNewAppointment: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    methods: {
        close() {
            this.$emit('onClose');
        }
    },
    data() {
        return {
            showAppointmentModal: this.showNewAppointment,
            participants: [],
            meetingLength: null,
            showDatePicker: false,
            appointmentDate: new Date().toISOString().substr(0, 10),
        };
    },
}
</script>

<style>

</style>