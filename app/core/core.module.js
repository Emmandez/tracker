"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule has already been loaded. Import coreModule into the AppModule only');
        }
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [],
            declarations: [],
            providers: [],
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQVE3RDtJQUNJLG9CQUM0QixZQUF3QjtRQUVoRCxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBRSwrRUFBK0UsQ0FBQyxDQUFBO1FBQ3JHLENBQUM7SUFDTCxDQUFDO0lBUFEsVUFBVTtRQU50QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFFLEVBQUU7WUFDaEIsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUdPLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUFlLFVBQVU7T0FGM0MsVUFBVSxDQVF0QjtJQUFELGlCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW10sXHJcbiAgICBleHBvcnRzOiBbXSxcclxuICAgIGRlY2xhcmF0aW9uczogW10sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZXtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZVxyXG4gICAgKXtcclxuICAgICAgICBpZihwYXJlbnRNb2R1bGUpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdDb3JlTW9kdWxlIGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLiBJbXBvcnQgY29yZU1vZHVsZSBpbnRvIHRoZSBBcHBNb2R1bGUgb25seScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==