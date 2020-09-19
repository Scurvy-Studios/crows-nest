<template>
    <v-col cols="12">
        <v-row no-gutters>
            <v-col cols="12">
                <p class="text-overline mb-0">{{label}}</p></v-col>
            <v-col>
                <v-select :items="twentyFourHour ? twelveHourData : twelveHourData"
                    label="Hour"></v-select></v-col>
            <v-col class="ml-4">
                <v-select :items="minutesData"
                    label="Minute"></v-select></v-col>
            <v-col class="ml-4" v-if="!twentyFourHour">
                <v-select :items="periods"
                    label="AM / PM"></v-select></v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        twentyFourHour: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    data() {
        return {
            twelveHourData: [
                '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',],
            twentyFourHourData:[
                '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
                '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',],
            minutesData: [
                '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
                '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
                '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
                '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
                '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
                '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',],
            periods: ['AM', 'PM',],
        };
    },
}
</script>

<style>

</style>
