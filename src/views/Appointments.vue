<template>
  <pre>{{upcomingSessions}}</pre>
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
}
</script>

<style>

</style>