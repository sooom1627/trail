export const getCurrentDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Tokyo' };
    return date.toLocaleDateString('en-US', options);
};
