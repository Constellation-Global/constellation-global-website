export interface SupportInterface {
    // firstName: string;
    // lastName: string;
    // country: string;
    // companySize: string;
    // phone: string;
    name: string;
    email: string;
    message: string;
  }

  export interface CountryInterface {
    name: string;
    info: CountryInfoInterface;
    employmentOptions: CountryEmploymentOptionsInterface;
}

export interface CountryInfoInterface {
    zone: string;
    code: string;
    mobileCode: string;
    currencyCode: string;
    currencyName: string;
    flagImage?: string;
}

export interface CountryEmploymentOptionsInterface {
    isEorEmployable: boolean;
    isIcEmployable: boolean;
    icManagementFee: number;
    eorManagementFee: number;
    eorOneTimeSetupFee: number;
    paymentCurrencyCode: string;
}


// Global section
export interface CountryEmploymentOptionsInterface {
    isEorEmployable: boolean;
    isIcEmployable: boolean;
    icManagementFee: number;
    eorManagementFee: number;
    eorOneTimeSetupFee: number;
    paymentCurrencyCode: string;
  }

  export interface GlobalOverview {
    code?: string;
    capital?: string; // capital city
    population?: number;
    workHours: number;
    minimumWage?: number;
    workDays: number;
    mobileCode?: string;
    currency?: string;
    
    
    
    // zone?: string;
    // currencyCode?: string;
    // currencyName?: string;
    // countrycode?: string; // i think we already have it as code
    // employerTax?: string;
  
    // flag?: string;
    // GDP?: string;
    // tickerSymbol?: string;
  }

  export interface GlobalOverviewInterface {
    code?: string;
    mobileCode?: string;
    currencyCode?: string;
    currencyName?: string;
    zone?: string;
    capital?: string; // capital city
    countrycode?: string; // i think we already have it as code
    population?: number;
    minimumWage?: number;
    language?: string; // a placeholder needed for the frontend
    languages?: string[];
    employerTax?: string;
  
    flag?: string;
    currency?: string;
    GDP?: string;
    workHours: number;
    paymentFreq?: string; // a placeholder needed for the frontend
    paymentFrequency?: string[];
    tickerSymbol?: string;
    about?: string;
    workDays: number;
    // payrollFrequency?: string[];
    // GDPPerCapita?: string;
    // weeklyworkinghours?: number;
    // dailyworkinghours?: number;
  }
  
  export interface GlobalPayrollInterface {
    // needs more fields, maybe average will be calcualted from other fields
    description?: string;
    avgEmployerTax?: number;
  }
  
  export type Band = {
    upperBand?: number;
    lowerBand?: number;
    info?: string;
  };
  
  export interface GlobalTaxDetails {
    info?: string;
    contribution?: number;
    contribution1?: number;
    array?: Band[];
  }
  
  export interface GlobalEmployeeTaxDetails {
    employeeIncomeTax: GlobalTaxDetails;
    employeePayrollTax: GlobalTaxDetails;
  }
  
  
  
  export interface GlobalTaxInterface {
    employer?: GlobalTaxDetails;
    employee?: GlobalEmployeeTaxDetails
    avgPayrollTax?: number;
    VAT?: number;
  
    socialSecurity?: number;
    healthInsurance?: number;
  }
  
  export interface GlobalHolidayInterface {
    _id?: string;
    name: string;
    type?: string;
    date?: string | Date;
    description?: string;
  }
  
  export interface GlobalSickLeaveInterface {
    // either leave or sick leave - subject to change
    description?: string;
    leaves?: {
      type?: string;
      caveats?: string[];
    }[];
  }
  
  export interface GlobalTerminationInterface {
    description?: string;
    periods?: {
      type?: string;
      description?: string;
      caveats?: string[];
    }[];
  }
  
  export interface GlobalInterface {
    _id?: string;
    name: string;
    // about?: string; // now in overview
    overview?: GlobalOverviewInterface;
    employmentOptions?: CountryEmploymentOptionsInterface;
    payroll?: GlobalPayrollInterface;
    tax?: GlobalTaxInterface;
    holidays?: GlobalHolidayInterface[];
    sickLeave?: GlobalSickLeaveInterface;
    termination?: GlobalTerminationInterface;
  }
  // end Global section
  
  // for display purposes