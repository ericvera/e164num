/**
 * Returns true if the given phone number is a valid E.164 phone number. This
 * function does not check if the phone number is assigned to a user or if it is
 * reachable. It also only checks for valid length within a country code for US
 * phone numbers. Returns false otherwise.
 *
 * @param e164PhoneNumber The phone number to validate.
 */
export const isValidE164PhoneNumber = (e164PhoneNumber: string): boolean => {
  const ValidE164RegEx = /^((\+1[1-9]\d{9})|(\+[2-9]{1}\d{6,14}))$/

  return ValidE164RegEx.test(e164PhoneNumber)
}
