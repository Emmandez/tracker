import { Component } from '@angular/core';
import { device } from 'platform';
import { Page } from 'ui/page';
import { TranslateService } from '@ngx-translate/core';




@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    public myAppText = 'Hello';

    constructor(private page: Page,
        private translateService: TranslateService){
        page.actionBarHidden = true;
        page.backgroundSpanUnderStatusBar = true;
        
        this.myAppText = device.language;
        translateService.setDefaultLang('en');  
        //verify what do we get from device.language
        //set the current region to the i18n files
        //uncomment the next line
        translateService.use(device.language);  

        console.log("RPS message log");
        console.warn("RPS message warn");
        console.error("RPS message error");
        
    }
}
