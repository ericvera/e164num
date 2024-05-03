import { expect, it } from 'vitest'
import { isValidPartialE164PhoneNumber } from '.'

it('is invalid if masked', () => {
  expect(isValidPartialE164PhoneNumber('+1******4444')).toBe(false)
})

it('is valid US like and less than +1 plus 10 digits', () => {
  expect(isValidPartialE164PhoneNumber('+1123123444')).toBe(true)
})

it('is valid US full number', () => {
  expect(isValidPartialE164PhoneNumber('+11231234444')).toBe(true)
})

it('is valid short full international number', () => {
  expect(isValidPartialE164PhoneNumber('+3124345')).toBe(true)
})

it('is valid longest international number', () => {
  expect(isValidPartialE164PhoneNumber('+312434567890123')).toBe(true)
})

it('is invalid too long international number', () => {
  expect(isValidPartialE164PhoneNumber('+3124345678901234')).toBe(false)
})

it('is invalid US like and more than +1 plus 10 digits', () => {
  expect(isValidPartialE164PhoneNumber('+112312344444')).toBe(false)
})

it('is valid with just +', () => {
  expect(isValidPartialE164PhoneNumber('+')).toBe(true)
})

it('is valid with just +1 (US like)', () => {
  expect(isValidPartialE164PhoneNumber('+1')).toBe(true)
})

it('is valid with just +3 (Internatinal)', () => {
  expect(isValidPartialE164PhoneNumber('+3')).toBe(true)
})

it('is invalid if it does not start with + (with US 1)', () => {
  expect(isValidPartialE164PhoneNumber('17871231234')).toBe(false)
})

it('is invalid if it does not start with + (with no US 1)', () => {
  expect(isValidPartialE164PhoneNumber('7871231234')).toBe(false)
})
