# e164num

**Light validation and manipulation of E.164 phone numbers.**

[![github license](https://img.shields.io/github/license/ericvera/e164num.svg?style=flat-square)](https://github.com/ericvera/e164num/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/e164num.svg?style=flat-square)](https://npmjs.org/package/e164num)

## Features

- E.164 phone number validation and formatting
- Real-time input handling
- US number formatting with proper spacing
- Secure number masking
- TypeScript ready, zero dependencies

## Installation

```bash
npm install e164num
# or
yarn add e164num
# or
pnpm add e164num
```

## Usage

```typescript
import {
  isValidE164PhoneNumber,
  formatPartialUSPhoneNumber,
  getPartialE164PhoneNumber,
  maskPhoneNumber,
} from 'e164num'

// Validate a complete E.164 phone number (e.g., on form submission)
isValidE164PhoneNumber('+17871234567') // returns true
isValidE164PhoneNumber('+1') // returns false

// Validate a partial E.164 phone number (e.g., for intermediate validation)
isValidPartialE164PhoneNumber('+1787') // returns true
isValidPartialE164PhoneNumber('abc') // returns false

// Format a US phone number for display
formatPartialUSPhoneNumber('+17871234567') // returns "(787) 123-4567"

// Convert partial number to E.164 format (great for input fields)
getPartialE164PhoneNumber('7871234567') // returns "+17871234567"
getPartialE164PhoneNumber('787123', { code: '+34', maxLength: 12 }) // returns "+34787123"

// Mask a phone number for display
maskPhoneNumber('+17871234567') // returns "+1*******567"
```

## API Reference

### `isValidE164PhoneNumber(e164PhoneNumber: string): boolean`

Validates if a string is a complete, valid E.164 phone number. For US numbers (+1), it checks for the correct length. For international numbers, it validates the basic E.164 format. Use this function for final validation, such as when a form is submitted.

### `isValidPartialE164PhoneNumber(partialE164PhoneNumber: string): boolean`

Validates if a string follows the E.164 format rules but may be incomplete. This is useful for intermediate validation states, such as validating a phone number that's been pasted in or when you need to check if the current input could potentially become a valid E.164 number.

### `getPartialE164PhoneNumber(phoneNumber: string | undefined, defaultCountryInfo?: { code: string, maxLength: number }): string`

Converts a partial phone number to E.164 format. This is the ideal function for processing phone numbers in input fields as the user types, as it handles formatting and country code insertion in real-time.

- `defaultCountryInfo` defaults to `{ code: '+1', maxLength: 12 }` for US numbers
- Automatically adds the country code if not present
- Truncates numbers to the specified maximum length

### `formatPartialUSPhoneNumber(e164PhoneNumber: string): string`

Formats a US phone number with proper spacing and punctuation: (XXX) XXX-XXXX. Works with both regular and masked phone numbers - masked digits will be shown as bullet points (•) in the formatted output.

Example with masked number:

```typescript
formatPartialUSPhoneNumber('+1******1234') // returns "(•••) •••-1234"
```

### `maskPhoneNumber(e164PhoneNumber: string): string`

Masks a phone number for display, showing only the country code and last 3 digits. All other digits are replaced with asterisks.

## E.164 Format

E.164 is the international standard format for phone numbers. An E.164 number can have a maximum of 15 digits and is usually written with a leading + symbol.

Format: `+[country code][area code][local phone number]`

Examples:

- US: `+17871234567`
- UK: `+447911123456`
- Spain: `+34612345678`

## License

MIT License - see the [LICENSE](LICENSE) file for details.
