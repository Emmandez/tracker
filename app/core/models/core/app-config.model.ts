import { LoggingLevelEnum } from '../enums/logging-level.enum';
import { TypeProvider } from '@angular/core';
export type AppType = 'Ns' | 'Web';

export interface AppConfig {
    appType:AppType;
    apiEndPoint: string;
    loggingEnable: boolean;
    loggingLeve: LoggingLevelEnum;
    storageServiceClass: TypeProvider;
}