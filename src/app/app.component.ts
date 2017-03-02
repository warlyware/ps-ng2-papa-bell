import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.tpl.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  public customer: Customer = {
    id: 1,
    name: 'Tom Bombadil',
    address: {
      city: 'Anytown',
      street: '123 Main St',
      state: 'VA',
      region: 'east'
    }
  };

  public hideAddress = false;
}
