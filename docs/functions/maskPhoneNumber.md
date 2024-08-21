[**e164num**](../README.md) • **Docs**

---

[e164num](../README.md) / maskPhoneNumber

# Function: maskPhoneNumber()

> **maskPhoneNumber**(`e164PhoneNumber`): `string`

Masks a phone number that is assumed to be a full valid E164 format. The
result will have only the plus sign, the first digit right after it, and the
last 3 digits visible. All others will be masked with an asterisk.

## Parameters

| Parameter         | Type     | Description                    |
| ----------------- | -------- | ------------------------------ |
| `e164PhoneNumber` | `string` | The E164 phone number to mask. |

## Returns

`string`

## Example

```ts
maskPhoneNumber('+17871234567')
// returns '+1*******567'
```

## Defined in

[maskPhoneNumber.ts:14](https://github.com/ericvera/e164num/blob/main/src/maskPhoneNumber.ts#L14)
