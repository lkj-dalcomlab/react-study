import Chart from "react-apexcharts";
import React, {useEffect} from "react";
import ReactApexChart from "apexcharts";
import config from "../../../config/config";

export default function ProcessGraph({pid}) {
    const chartId = 'realtime-' + pid;
    const cpuData = [];
    const memData = [];
    const xRange = 5;

    const series = [
        {
            name: 'cpu usage',
            data: cpuData
        },
        {
            name: 'memory usage',
            data: memData
        }
    ];
    const options = {
        chart: {
            height: 350,
            type: 'area',
            id: chartId,
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
            text: 'PID[' + pid + '] examples',
            align: 'left'
        },
        markers: {
            size: 5
        },
        xaxis: {
            // type: 'datetime',
            range: xRange,
        },
        yaxis: {
            min: 0,
            max: 100
        },
        legend: {
            show: true,
            onItemClick: {
                toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            }
        },
    };

    const fetchData = (curInterval) => {
        fetch(/*config.serverAddr +*/ "http://localhost:8088/process?pid=" + pid)
            .then(res => res.json())
            .then(res => {
                const date = new Date();
                const curTime = date.getMinutes() + ":" + date.getSeconds();
                cpuData.push({x:curTime, y:res.cpuUsage});
                memData.push({x:curTime, y:res.memoryUsage});
                console.log("fetch data [" + chartId + "]");
                console.log(series)
                ReactApexChart.exec(chartId, 'updateSeries', series);
            }, (error) => {
                console.log(error);
                clearInterval(curInterval);
            });
    }
    fetchData();

    useEffect(()=> {
        const curInterval = setInterval(()=> {
            if (cpuData.length > xRange) {
                cpuData.splice(0, 1);
                memData.splice(0, 1);
            }
            fetchData(curInterval, chartId);
        }, 2000);
        console.log("start interval: " + curInterval + "," + chartId);

        return ()=> {
            console.log("clear interval: " + curInterval + "," + chartId);
            clearInterval(curInterval);
        }
    }, [pid]);

    return (
        <>
            <Chart options={options} series={series} width={"100%"} height={"100%"}/>
        </>
    );
}