import { Component, OnInit } from '@angular/core';

import { Customer } from './customer.model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
    moduleId: module.id,
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
    styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
    public customers: Customer[];
    public currentCustomer: Customer;

    constructor(
        private dataService: DataService,
        private loggerService: LoggerService
    ) { ; }

    public ngOnInit() {
        this.loggerService.log('Getting customers...');
        this.customers = this.dataService.getCustomers();
    }

    public shift(increment: number) {
        let index = this.customers.findIndex(customer => customer === this.currentCustomer) + increment;
        index = Math.min(this.customers.length - 1, Math.max(0, index));
        this.currentCustomer = this.customers[index];
    }
}
