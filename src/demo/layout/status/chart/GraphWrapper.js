import React, { Component } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

class GraphWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "realtime",
                    height: 350,
                    type: 'line',
                    animations: {
                        enabled: true,
                        easing: "linear",
                        dynamicAnimation: {
                            speed: 1000
                        }
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
                    curve: "smooth"
                },
                title: {
                    text: "dynamic updating chart",
                    align: "left"
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: "datetime",
                    range: 10
                },
                yaxis: {
                    max: 100,
                    min: 0
                },
                legend: {
                    show: false
                }
            },
            series: [{ data: [] }]
        };
    }

    componentDidMount() {
        this.updateInterval = setInterval(() => this.updateData(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval);
    }

    resetData = () => {
        const { data } = this.state.series[0];

        this.setState({
            series: [{ data: data.slice(data.length - 10, data.length) }]
        });
    };

    updateData = () => {
        const x = Math.floor(new Date().getTime() / 1000);
        const y = Math.floor(Math.random() * 100);

        let { data } = this.state.series[0];
        data.push({ x, y });

        console.log(data);

        this.setState({ series: [{ data }] }, () =>
            ApexCharts.exec("realtime", "updateSeries", this.state.series)
        );

        // stop data array from leaking memory and growing too big
        if (data.length > 10) this.resetData();
    };

    render() {
        const { options, series } = this.state;

        return (
            <>
                <div className="mixed-chart">
                    <Chart options={options} series={series} type="line" height="350" />
                </div>
                <button onClick={this.resetData}>RESET</button>
            </>
        );
    }
}

export default GraphWrapper;
