export class DataChart {
  _name: any[] = [];
  _ip: any[] = [];
  _mac: any[] = [];
  _depth: any[] = [];
  _measurement_time: any[] = [];
  _timestamp: any[] = [];
  _latitude: any[] = [];
  _longitude: any[] = [];
  _values: any[] = [];

  _count:  any[] = [];
  _luxx:  any[] = [];
  _temp:  any[] = [];
  _red:  any[] = [];
  _green:  any[] = [];
  _blue:  any[] = [];
  _clear:  any[] = [];


  public constructor() { };

  get name(): any {
    return this._name;
  }

  set name(name : any) {
    this._name.push(name);
  }

  get ip(): any {
    return this._ip;
  }

  set ip(ip : any) {
    this._ip.push(ip);
  }

  get mac(): any {
    return this._mac;
  }

  set mac(mac : any) {
    this._mac.push(mac);
  }

  get depth(): any {
    return this._depth;
  }

  set depth(depth : any) {
    this._depth.push(depth);
  }

  get measurement_time(): any {
    return this._measurement_time;
  }

  set measurement_time(measurement_time : any) { 
    this._measurement_time.push(measurement_time);
  }

  get timestamp(): any {
    return this._timestamp;
  }

  set latitude(latitude : any) { 
    this.latitude.push(latitude);
  }

  get latitude(): any {
    return this._latitude;
  }

  set longitude(longitude : any) { 
    this.longitude.push(longitude);
  }

  get longitude(): any {
    return this._longitude;
  }

  set values(values : any) {
    this._values.push(values);    
  }

  get values(): any {
    return this._values;
  }

  ///////////////////////////
  get count(): any {
    return this._count;
  }

  set count(count : any) {
    this._count.push(count);
  }

  get luxx(): any {
    return this._luxx;
  }

  set luxx(luxx : any) {
    this._luxx.push(luxx);
  }

  get temp(): any {
    return this._temp;
  }

  set temp(temp : any) {
    this._temp.push(temp);
  }

  get red(): any {
    return this._red;
  }

  set red(red : any) {
    this._red.push(red);
  }

  get green(): any {
    return this._green;
  }

  set green(green : any) {
    this._green.push(green);
  }

  get blue(): any {
    return this._blue;
  }

  set blue(blue : any) {
    this._blue.push(blue);
  }

  get clear(): any {
    return this._clear;
  }

  set clear(clear : any) {
    this._clear.push(clear);
  }

}