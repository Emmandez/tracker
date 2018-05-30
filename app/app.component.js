"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var page_1 = require("ui/page");
var core_2 = require("@ngx-translate/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(page, translateService) {
        this.page = page;
        this.translateService = translateService;
        this.myAppText = 'Hello';
        page.actionBarHidden = true;
        page.backgroundSpanUnderStatusBar = true;
        this.myAppText = platform_1.device.language;
        translateService.setDefaultLang('en');
        //verify what do we get from device.language
        //set the current region to the i18n files
        //uncomment the next line
        translateService.use(platform_1.device.language);
        console.log("RPS message log");
        console.warn("RPS message warn");
        console.error("RPS message error");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page,
            core_2.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMscUNBQWtDO0FBQ2xDLGdDQUErQjtBQUMvQiw0Q0FBdUQ7QUFVdkQ7SUFHSSxzQkFBb0IsSUFBVSxFQUNsQixnQkFBa0M7UUFEMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSHZDLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFJdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztRQUV6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0Qyw0Q0FBNEM7UUFDNUMsMENBQTBDO1FBQzFDLHlCQUF5QjtRQUN6QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsaUJBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBbkJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FLNEIsV0FBSTtZQUNBLHVCQUFnQjtPQUpyQyxZQUFZLENBb0J4QjtJQUFELG1CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gICAgcHVibGljIG15QXBwVGV4dCA9ICdIZWxsbyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSl7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgcGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubXlBcHBUZXh0ID0gZGV2aWNlLmxhbmd1YWdlO1xuICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKCdlbicpOyAgXG4gICAgICAgIC8vdmVyaWZ5IHdoYXQgZG8gd2UgZ2V0IGZyb20gZGV2aWNlLmxhbmd1YWdlXG4gICAgICAgIC8vc2V0IHRoZSBjdXJyZW50IHJlZ2lvbiB0byB0aGUgaTE4biBmaWxlc1xuICAgICAgICAvL3VuY29tbWVudCB0aGUgbmV4dCBsaW5lXG4gICAgICAgIHRyYW5zbGF0ZVNlcnZpY2UudXNlKGRldmljZS5sYW5ndWFnZSk7ICBcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlJQUyBtZXNzYWdlIGxvZ1wiKTtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUlBTIG1lc3NhZ2Ugd2FyblwiKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJQUyBtZXNzYWdlIGVycm9yXCIpO1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=