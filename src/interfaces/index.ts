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