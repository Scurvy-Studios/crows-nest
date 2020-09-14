<template>
    <v-container fluid>
        <v-row>
            <v-col cols="auto" class="text-h4">
                Appointments</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
                <v-btn @click.stop="showNewAppointmentModal" outlined color="primary">
                    <v-icon left>mdi-calendar-plus</v-icon>
                    Schedule New Appointment
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-data-table
                :items="upcomingSessions"
                :headers="upcomingTableHeaders"></v-data-table>
            </v-col>
        </v-row>
        <new-appointment v-on:onClose="hideNewAppointmentModal" :showNewAppointment="addNewAppointment" v-if="addNewAppointment"></new-appointment>
    </v-container>
</template>

<script>
export default {
    computed: {
        upcomingSessions: {
            get() {
                return this.$store.getters.getUpcomingSessions;
            }
        }
    },
    components: {
        'new-appointment': () => import('@/components/NewAppointment.vue'),
    },
    data() {
        return {
            addNewAppointment: false,
            upcomingTableHeaders: [
                {
                    text: 'Participant Name',
                    value: 'participantName'
                },
                {
                    text: 'Contact Number',
                    value: 'contactNumber'
                },
                {
                    text: 'Host',
                    value: 'host'
                },
                {
                    text: 'Status',
                    value: 'status'
                },
            ],
        }
    },
    methods: {
        showNewAppointmentModal() {
            this.addNewAppointment = true;
        },
        hideNewAppointmentModal() {
            this.addNewAppointment = false;
        },
    },
}
</script>

<style>

</style>