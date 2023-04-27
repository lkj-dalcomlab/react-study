import {useEffect} from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "apexcharts"

export default function RealTimeLineChart({selectedPID, fetchData}) {
    const data = [];
    const memData = [];
    const chartOptions = {
        series: [
            {
                name: 'cpuData',
                data: data
            },
            {
                name: 'memData',
                data: memData
            }
        ],
        options: {
            chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                    enabled: false,
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Dynamic Updating Chart',
                align: 'left'
            },
            markers: {
                size: 0
            },
            xaxis: {
                // type: 'datetime',
                range: 5,
            },
            yaxis: {
                min: 0,
                max: 100
            },
            legend: {
                show: true,
                onItemClick: {
                    toggleDataSeries: true
                },
                onItemHover: {
                    highlightDataSeries: true
                }
            }
        },
    };

    const getNewSeries = (yrange) => {
        const date = new Date();
        const curTime = date.getMinutes() + ":" + date.getSeconds();

        if (data.length > 5) {
            data.splice(0, 1);
            memData.splice(0, 1);
        }

        const randomData = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        console.log(randomData);
        data.push({
            x: curTime,
            y: randomData
        });
        memData.push({
            x:curTime,
            y: 50
        })
        console.log(data);

    }
    getNewSeries({
        min: 0,
        max: 100
    });

    let curInterval;
    useEffect(()=> {
        curInterval = setInterval(()=> {
            getNewSeries({
                min: 0,
                max: 100
            });

            ReactApexChart.exec('realtime', 'updateSeries', chartOptions.series);
        }, 1000)
        return ()=> clearInterval(curInterval);
    });

    const stopChart = ()=> {
        clearInterval(curInterval);
    };

    return (
        <Chart options={chartOptions.options} series={chartOptions.series} type="area" onClick={()=>stopChart()}/>
    );
}