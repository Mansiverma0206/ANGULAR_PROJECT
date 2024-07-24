import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name = "Mansi Verma" ;
  
product : any = {
  name :'iPhone',
  price: 999,
  color:'Red',
  discount :8.5,
  inStock : 10,
  pImage :'../../assets/phone.webp'

}

getDisCountedPrice()
{
  return this.product.price - (this.product.price * this.product.discount/100)
}

onNameChange(event:any){
  // this.name = event.target.value
  // console.log(event.target.value)
}

}
