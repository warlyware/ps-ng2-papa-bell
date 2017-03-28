import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    constructor() { ; }

    public log(stringToLog: string) {
        console.log(stringToLog);
    }
}
