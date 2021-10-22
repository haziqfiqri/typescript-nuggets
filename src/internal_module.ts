namespace studentCalculator { 
    export const AnnualFeeCalculator = (feeAmout: number, term: number) => { 
        return feeAmout * term;
    }
}

namespace invoiceCalculator { 
    export namespace invoiceAccout { 
        export class Invoice { 
            public calculateDiscount = (price: number) => { 
                return price * 0.60
            }
        }
    }
}