import { Component, OnInit } from '@angular/core';
import { PayorsService } from './payors.service';
import {Payor} from './Payor'
@Component({
    selector: 'insurance-list',
    templateUrl: 'payors.component.html',
    moduleId:module.id,
    providers:[PayorsService]
})
export class PayorsComponent implements OnInit {
    
    payors: Payor[]

    constructor(private payorsService: PayorsService) { 
        this.payors = payorsService.getPayors()
    }

    ngOnInit() { }


}