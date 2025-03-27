export const countryFlag = (countryCode?: string) => `https://flagcdn.com/h120/${(countryCode || 'uk')?.toLowerCase()}.png`;
