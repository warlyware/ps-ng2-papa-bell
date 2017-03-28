import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Address } from './address.model';
import { Customer } from './customer.model';

@Component({
    moduleId: module.id,
    selector: 'customer-detail',
    templateUrl: 'customer-detail.component.html',
})
export class CustomerDetailComponent {

    @Input() currentCustomer: Customer;
    @Output() shift = new EventEmitter<number>();

    public address: Address;
    public showAddress = true;

    public goLeft() {
        this.shift.emit(-1);
    }

    public goRight() {
        this.shift.emit(1);
    }
}
