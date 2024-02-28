import { SharedService } from './../shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  hero = {
    name : '',
    power : 0
  }

  image:any;

  selectImage(e:any){
    this.image = e.target.files[0];
  }

  ajout(){
    let formData = new FormData();
    formData.append('name',this.hero.name);
    formData.append('power',this.hero.power.toString());
    formData.append("image", this.image);
    this._shared.createNewHero(formData)
      .subscribe(
        res=>{
          this.hero = {
            name : '',
            power : 0
          }
        },
        err=>{
          console.log(err);
        }
      );
  }

constructor(private _shared : SharedService){

}
ngOnInit():void{

}

}
