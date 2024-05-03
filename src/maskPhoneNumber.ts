/**
 * Masks a phone number that is assumed to be a full valid E164 format. The
 * result will have only the plus sign, the first digit right after it, and the
 * last 3 digits visible. All others will be masked with an asterisk.
 *
 * @param e164PhoneNumber The E164 phone number to mask.
 *
 * @example
 * ```ts
 * maskPhoneNumber('+17871234567')
 * // returns '+1*******567'
 * ```
 */
export const maskPhoneNumber = (e164PhoneNumber: string): string =>
  e164PhoneNumber.replace(
    /^\+(\d)(.*)(.{3})$/,
    (_, a: string, b: string, c: string) =>
      `+${a}${b.replace(/\d/gm, '*')}${c}`,
  )
