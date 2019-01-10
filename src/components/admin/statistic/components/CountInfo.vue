<template>
    <v-card>
        <div id="spark2">
            <apexchart type=area height=160 :options="chartOptionsTopSpark2" :series="seriesTopSpark2" />
        </div>
    </v-card>
</template>

<script>

    function add(a, b) {
        return a + b;
    }

    export default {
        name: "count-diagram",
        props: ['list', 'title', 'symbol', "timeLapse"],
        data: function () {
            return {
                seriesTopSpark2: [{
                    name: this.symbol,
                    data: this.list
                }],
                chartOptionsTopSpark2: {
                    chart: {
                        sparkline: {
                            enabled: true
                        },
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    fill: {
                        opacity: 0.3,
                        gradient: {
                            enabled: false
                        }
                    },
                    xaxis: {
                        categories: this.timeLapse,
                        crosshairs: {
                            width: 1
                        },
                    },
                    yaxis: {
                        min: 0
                    },
                    title: {
                        text: this.symbol + this.list.reduce(add, 0),
                        offsetX: 0,
                        style: {
                            fontSize: '24px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    },
                    subtitle: {
                        text: this.title,
                        offsetX: 0,
                        style: {
                            fontSize: '14px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    }
                }
            }
        }
    };
</script>
