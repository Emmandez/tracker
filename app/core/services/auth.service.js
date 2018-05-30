"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_module_1 = require("../../config/app-config.module");
var AuthService = /** @class */ (function () {
    function AuthService(config) {
        this.config = config;
    }
    Object.defineProperty(AuthService.prototype, "loginUrl", {
        get: function () { return this.config.apiEndPoint + "/auth"; },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_config_module_1.APP_CONFIG)),
        __metadata("design:paramtypes", [Object])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELG9FQUE0RDtBQUs1RDtJQUdJLHFCQUF5QyxNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUksQ0FBQztJQUYvRCxzQkFBWSxpQ0FBUTthQUFwQixjQUF3QixNQUFNLENBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLFVBQU8sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRDFELFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtRQUlLLFdBQUEsYUFBTSxDQUFDLDhCQUFVLENBQUMsQ0FBQTs7T0FIdkIsV0FBVyxDQUl2QjtJQUFELGtCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQVBQX0NPTkZJRyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAtY29uZmlnLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb3JlL2FwcC1jb25maWcubW9kZWwnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNle1xyXG4gICAgcHJpdmF0ZSBnZXQgbG9naW5VcmwoKXsgcmV0dXJuIGAke3RoaXMuY29uZmlnLmFwaUVuZFBvaW50fS9hdXRoYDsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KEFQUF9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBBcHBDb25maWcgKXsgfVxyXG59Il19