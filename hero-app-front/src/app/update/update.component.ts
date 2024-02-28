import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  hero:any;
  id:any;


  

  update() {
    console.log('Updating hero...', this.hero);
    this._shared.updateHero(this.id, this.hero)
    .subscribe(
      res => {
        console.log('Update successful:', res);
        this.router.navigate(['/list']);
      },
      err => {
        console.error('Update failed:', err);
      }
    );
  }
  
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    console.log('ID:', this.id);
  
    this._shared.getByIdHero(this.id).subscribe(
      res => {
        this.hero = res;
        console.log('Hero details:', this.hero);
      },
      err => {
        console.log(err);
      }
    );
  }
  

  constructor(private act: ActivatedRoute , private _shared : SharedService , private router : Router){

  }
  
}
