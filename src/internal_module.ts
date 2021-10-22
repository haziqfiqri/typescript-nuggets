namespace studentCalculator { 
    export function AnnualFeeCalculator (feeAmout: number, term: number) { 
        return feeAmout * term;
    }
}

namespace invoiceCalculator { 
    export namespace invoiceAccout { 
        export class Invoice { 
            calculateDiscount (price: number) { 
                return price * 0.60
            }
        }
    }
}