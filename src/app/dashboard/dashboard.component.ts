import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';
import { Data } from '../data';
import { DataService } from '../data.service';
import L = require('leaflet');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  data_list: Data[] = [];

  timestamp_list: Array<any> = [];
  data_gps: Array<any> = [];
  name_list: Array<any> = [];
  info: Array<any> = [];

  mymap: any;
  tempMarker: any;
  markersname: any;

  link: null;
  is_data: boolean = false;

  constructor(private dataService: DataService, private leafletModule: LeafletModule,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.load_map();
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.data_list = data;
      this.data_list.forEach(element => {
        if (!this.timestamp_list.includes(element.timestamp)) {
          this.timestamp_list.push(element.timestamp);

          var marker = L.marker([element.latitude, element.longitude], {
            icon: icon({
              iconSize: [25, 41],
              iconAnchor: [13, 41],
              iconUrl: 'leaflet/marker-icon.png',
              shadowUrl: 'leaflet/marker-shadow.png'
            })
          }).addTo(this.mymap);

          var popupOptions = {};
          var popup = L.popup(popupOptions, marker);

          this.mymap.on('popupopen', function (e) {
            var marker = e.popup._source;
          });

          marker
            .bindPopup(element.name)
            .on('popupopen', function (popup) {
              this.is_data = true;
              this.link = popup.target._popup._content;
            });
        }
      });
    });
  }

  load_map() {
    this.mymap = L.map('leafletmap').setView([20.0, 5.0], 2);

    //Set Map-Layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 20,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(this.mymap);
  }
}





    //mymap.off();
    //mymap.remove();

    // Layers control object with our two base layers and the three overlay layers
    /*this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            subdomains: ['a', 'b', 'c'],
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          })
      ],
      zoom: 2,
      minZoom: 2,
      center: [20.0, 5.0]
    };

    // Marker for the top of Mt. Ranier
    this.summit = marker([46.8523, -121.7603], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    });
*/





    /*
        // Define our base layers so we can reference them multiple times
        this.Esri_WorldImagery = tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });
    
        this.Stamen_TonerLabels = tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.{ext}', {
          attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          subdomains: 'abcd',
          minZoom: 0,
          maxZoom: 20,
          ext: 'png'
        });
    
        this.googleMaps = tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          detectRetina: true
        });
    
        this.googleHybrid = tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          detectRetina: true
        });
    
        // Marker for the top of Mt. Ranier
        this.summit = marker([46.8523, -121.7603], {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'leaflet/marker-icon.png',
            shadowUrl: 'leaflet/marker-shadow.png'
          })
        });
    
        // Marker for the parking lot at the base of Mt. Ranier trails
        this.paradise = marker([46.78465227596462, -121.74141269177198], {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'leaflet/marker-icon.png',
            shadowUrl: 'leaflet/marker-shadow.png'
          })
        });
    
    
    
        // Layers control object with our two base layers and the three overlay layers
        this.layersControl = {
          baseLayers: {
            'Esri_WorldImagery': this.Esri_WorldImagery,
            'Google Maps': this.googleMaps,
            'Google Hybrid': this.googleHybrid
          },
          overlays: {
            'Mt. Rainier Summit': this.summit,
            'Mt. Rainier Paradise Start': this.paradise
          }
        };
        this.options = {
          layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
              { maxZoom: 18, attribution: '...' })
          ],
          zoom: 5,
          center: latLng(46.879966, -121.726909)
        };
    
    
        */

