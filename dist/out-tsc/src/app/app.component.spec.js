import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InvoiceCalculatorService } from './invoice-calculator.service';
import { FormsModule } from '@angular/forms';
var InvoiceCalculatorServiceMock = /** @class */ (function () {
    function InvoiceCalculatorServiceMock() {
    }
    InvoiceCalculatorServiceMock.prototype.CalculateInvoice = function (invoiceLines) {
        var completeInvoiceLines = invoiceLines.map(function (l) {
            return {
                product: l.product,
                vatCategory: l.vatCategory,
                priceInclusiveVat: l.priceInclusiveVat,
                priceExclusiveVat: 42
            };
        });
        return {
            invoiceLines: completeInvoiceLines,
            totalPriceExclusiveVat: 42,
            totalPriceInclusiveVat: 84,
            totalVat: 126
        };
    };
    return InvoiceCalculatorServiceMock;
}());
describe('AppComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: InvoiceCalculatorService, useValue: new InvoiceCalculatorServiceMock() }
            ],
        }).compileComponents();
    }));
    it('should create the app', function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it('should disable add button if description of price are empty', function () {
        var fixture = TestBed.createComponent(AppComponent);
        var de = fixture.debugElement;
        var ne = de.nativeElement;
        var app = de.componentInstance;
        var addButton = ne.querySelector('#add-button');
        fixture.detectChanges();
        expect(addButton.disabled).toBeTruthy();
        app.product = 'Pizza';
        app.priceInclusiveVat = 6;
        app.vatCategoryString = 'Food';
        fixture.detectChanges();
        expect(addButton.disabled).toBeFalsy();
    });
    it('should add invoice line correctly', function () {
        var fixture = TestBed.createComponent(AppComponent);
        var de = fixture.debugElement;
        var ne = de.nativeElement;
        var app = de.componentInstance;
        fixture.detectChanges();
        var invoiceLines = ne.querySelectorAll('#invoice-lines');
        expect(invoiceLines.length).toBe(0);
        var productInput = ne.querySelector('#product-input');
        productInput.value = 'Pizza';
        productInput.dispatchEvent(new Event('input'));
        var vatCategoryInput = ne.querySelector('#vat-category-input');
        vatCategoryInput.value = 'Food';
        vatCategoryInput.dispatchEvent(new Event('input'));
        var priceInclusiveVatInput = ne.querySelector('#priceInclusiveVat-input');
        priceInclusiveVatInput.value = '6';
        priceInclusiveVatInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        var addButton = ne.querySelector('#add-button');
        addButton.click();
        fixture.detectChanges();
        invoiceLines = ne.querySelectorAll('#invoice-lines');
        expect(invoiceLines.length).toBe(1);
        expect(invoiceLines[0].children[0].textContent).toBe('Pizza');
        expect(invoiceLines[0].children[1].textContent).toBe('6.00');
        expect(invoiceLines[0].children[2].textContent).toBe('42.00');
    });
    it('should calculate totals correctly', function () {
        var fixture = TestBed.createComponent(AppComponent);
        var de = fixture.debugElement;
        var ne = de.nativeElement;
        var app = de.componentInstance;
        app.product = 'Pizza';
        app.priceInclusiveVat = 6;
        app.vatCategoryString = 'Food';
        app.addInvoice();
        fixture.detectChanges();
        var totalPriceInclusiveVatInput = ne.querySelector('#totalPriceInclusiveVat');
        expect(totalPriceInclusiveVatInput.textContent).toBe('84.00');
        var totalPriceExclusiveVatInput = ne.querySelector('#totalPriceExclusiveVat');
        expect(totalPriceExclusiveVatInput.textContent).toBe('42.00');
    });
});
//# sourceMappingURL=app.component.spec.js.map