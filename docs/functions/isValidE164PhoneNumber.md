[**e164num**](../README.md) • **Docs**

---

[e164num](../README.md) / isValidE164PhoneNumber

# Function: isValidE164PhoneNumber()

> **isValidE164PhoneNumber**(`e164PhoneNumber`): `boolean`

Returns true if the given phone number is a valid E.164 phone number. This
function does not check if the phone number is assigned to a user or if it is
reachable. It also only checks for valid length within a country code for US
phone numbers. Returns false otherwise.

## Parameters

| Parameter         | Type     | Description                   |
| :---------------- | :------- | :---------------------------- |
| `e164PhoneNumber` | `string` | The phone number to validate. |

## Returns

`boolean`

## Source

[isValidE164PhoneNumber.ts:9](https://github.com/ericvera/e164num/blob/main/src/isValidE164PhoneNumber.ts#L9)
