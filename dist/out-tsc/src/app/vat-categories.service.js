import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
export var VatCategory;
(function (VatCategory) {
    VatCategory[VatCategory["Food"] = 0] = "Food";
    VatCategory[VatCategory["Drinks"] = 1] = "Drinks";
})(VatCategory || (VatCategory = {}));
var VatCategoriesService = /** @class */ (function () {
    function VatCategoriesService() {
    }
    VatCategoriesService.prototype.getVat = function (category) {
        // REPLACE the next line with the necessary code
        return NaN;
    };
    VatCategoriesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], VatCategoriesService);
    return VatCategoriesService;
}());
export { VatCategoriesService };
//# sourceMappingURL=vat-categories.service.js.map