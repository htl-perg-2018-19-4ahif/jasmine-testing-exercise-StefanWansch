import { InvoiceCalculatorService } from './invoice-calculator.service';
import { VatCategory } from './vat-categories.service';
describe('InvoiceCalculatorService', function () {
    it('should calculate price excl. VAT correctly', function () {
        var service = new InvoiceCalculatorService(undefined);
        expect(service.CalculatePriceExclusiveVat(12, 20)).toBe(10);
    });
    it('should calculate invoice correctly', function () {
        var dummyVat = 20;
        var dummyVatFactor = 1 + dummyVat / 100;
        var vatCategoriesServiceMock = {
            getVat: jasmine.createSpy('getVat').and.returnValue(dummyVat)
        };
        var service = new InvoiceCalculatorService(vatCategoriesServiceMock);
        var result = service.CalculateInvoice([
            { product: 'Pizza', priceInclusiveVat: 6, vatCategory: VatCategory.Food },
            { product: 'Drink', priceInclusiveVat: 3, vatCategory: VatCategory.Drinks },
        ]);
        expect(vatCategoriesServiceMock.getVat).toHaveBeenCalledTimes(2);
        expect(result).not.toBeFalsy();
        expect(result.totalPriceInclusiveVat).toBe(9);
        expect(result.totalPriceExclusiveVat).toBe(9 / dummyVatFactor);
        expect(result.invoiceLines.length).toBe(2);
        expect(result.invoiceLines[0].priceExclusiveVat).toBe(6 / dummyVatFactor);
        expect(result.invoiceLines[1].priceExclusiveVat).toBe(3 / dummyVatFactor);
    });
});
//# sourceMappingURL=invoice-calculator.service.spec.js.map