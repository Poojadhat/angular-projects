import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  openform=false;
  name: any;
  calorie:any=0;
  c:number=0;
  
  image: any;
  Food: any;
  searchText!:string;
  Foods = [
    { calories: 105, names: 'Banana', images: 'https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=' },
    { calories: 208, names: 'Salmon' , images: 'https://media.istockphoto.com/id/532571540/photo/raw-salmon-on-baking-paper.jpg?s=2048x2048&w=is&k=20&c=bmPJQ1T7Y8zzCCwNq4ei5eqClDQ0dEwXeeM-fZthSPw='},
  { calories: 257, names: 'Cake' , images: 'https://media.istockphoto.com/id/1187830875/photo/confectioner-decorating-chocolate-cake-close-up.jpg?s=612x612&w=0&k=20&c=sAUop7R4pohc-Pghb3CqVJnFE44p2phGi47z7pjK4Lc='},
    { calories: 81, names: 'Apple' , images: 'https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8=' },
    { calories: 330, names: 'Salad' , images: 'https://media.istockphoto.com/id/175197961/photo/salad-plate.jpg?s=2048x2048&w=is&k=20&c=IyR_YxtKzMkXMZZfZvLBqx3q1j0vZUyNuo_ga0YpKzQ='},
    { calories: 114, names: 'Grapes' , images: 'https://media.istockphoto.com/id/842928214/photo/fresh-grapes-in-the-basket.jpg?s=2048x2048&w=is&k=20&c=eHp5te1BEzbjrp_IJa6OfBLAedTPpATXgWVAiOhHXU8='},
    
    { calories: 103, names: 'Biscuit' , images: 'https://media.istockphoto.com/id/157308370/photo/homemade-chocolate-chip-cookies-stacked-tower-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=qIiHu_6eeYMuW71y1iVD8oJCGwWkDhPEAjPXrWoA68o='},
{ calories: 45, names: 'Strawberries' , images:'https://media.istockphoto.com/id/471674664/photo/two-strawberries-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=a5g5o0t4M5qGInHo4gKNa07TRdz0HHzZ31UmGW9HuBk='},
{ calories: 228, names: 'Dates' , images:'https://media.istockphoto.com/id/542563100/photo/bowl-of-dried-dates.jpg?s=612x612&w=0&k=20&c=rkOz3RKVqvVCfL98CSSW52yzwmAJfzFXh81xHH8nYmU='}
   
  ];
  onClickOpenForm(){
    this.openform=true;
    return this.openform;
  }
  AddName(a: any){
  this.name=a.target.value;

  }
  AddCalories(b: any){
 this.calorie=b.target.value;
 
  }
  AddImage(a: any){
this.image=a.target.value;
  }
  AddFood(){
    this.openform=false;
    
    const a = {
      calories: this.calorie,
  names: this.name,
  images: this.image,
};
    this.Foods.push(a);
  }
  AddCount(cal: string | number){
this.c=+this.c +  +cal;
  }
 
}