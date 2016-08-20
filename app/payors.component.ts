import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'insurance-list',
    templateUrl: 'payors.component.html',
    moduleId:module.id
})
export class PayorsComponent implements OnInit {
    constructor() { 
        console.log("HI");
    }

    ngOnInit() { }

}