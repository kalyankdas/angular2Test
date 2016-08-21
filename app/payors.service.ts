import { Injectable } from '@angular/core';
import {Payor} from './payor'

@Injectable()
export class PayorsService {

    constructor() {

     }
     getPayors(){
         return [
             new Payor(123,'Cigna'),
             new Payor(234, '456')
         ]
     }
}