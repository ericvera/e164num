/**
 * Returns true if the given phone number is a valid partial E.164 phone number.
 * Returns false otherwise.
 *
 * @param partialE164PhoneNumber The partial E.164 phone number to validate.
 */
export const isValidPartialE164PhoneNumber = (
  partialE164PhoneNumber: string,
): boolean => {
  const PartialE164RegEx = /^((\+1\d{0,10})|(\+?)|(\+[2-9]{1}\d{0,14}))$/

  return PartialE164RegEx.test(partialE164PhoneNumber)
}
