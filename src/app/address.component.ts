import { Component, Input } from '@angular/core';

import { Address } from './address.model';
import { Customer } from './customer.model';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html',
})
export class AddressComponent {
    @Input() address: Address;

    public regions = ['East', 'West', 'North', 'South', 'Midwest'];
    public states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
}
