<template>
    <v-card>
        <div id="chart">
            <apexchart type=bar height=400 :options="chartOptions" :series="series" />
        </div>
    </v-card>
</template>

<script>
    var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

    export default {
        name: "column-diagram",
        props: ['value_list', 'key_list', 'title'],
        data: function () {
            return {
                series: [{
                    name: "Продано",
                    data: this.value_list
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'bar',
                        events: {
                        },
                    },
                    colors: colors,
                    plotOptions: {
                        bar: {
                            columnWidth: '45%',
                            distributed: true
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    },

                    xaxis: {
                        categories: this.key_list,
                        labels: {
                            style: {
                                colors: colors,
                                fontSize: '14px'
                            }
                        }
                    }
                }
            }
        }
    };
</script>

<style scoped>

</style>