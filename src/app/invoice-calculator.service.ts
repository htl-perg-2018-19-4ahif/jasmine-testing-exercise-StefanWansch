import { Injectable } from '@angular/core';
import { VatCategory, VatCategoriesService } from './vat-categories.service';
import { of } from 'rxjs';

export interface InvoiceLine {
  product: string;
  vatCategory: VatCategory;
  priceInclusiveVat: number;
}

export interface InvoiceLineComplete extends InvoiceLine {
  priceExclusiveVat: number;
}

export interface Invoice {
  invoiceLines: InvoiceLineComplete[];
  totalPriceInclusiveVat: number;
  totalPriceExclusiveVat: number;
  totalVat: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceCalculatorService {

  constructor(private vatCategoriesService: VatCategoriesService) { }

  public CalculatePriceExclusiveVat(priceInclusiveVat: number, vatPercentage: number): number {
    return priceInclusiveVat / (100 + vatPercentage) * 100;
  }

  public CalculateInvoice(invoiceLines: InvoiceLine[]): Invoice {

    const complete: InvoiceLineComplete[] = [];
    const end: Invoice = { invoiceLines: complete, totalPriceInclusiveVat: 0, totalPriceExclusiveVat: 0, totalVat: 0 };


    for ( const  i of invoiceLines ) {
      const priceExclusiveVat = i.priceInclusiveVat / (100 + this.vatCategoriesService.getVat(i.vatCategory)) * 100;
      // tslint:disable-next-line:max-line-length
      complete.push({product: i.product, vatCategory: i.vatCategory, priceInclusiveVat: i.priceInclusiveVat, priceExclusiveVat});


      end.totalPriceExclusiveVat += priceExclusiveVat;
      end.totalPriceInclusiveVat += i.priceInclusiveVat;
      end.totalVat += i.priceInclusiveVat - priceExclusiveVat;
    }

    return end;
  }
}
