import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{customer.name}}</h1>

    <input [(ngModel)]="customer.name" />
    <label>
      Hide Address:
      <input [(ngModel)]="hideAddress" type="checkbox" />
    </label>

    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: <input [(ngModel)]="customer.address.street" /></label>
      </fieldset>
      <fieldset>
        <label>City: </label>{{city}}
      </fieldset>
      <fieldset>
        <label [style.color]="color">Region</label>
        <select (change)="changeRegion($event.target.value)">
          <option>north</option>
          <option>south</option>
          <option>east</option>
          <option>west</option>
        </select>
      </fieldset>
    </div>
  `,
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
