import { expect, it } from 'vitest'
import { maskPhoneNumber } from './index.js'

it('works with US number', () => {
  expect(maskPhoneNumber('+11231231234')).toMatchInlineSnapshot(
    `"+1*******234"`,
  )
})

it('works with long international number', () => {
  expect(maskPhoneNumber('+212312312341234')).toMatchInlineSnapshot(
    `"+2***********234"`,
  )
})

it('works with short international number', () => {
  expect(maskPhoneNumber('+3123123')).toMatchInlineSnapshot(`"+3***123"`)
})
