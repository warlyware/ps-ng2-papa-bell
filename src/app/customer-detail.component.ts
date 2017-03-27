import { Component, Input } from '@angular/core';

import { Address } from './address.model';
import { Customer } from './customer.model';

@Component({
    moduleId: module.id,
    selector: 'customer-detail',
    templateUrl: 'customer-detail.component.html',
})
export class CustomerDetailComponent {

    @Input() currentCustomer: Customer;

    public address: Address;
    public showAddress = true;
}
