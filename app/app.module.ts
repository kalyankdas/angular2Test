import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms';
import {AppComponent} from './app.component'
import {PayorComponent} from './payor.component'
import {PayorsComponent} from './payors.component'

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent,PayorsComponent,PayorComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}