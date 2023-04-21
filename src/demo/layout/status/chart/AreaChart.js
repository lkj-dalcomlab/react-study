import Chart from "react-apexcharts";

export function AreaChart() {
    const data = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],

        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },

            title: {
                text: 'Fundamental Analysis of Stocks',
                align: 'left'
            },
            subtitle: {
                text: 'Price Movements',
                align: 'left'
            },
            // labels: series.monthDataSeries1.dates,
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        }
    };
    console.log(data.options);
    return (
        <Chart options={data.options} series={data.series} type="area"/>
    )
}