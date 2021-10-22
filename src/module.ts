/// <reference path="internal_module.ts"/>

// tsc --target es6 .\src\module.ts --outfile .\build\module.js
let firstInternalModule = studentCalculator.AnnualFeeCalculator(1500, 4)
let secondInternalModule = new invoiceCalculator.invoiceAccout.Invoice()

import { Calculator } from "./external_module"

let firstExternalModule = new Calculator (1, 1)
firstExternalModule.addition()