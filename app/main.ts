// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from 'nativescript-angular/platform-common';
import { AppModule } from "./app.module";



platformNativeScriptDynamic().bootstrapModule(AppModule);
