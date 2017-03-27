import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <customer-list></customer-list>
    `
})

export class AppComponent implements OnInit {
    constructor() { }

    public title: string = 'App Name';

    public ngOnInit() { }
}
