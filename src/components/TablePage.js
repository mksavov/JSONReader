import React from "react";
import {Bar} from "react-chartjs-2";
import data from './data/2021-01-09.json'

export default class TablePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            GPUUti: {
            labels: [data["GPU 0"].timestamp, data["GPU 1"].timestamp],
            datasets: [
                {
                    label: 'GPU Utilization %',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderWidth: 2,
                    data: [data["GPU 0"]["GPU Utilization"].slice(0, 1), data["GPU 1"]["GPU Utilization"].slice(0, 1)]

                }]},
        GPUMemory:
                {
                    labels: [data["GPU 0"].timestamp, data["GPU 1"].timestamp],
                    datasets: [
                        {
                    label: 'GPU Memory MiB',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 2,
                    data: [data["GPU 0"]["GPU Memory"].slice(0,2),data["GPU 1"]["GPU Memory"].slice(0,2)]
                }]},
                CPUUti:
                {
                    labels: [data["GPU 0"].timestamp, data["GPU 1"].timestamp],
                    datasets: [
                        {
                    label: 'CPU Utilization %',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 2,
                    data: [data["GPU 0"]["CPU Utilization"].slice(0,1),data["GPU 1"]["CPU Utilization"].slice(0,1)]
                }]},
                Memory:
                {
                    labels: [data["GPU 0"].timestamp, data["GPU 1"].timestamp],
                    datasets: [
                        {
                    label: 'Memory MiB',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    borderWidth: 2,
                    data: [data["GPU 0"]["Memory"].slice(0,4),data["GPU 1"]["Memory"].slice(0,4)]
                }
            ]}
        };
    }
    render() {
        return (
            <div>
            <div style={{display: "table"}}>
            <div style={{display: "table-cell", width: "770px", height: "385px"}}>
                        <Bar
                            data={this.state.GPUUti}
                            options={{
                                title: {
                                    display: true,
                                    text: 'GPU Utilization',
                                    fontSize: 20,
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                            />
            </div>
            <div style={{display: "table-cell", width: "770px", height: "385px"}}>
                            <Bar
                                data={this.state.GPUMemory}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'GPU Memory',
                                        fontSize: 20,
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
            </div>
                <div style={{display: "table-cell", width: "770px", height: "385px"}}>
                    <Bar
                        data={this.state.CPUUti}
                        options={{
                            title: {
                                display: true,
                                text: 'CPU Utilization',
                                fontSize: 20,
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
            </div>
                <div style={{display: "block", width: "770px", height: "385px"}}>
                    <Bar
                        data={this.state.Memory}
                        options={{
                            title: {
                                display: true,
                                text: 'Memory',
                                fontSize: 20,
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}