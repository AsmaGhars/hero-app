import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private Http : HttpClient) {
    
   }
   private url = 'http://127.0.0.1:3000/';
  
  createNewHero(hero:any){
    return this.Http.post(this.url + 'hero/create ', hero);
  }

  getAllHeros(){
    return this.Http.get(this.url+'hero/all');
  }

  deleteHero(id :any){
    return this.Http.delete(this.url + 'hero/supprimer/'+id);
  }

  getByIdHero(id : any){
    return this.Http.get(this.url + 'hero/getbyid/'+id);
  }


  updateHero(id :any , hero : any){
    return this.Http.put(this.url + 'hero/update/' + id , hero);
  }
}
