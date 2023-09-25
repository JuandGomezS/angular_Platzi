import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Juan';
  buttonDisabled = false;
  inputValue = 'Initial value';
  progressValue = 19;

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
}
