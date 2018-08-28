import { Injectable } from '@angular/core';
import { FeathersService } from './../feathers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {getResultsByKey, getUniqueKeys,BatchLoader} from '@feathers-plus/batch-loader';
import { Configendpoint } from './../config/configendpoint';
@Injectable({
  providedIn: 'root'
})
export class BeritaService {

  constructor(public feathers:FeathersService, public http:HttpClient) { }
  messages$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (<any>this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('berita'))
      .watch()
      .find();
      
  }
  messagesdetail$(id) {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (<any>this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('berita'))
      .watch()
      .find({
        query:{
          _id : id
        }
      });
      
  }
  simpan$(data,fileToUpload: File){
    let header = new HttpHeaders({'Authorization': localStorage.getItem('feathers-jwt')});
    let options = {headers: header};
    const formData: FormData = new FormData();
    formData.append('gambar', fileToUpload, fileToUpload.name);
    formData.append('title', data.title);
    formData.append('deskripsi', data.deskripsi);
    formData.append('deskripsipanjang', data.deskripsipanjang);
    formData.append('gambar', data.gambar);
    //this.feathers.service('berita').create(data);
    return this.http.post(Configendpoint.endpointapi+'/berita',formData,options)
  }
  getdata$(){
    new BatchLoader(async keys => {
      const postRecords = await this.feathers.service('berita').watch().find();
    },
    { batch: false, cache: false }
  );
  }
  ClearCache(){
    return this.http.get('https://realtimeapi.rdlvindonesia.com/cache/clear');
  }
  delete$(id){
    this.feathers.service('berita').remove(id);
  }
  UbahDataNoimage$(id,data){
    this.feathers.service('berita').patch(id,data)
  }
  UbahDataImage$(data,fileToUpload: File,id){
  let header = new HttpHeaders({'Authorization': localStorage.getItem('feathers-jwt')});
  let options = {headers: header};
  const formData: FormData = new FormData();
  formData.append('gambar', fileToUpload, fileToUpload.name);
  formData.append('title', data.title);
  formData.append('deskripsi', data.deskripsi);
  formData.append('deskripsipanjang', data.deskripsipanjang);
  formData.append('gambar', data.gambar);
  //this.feathers.service('berita').create(data);
  return this.http.patch(Configendpoint.endpointapi+'/berita',formData,options)
  }
}
