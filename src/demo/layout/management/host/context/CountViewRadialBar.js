import Chart from "react-apexcharts";
import {useTheme} from "@mui/material";

export default function CountViewRadialBar({rate, count, color}) {
    const theme = useTheme();
    const data = {

        series: [rate],
        options: {
            chart: {
                height: '350px',
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
                    track: {
                        background: theme.palette.chart.radialBar
                    },
                    dataLabels: {
                        show: true,
                        value: {
                            formatter: function (val, opts) {
                                return ''
                            },
                        }
                    }
                },
            },
            labels: [count],
            colors: [color],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#ABE5A1'],
                    inverseColors: true,
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
        <Chart options={data.options} series={data.series} height="200px" type="radialBar"/>
    )
}