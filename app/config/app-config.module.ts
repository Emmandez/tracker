import { NgModule, InjectionToken } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import  { AppConfig } from '../core/models/core/app-config.model';


const appConfig = <AppConfig> require(enviroment.appConfigFile);

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');


@NgModule({
    providers: [
        { provide: APP_CONFIG, useValue: appConfig }
    ],
})
export class AppConfigModule{}

