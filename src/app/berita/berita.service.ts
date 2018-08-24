import { Injectable } from '@angular/core';
import { FeathersService } from './../feathers.service';
import { HttpClient } from '@angular/common/http';
import {getResultsByKey, getUniqueKeys,BatchLoader} from '@feathers-plus/batch-loader';
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
  simpan$(data){
    this.feathers.service('berita').create(data);
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
}
