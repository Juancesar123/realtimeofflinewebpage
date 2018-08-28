import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BeritaService } from './../../berita/berita.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BeritaInterface } from './../beritaInterface';
import { PaginationInstance } from 'ngx-pagination';
import { Configendpoint } from './../../config/configendpoint';
declare var $:any;
@Component({
  selector: 'app-listberita',
  templateUrl: './listberita.component.html',
  styleUrls: ['./listberita.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListberitaComponent implements OnInit {
  status: boolean = false;
  status2: boolean = false;
  messages$: Observable<any[]>;
  title:string;
  deskripsisingkat:string;
  fileToUpload;
  deskripsilengkap:string;
  apigambar:string = Configendpoint.endpointapi;
  id:string
  constructor(public data: BeritaService) {  
    this.messages$ = data.messages$()
    .pipe(map( m => m))
    //use m['data'] for include array
    // our data is paginated, so map to .data
    console.log(this.messages$)
   }
   public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };
  ngOnInit() {
   
  }
  //catch file
  onFileChange(event) {
    if(event.target.files.length > 0) {
        //get name file etc
        this.fileToUpload = event.target.files[0];
      }
  }
  simpan(){
    let data = {
      "title":this.title,
      "deskripsi":this.deskripsisingkat,
      "deskripsipanjang":this.deskripsilengkap,
      "gambar": "img/"+this.fileToUpload.name
    }
    this.data.simpan$(data,this.fileToUpload).subscribe( val =>{
      console.log('sasa');
    })
  }
  //for toggle modals
  tooglemodals(){
    this.status = !this.status
  }
  /*
  for best perfomance angular 6.
  for more details please read:
  https://blog.angular.io/3-tips-for-angular-runtime-performance-from-the-real-world-d467fbc8f66e
  */
  trackById(index,item){
    return item._id
  }
  Delete(item){
    let id = item._id;
    this.data.delete$(id);
  }
  UpdateForm(item){
    this.status2 = !this.status2
    this.deskripsisingkat = item.deskripsi
    this.deskripsilengkap = item.deskripsipanjang
    this.title = item.title
    this.id = item._id
  }
  tooglemodalsubal(){
    this.status2 = !this.status2
  }
  ActionUpdate(){
    if(this.fileToUpload == null){
      let data = {
        "title":this.title,
        "deskripsi":this.deskripsisingkat,
        "deskripsipanjang":this.deskripsilengkap
      }
      let id = this.id
      this.data.UbahDataNoimage$(id,data)
      this.deskripsisingkat = ''
      this.deskripsilengkap = ''
      this.title = ''
    }else{
      let data = {
        "title":this.title,
        "deskripsi":this.deskripsisingkat,
        "deskripsipanjang":this.deskripsilengkap,
        "gambar": "img/"+this.fileToUpload.name
      }
      let id = this.id
      this.data.UbahDataImage$(data,this.fileToUpload,id).subscribe( val =>{
        this.deskripsisingkat = ''
        this.deskripsilengkap = ''
        this.title = ''
      })
    }
  }
}
