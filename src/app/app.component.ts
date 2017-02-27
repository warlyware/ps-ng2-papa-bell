import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: </label>{{street}}
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
  name = 'Tom Bombadil';
  city = 'Anytown';
  street = '123 Main St';
  region = 'east';
  hideAddress = false;

  public changeAddress() {

  }

}
