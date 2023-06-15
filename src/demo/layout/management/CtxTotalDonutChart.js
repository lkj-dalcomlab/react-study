import Chart from "react-apexcharts";
import {useTheme} from "@mui/material";

export default function CtxTotalDonutChart({summary}) {
    const theme = useTheme();
    const colors = [theme.palette.primary.main, theme.palette.warning.main, theme.palette.error.main];
    const data = {
        series: [summary.Load, summary.Unload, summary.Error],

        options: {
            title: {
                text: 'TOTAL CONTEXTS',
                align: 'center',
                offsetY: 5,
                margin: 5,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'inherit',
                    fontFamily:  'Helvetica, Arial, sans-serif',
                    color: theme.palette.text.primary
                },
            },
            labels: ['Load Summary', 'Unload Summary', 'Error Summary'],
            fill: {
                colors: colors
            },
            colors: colors,
            dataLabels: {
                enabled: false,
                style: {
                    fontSize: '0.7rem',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    colors: colors
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
                        width: 200,
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            stroke: {
                colors: ['rgba(0,0,0,0)']
            },

            plotOptions: {
                pie: {
                    customScale: 0.85,
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            value: {
                                show: true,
                                color: theme.palette.text.primary,
                                fontSize: '25px',
                                offsetY: '-10px',
                                formatter: function (val) {
                                    return 'val'
                                }
                            },
                            total: {
                                show: true,
                                showAlways: true,
                                label: 'Total Contexts',
                                fontSize: '0px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                color: 'skyblue',
                            }
                        }
                    }
                }
            }
        }
    };

    return (
        <Chart style={{marginTop: "0px"}} options={data.options} series={data.series} type="donut"/>
    )
}