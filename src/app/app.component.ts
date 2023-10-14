import { Component} from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Juan';
  name2= '';
  buttonDisabled = false;
  inputValue = 'Initial value';
  progressValue = 19;
  names = ['Juan', 'Pedro', 'Luis'];
  newName = '';

  register={
    name: '',
    password: '',
    email: ''
  };

  box ={
    width: 100,
    height: 100,
    background: 'red'
  };

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/product.png',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/product.png',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/product.png',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/product.png',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: '../assets/images/product.png',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: '../assets/images/product.png',
    }
  ];

  onClick() {
    console.log('click');
  }

  onInput(event: any) {
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){    
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }
}
