import Chart from "react-apexcharts";

export default function RadialBarChart() {
    const data = {

        series: [70],
        options: {
            chart: {
                // height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%',
                        dropShadow: {
                            enabled: true,
                            top: 0,
                            left: 0,
                            blur: 3,
                            opacity: 0.5
                        }
                    },
                    dataLabels: {
                        show: true
                    }
                },
            },
            labels: ['Cricket'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 1.5,
                    gradientToColors: ['#ABE5A1'],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: 'round'
            },
        },


    };

    return (
        <Chart options={data.options} series={data.series} type="radialBar"/>
    )
}