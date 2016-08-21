import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Payor} from './payor'


@Component({
    moduleId: module.id,
    selector: 'payor-form',
    templateUrl: 'payor.component.html'
})
export class PayorComponent implements OnInit {
    
    @Input() payorToBeEdited : Payor;
    @Output() onPayorAdded = new EventEmitter<Payor>();
   
   private  payor: Payor;

    constructor() { 
        this.payor = new Payor(1, "");
    }
    addPayor(){
        this.onPayorAdded.emit(this.payor)

    }
    ngOnInit() { }
}