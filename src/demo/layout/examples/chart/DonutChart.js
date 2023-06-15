import Chart from "react-apexcharts";

export default function DonutChart() {
    const data = {
        series: [55, 25, 35],

        options: {
            labels: ['A', 'B', 'C'],
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '25px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    colors: ['white', 'white', 'white']
                },
            },
            legend: {
                show: false
            },
            chart: {
                type: 'donut',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            plotOptions: {
                pie: {
                    customScale: 0.7,
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                color: 'skyblue',
                                fontSize: '100px'
                            },
                            total: {
                                show: true,
                                showAlways: true,
                                label: 'Total',
                                fontSize: '30px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                color: 'skyblue',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => {
                                        return a + b
                                    }, 0)
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    return (
        <Chart options={data.options} series={data.series} type="donut"/>
    )
}