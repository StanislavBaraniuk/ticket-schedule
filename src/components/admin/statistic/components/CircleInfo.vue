<template>
    <v-card>
        <div id="chart">
            <h2>{{ $props.title }}</h2>
            <apexchart type=donut  :options="chartOptions" :series="series"/>
        </div>
    </v-card>
</template>

<script>

    export default {
        name: "circle-diagram",
        props: ['value_list', 'key_list', 'title'],
        data: function () {
            return {
                series: this.value_list,
                chartOptions: {
                    labels: this.key_list,

                    dataLabels: {
                        enabled: true
                    },

                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                show: false
                            }
                        }
                    }],
                    legend: {
                        position: 'right',
                        offsetY: 0,
                    }
                }
            }
        }
    };
</script>

<style scoped lang="sass">
    .vh50
        width: 50vh
    .vh100
        width: 70vh
</style>