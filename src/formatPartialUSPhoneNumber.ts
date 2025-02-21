/**
 * Returns a formatted partial US phone number based on the received E.164 phone
 * number. This can be used to format phone numbers in input fields as the user
 * types.
 *
 * @param e164PhoneNumber The phone number to format.
 */
export const formatPartialUSPhoneNumber = (e164PhoneNumber: string): string => {
  const ExpectedUSPhoneLength = 12
  const USPhoneAreaCodeIndex = 2
  const USPhoneAreaCodeEndIndex = 5
  const USPhoneSubscriberPrefixIndex = 5
  const USPhoneSubscriberPrefixEndIndex = 8
  const USPhoneSubscriberSuffixIndex = 8
  const USPhoneSubscriberSuffixEndIndex = 12

  let result = ''

  if (
    e164PhoneNumber.startsWith('+1') &&
    e164PhoneNumber.length <= ExpectedUSPhoneLength
  ) {
    // Return empty string for just '+1'
    if (e164PhoneNumber.length === 2) {
      return ''
    }

    result = '('

    // Anything longer than +1, add the first 3 digits
    if (e164PhoneNumber.length > USPhoneAreaCodeIndex) {
      result += e164PhoneNumber.substring(
        USPhoneAreaCodeIndex,
        USPhoneAreaCodeEndIndex,
      )
    }

    // Anything longer than '+1123', add the closing parenthesis and up to 3
    // additional digits
    if (e164PhoneNumber.length >= USPhoneAreaCodeEndIndex) {
      result += `) ${e164PhoneNumber.substring(
        USPhoneSubscriberPrefixIndex,
        USPhoneSubscriberPrefixEndIndex,
      )}`
    }

    // Anything longer than '+11231231', add the - and up to 4 additional digits
    if (e164PhoneNumber.length >= USPhoneSubscriberPrefixEndIndex + 1) {
      result += `-${e164PhoneNumber.substring(
        USPhoneSubscriberSuffixIndex,
        USPhoneSubscriberSuffixEndIndex,
      )}`
    }
  } else {
    result = e164PhoneNumber
  }

  return result.replace(/\*/g, '•')
}
