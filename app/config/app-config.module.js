"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var enviroment_1 = require("../enviroments/enviroment");
var appConfig = require(enviroment_1.enviroment.appConfigFile);
exports.APP_CONFIG = new core_1.InjectionToken('app.config');
var AppConfigModule = /** @class */ (function () {
    function AppConfigModule() {
    }
    AppConfigModule = __decorate([
        core_1.NgModule({
            providers: [
                { provide: exports.APP_CONFIG, useValue: appConfig }
            ],
        })
    ], AppConfigModule);
    return AppConfigModule;
}());
exports.AppConfigModule = AppConfigModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCx3REFBdUQ7QUFJdkQsSUFBTSxTQUFTLEdBQWUsT0FBTyxDQUFDLHVCQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFbkQsUUFBQSxVQUFVLEdBQUcsSUFBSSxxQkFBYyxDQUFZLFlBQVksQ0FBQyxDQUFDO0FBUXRFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixlQUFlO1FBTDNCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxrQkFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7YUFDL0M7U0FDSixDQUFDO09BQ1csZUFBZSxDQUFFO0lBQUQsc0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlbnZpcm9tZW50IH0gZnJvbSAnLi4vZW52aXJvbWVudHMvZW52aXJvbWVudCc7XHJcbmltcG9ydCAgeyBBcHBDb25maWcgfSBmcm9tICcuLi9jb3JlL21vZGVscy9jb3JlL2FwcC1jb25maWcubW9kZWwnO1xyXG5cclxuXHJcbmNvbnN0IGFwcENvbmZpZyA9IDxBcHBDb25maWc+IHJlcXVpcmUoZW52aXJvbWVudC5hcHBDb25maWdGaWxlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEFwcENvbmZpZz4oJ2FwcC5jb25maWcnKTtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBBUFBfQ09ORklHLCB1c2VWYWx1ZTogYXBwQ29uZmlnIH1cclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb25maWdNb2R1bGV7fVxyXG5cclxuIl19