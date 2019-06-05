import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { VatCategoriesService } from './vat-categories.service';
var InvoiceCalculatorService = /** @class */ (function () {
    function InvoiceCalculatorService(vatCategoriesService) {
        this.vatCategoriesService = vatCategoriesService;
    }
    InvoiceCalculatorService.prototype.CalculatePriceExclusiveVat = function (priceInclusiveVat, vatPercentage) {
        // REPLACE the next line with the necessary code
        return NaN;
    };
    InvoiceCalculatorService.prototype.CalculateInvoice = function (invoiceLines) {
        // REPLACE the next line with the necessary code
        return undefined;
    };
    InvoiceCalculatorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [VatCategoriesService])
    ], InvoiceCalculatorService);
    return InvoiceCalculatorService;
}());
export { InvoiceCalculatorService };
//# sourceMappingURL=invoice-calculator.service.js.map