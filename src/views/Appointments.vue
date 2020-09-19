<template>
  <v-container>
    <v-row>
      <v-col
        cols="auto"
        class="text-h4"
      >
        Appointments
      </v-col>
      <v-spacer />
      <v-col cols="auto">
        <v-btn
          outlined
          color="primary"
          @click.stop="showNewAppointmentModal"
        >
          <v-icon left>
            mdi-calendar-plus
          </v-icon>
          Schedule New Appointment
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-data-table
          :items="upcomingSessions"
          :headers="upcomingTableHeaders"
        />
      </v-col>
    </v-row>
    <new-appointment
      v-if="addNewAppointment"
      :show-new-appointment="addNewAppointment"
      @onClose="hideNewAppointmentModal"
    />
  </v-container>
</template>

<script>
export default {
  components: {
    'new-appointment': () => import('@/components/NewAppointment.vue'),
  },
  data() {
    return {
      addNewAppointment: false,
      upcomingTableHeaders: [
        {
          text: 'Participant Name',
          value: 'participantName',
        },
        {
          text: 'Contact Number',
          value: 'contactNumber',
        },
        {
          text: 'Host',
          value: 'host',
        },
        {
          text: 'Status',
          value: 'status',
        },
      ],
    };
  },
  computed: {
    upcomingSessions: {
      get() {
        return this.$store.getters.getUpcomingSessions;
      },
    },
  },
  methods: {
    showNewAppointmentModal() {
      this.addNewAppointment = true;
    },
    hideNewAppointmentModal() {
      this.addNewAppointment = false;
    },
  },
};
</script>

<style>

</style>
