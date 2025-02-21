import { expect, it } from 'vitest'
import { formatPartialUSPhoneNumber } from './index.js'

it('returns a human friendly formatted phone for valid US phone numbers', () => {
  expect(formatPartialUSPhoneNumber('+14254531234')).toEqual('(425) 453-1234')
  expect(formatPartialUSPhoneNumber('+17875021234')).toEqual('(787) 502-1234')
})

it('works with masked values', () => {
  expect(formatPartialUSPhoneNumber('+1******1234')).toEqual('(•••) •••-1234')
})

it('returns the original phone number on non-US or PR numbers', () => {
  expect(formatPartialUSPhoneNumber('+447772908510')).toEqual('+447772908510')
  expect(formatPartialUSPhoneNumber('+525543571001')).toEqual('+525543571001')
})

it('returns a partial human friendly formatted phone number', () => {
  expect(formatPartialUSPhoneNumber('')).toEqual('')
  expect(formatPartialUSPhoneNumber('+')).toEqual('+')
  expect(formatPartialUSPhoneNumber('+2')).toEqual('+2')
  expect(formatPartialUSPhoneNumber('+1')).toEqual('')
  expect(formatPartialUSPhoneNumber('+17')).toEqual('(7')
  expect(formatPartialUSPhoneNumber('+178')).toEqual('(78')
  expect(formatPartialUSPhoneNumber('+1787')).toEqual('(787) ')
  expect(formatPartialUSPhoneNumber('+17871')).toEqual('(787) 1')
  expect(formatPartialUSPhoneNumber('+178712')).toEqual('(787) 12')
  expect(formatPartialUSPhoneNumber('+1787123')).toEqual('(787) 123')
  expect(formatPartialUSPhoneNumber('+17871234')).toEqual('(787) 123-4')
  expect(formatPartialUSPhoneNumber('+178712344')).toEqual('(787) 123-44')
  expect(formatPartialUSPhoneNumber('+1787123444')).toEqual('(787) 123-444')
  expect(formatPartialUSPhoneNumber('+17871234444')).toEqual('(787) 123-4444')
  expect(formatPartialUSPhoneNumber('+178712344444')).toEqual('+178712344444')
})
