import { expect, it } from 'vitest'
import { getPartialE164PhoneNumber } from '.'

it('returns e164 format number for US phone number without country code', () => {
  expect(getPartialE164PhoneNumber('6506651243')).toEqual('+16506651243')
})

it('returns e164 format number for US phone number with - or (', () => {
  expect(getPartialE164PhoneNumber('787-796-1243')).toEqual('+17877961243')
})

it('returns e164 format number for US phone number with country code', () => {
  expect(getPartialE164PhoneNumber('+16506651243')).toEqual('+16506651243')
})

it('returns e164 format number for US phone number with country code no +', () => {
  expect(getPartialE164PhoneNumber('17877961243')).toEqual('+17877961243')
})

it('returns e164 format number for international (UK) phone number with country code', () => {
  expect(getPartialE164PhoneNumber('+447772908510')).toEqual('+447772908510')
})

it('returns e164 format number for international (Mexico) phone number with country code', () => {
  expect(getPartialE164PhoneNumber('+52 5543571001')).toEqual('+525543571001')
})

it('returns partial e164 for PR phone number missing 1 number', () => {
  expect(getPartialE164PhoneNumber('787796124')).toEqual('+1787796124')
})

it('returns partial e164 for US formatted phone number', () => {
  expect(getPartialE164PhoneNumber('(787) 123-')).toEqual('+1787123')
})

it('returns partial e164 for US formatted phone start of a number', () => {
  expect(getPartialE164PhoneNumber('(')).toEqual('+1')
})

it('returns US number when there is no country code', () => {
  expect(getPartialE164PhoneNumber('506659333')).toEqual('+1506659333')
})

it('returns +1 for undefined number', () => {
  expect(getPartialE164PhoneNumber(undefined)).toEqual('+1')
})

it('returns default country code for undefined number', () => {
  expect(
    getPartialE164PhoneNumber(undefined, { code: '+34', maxLength: 12 }),
  ).toEqual('+34')
})

it('returns +1 for empty number', () => {
  expect(getPartialE164PhoneNumber('')).toEqual('+1')
})

it('returns + for +', () => {
  expect(
    getPartialE164PhoneNumber('+', { code: '+34', maxLength: 12 }),
  ).toEqual('+')
})

it('returns +1 for 1', () => {
  expect(getPartialE164PhoneNumber('1')).toEqual('+1')
})

it('returns +34 for 34', () => {
  expect(
    getPartialE164PhoneNumber('34', { code: '+34', maxLength: 12 }),
  ).toEqual('+34')
})

it('add US country code for any number that starts with not 1', () => {
  expect(getPartialE164PhoneNumber('8')).toEqual('+18')
})

it('keeps other international country codes', () => {
  expect(getPartialE164PhoneNumber('+2')).toEqual('+2')
})
