import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from "@angular/forms";

import { DataService } from '../data.service';
import { Data } from '../data';
import { DataChart } from '../data_chart';

@Component({
    selector: 'app-data-detail',
    templateUrl: './data-detail.component.html',
    styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {

    @ViewChild('chart') elChart: ElementRef;

    data: Array<Data>;
    name: string;
    date: string;
    data_chart: DataChart;

    form: any;
    select_values = [{"name":"luxx"}, {"name":"temp"},{"name":"red"},{"name": "green"},{"name": "blue"},{"name":"clear"}];

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private location: Location
    ) { }

    ngOnInit() {
        this.getDataUnique();
    }

    getDataUnique(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.dataService.getDataUnique(id)
            .subscribe(data => {
                this.data = data;
                this.data.forEach(element => {
                    this.name = element.name;
                    this.date = element.timestamp;
                });
            });
    }

    generatePlot() {
        this.elChart.nativeElement.value = '';

        this.processData();
        this.chart();
    }

    processData() {
        this.data_chart = new DataChart();
        let count = [], luxx = [], temp = [], red = [], green = [], blue = [], clear = [];

        
        var values_array = [];
        var values = [];

        this.data.forEach(element => {
            this.data_chart.depth = [+element.depth, +element.depth + 0.7];
            values_array.push(element.values);
        });

        this.data_chart.depth.forEach(element => {

            values_array.forEach(element => {
                count = [], luxx = [], temp = [], red = [], green = [], blue = [], clear = [];
                values = element;

                values.forEach(val => {

                    count.push([Number(val[0].count), Number(val[0].count)]);
                    luxx.push([Number(val[1].temp), Number(val[1].temp)]);
                    temp.push([Number(val[2].luxx), Number(val[2].luxx)]);
                    red.push([Number(val[3].red), Number(val[3].red)]);
                    green.push([Number(val[4].green), Number(val[4].green)]);
                    blue.push([Number(val[5].blue), Number(val[5].blue)]);
                    clear.push([Number(val[6].clear), Number(val[6].clear)]);
                });
                this.data_chart.count = count;
                this.data_chart.luxx = luxx;
                this.data_chart.temp = temp;
                this.data_chart.red = red;
                this.data_chart.green = green;
                this.data_chart.blue = blue;
                this.data_chart.clear = clear;
            });


        });
        console.log(this.data_chart);
    }

    chart() {
        let traces = [];
        let i;
        const element = this.elChart.nativeElement;

        for (i in this.data_chart.depth) {
            let trace = {};
            trace['x'] = this.data_chart.depth[i];
            trace['z'] = this.data_chart.red[i];
            trace['y'] = this.data_chart.count[i];
            trace['colorscale'] = [
                [
                  0,
                  'rgb(70,70,255)'
                ],
                [
                  1,
                  'rgb(70,70,255)'
                ]
              ],
            trace['name'] = "red",
            trace['type'] = 'surface',
            trace['showscale'] = false,
            traces.push(trace);

            trace = {};
            trace['x'] = this.data_chart.depth[i];
            trace['z'] = this.data_chart.green[i];
            trace['y'] = this.data_chart.count[i];
            trace['colorscale'] = [
                [
                  0,
                  'rgb(255,8,0)'
                ],
                [
                  1,
                  'rgb(255,8,0)'
                ]
              ],
            trace['name'] = "green",
            trace['type'] = 'surface',
            trace['showscale'] = false,
            traces.push(trace);

            trace = {};
            trace['x'] = this.data_chart.depth[i];
            trace['z'] = this.data_chart.blue[i];
            trace['y'] = this.data_chart.count[i];
            trace['colorscale'] = [
                [
                  0,
                  'rgb(0,168,107)'
                ],
                [
                  1,
                  'rgb(0,168,107)'
                ]
              ],
            trace['name'] = "blue",
            trace['type'] = 'surface',
            trace['showscale'] = false,
            traces.push(trace);
        };
        
        const data = traces;

        const layout = {
            showlegend: true,
            title: 'TCS34725 plot, date: ' + this.date,
            autosize: true,
            width: 800,
            height: 800,
            scene: {
                xaxis: { autorange: 'reversed', title: 'depth (cm)' },
                yaxis: { title: 'time (ms)' },
                zaxis: { title: 'Ed (1/m)' }
            }
        };

        Plotly.newPlot(element, data, layout);
    }

    goBack(): void {
        this.location.back();
    }
}
