/**
 * Returns a valid partial E.164 phone number based on the received phone
 * number or empty string for undefined/empty input. This can be used to process
 * phone numbers in input fields as the user types.
 *
 * @param phoneNumber The phone number to format.
 *
 * @param defaultCountryInfo The default country code and max length for the
 * desired country. In the case where the code is matched, the phone number will
 * be truncated at maxLength including the plus sign. (Defaults to +1 and 12
 * characters for US phone numbers.)
 *
 * @example
 * ```ts
 * getPartialE164PhoneNumber('7')
 * // returns '+17'
 * ```
 *
 * @example
 * ```ts
 * getPartialE164PhoneNumber('787123')
 * // returns '+1787123'
 * ```
 *
 * @example
 *  ```ts
 * getPartialE164PhoneNumber('787123', {code: '+34', maxLength: 12})
 * // returns '+34787123'
 * ```
 *
 * @example
 * ```ts
 * getPartialE164PhoneNumber('')
 * // returns ''
 * ```
 *
 * @example
 * ```ts
 * getPartialE164PhoneNumber(undefined)
 * // returns ''
 * ```
 */
export const getPartialE164PhoneNumber = (
  phoneNumber: string | undefined,
  defaultCountryInfo = { code: '+1', maxLength: 12 },
): string => {
  const MaxE164LengthWithPlus = 16

  if (phoneNumber === undefined || phoneNumber === '') {
    return ''
  }

  // Remove all non-digit or + characters
  let partialE164Number = phoneNumber.replace(/[^0-9+]/gm, '')
  // Remove all non-digit characters except a + at the beggining
  partialE164Number = partialE164Number.replace(/(?!^[+])[^0-9]/gm, '')

  // Special case: if after cleaning we have an empty string, return empty
  if (partialE164Number === '') {
    return ''
  }

  // If the number starts with the default country code, but not the + sign, add
  // it
  if (partialE164Number.startsWith(defaultCountryInfo.code.slice(1))) {
    partialE164Number = `+${partialE164Number}`
  } else if (!partialE164Number.startsWith('+')) {
    // Assume default country code-like
    partialE164Number = `${defaultCountryInfo.code}${partialE164Number}`
  }

  // If default country code, truncate to max on that country
  const maxLength = partialE164Number.startsWith(defaultCountryInfo.code)
    ? defaultCountryInfo.maxLength
    : MaxE164LengthWithPlus

  return partialE164Number.substring(0, maxLength)
}
