import { VatCategoriesService, VatCategory } from './vat-categories.service';
describe('VatCategoriesService', function () {
    it('should return correct VAT for drinks', function () {
        var service = new VatCategoriesService();
        expect(service.getVat(VatCategory.Drinks)).toBe(10);
    });
    it('should return correct VAT for food', function () {
        var service = new VatCategoriesService();
        expect(service.getVat(VatCategory.Food)).toBe(20);
    });
    it('should return NaN for unknown category', function () {
        var service = new VatCategoriesService();
        expect(service.getVat(undefined)).toBeNaN();
    });
});
//# sourceMappingURL=vat-categories.service.spec.js.map