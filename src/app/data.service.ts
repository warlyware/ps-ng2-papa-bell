import { Injectable } from '@angular/core';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';

@Injectable()
export class DataService {
    constructor(
        private loggerService: LoggerService
    ) { }

    public getCustomers() {
        console.log(`There are ${createTestCustomers().length} customers`);
        return createTestCustomers();
    }
}
