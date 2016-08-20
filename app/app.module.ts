import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {PayorsComponent} from './payors.component'

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,PayorsComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}