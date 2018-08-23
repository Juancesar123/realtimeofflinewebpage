import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BeritaService } from './../../berita/berita.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BeritaInterface } from './../beritaInterface';
import { PaginationInstance } from 'ngx-pagination';
@Component({
  selector: 'app-listberita',
  templateUrl: './listberita.component.html',
  styleUrls: ['./listberita.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListberitaComponent implements OnInit {
  status: boolean = false;
  messages$: Observable<any[]>;
  users$: Observable<any[]>;
  title:string;
  deskripsisingkat:string;
  deskripsilengkap:string;
  value;
  p:number = 1;
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
  onfilechange(){
    
  }
  ngOnInit() {
   
  }

  simpan(){
    let data = {
      "title":this.title,
      "deskripsi":this.deskripsisingkat,
      "deskripsipanjang":this.deskripsilengkap
    }
    this.data.simpan$(data)
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
}
