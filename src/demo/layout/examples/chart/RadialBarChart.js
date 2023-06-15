import Chart from "react-apexcharts";

export default function RadialBarChart() {
    const data = {

        series: [70, 50],
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
        },


    };

    return (
        <Chart options={data.options} series={data.series} type="radialBar"/>
    )
}