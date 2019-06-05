import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InvoiceCalculatorService } from './invoice-calculator.service';
import { VatCategory } from './vat-categories.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(invoiceCalculator) {
        this.invoiceCalculator = invoiceCalculator;
        this.invoiceLines = [];
        this.product = '';
        this.priceInclusiveVat = 0;
        this.vatCategoryString = 'Food';
        this.vatCategories = VatCategory;
    }
    AppComponent.prototype.addInvoice = function () {
        // ADD necessary code here
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [InvoiceCalculatorService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map