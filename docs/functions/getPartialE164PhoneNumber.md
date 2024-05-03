[e164num](../README.md) • Docs

---

[e164num](../README.md) / getPartialE164PhoneNumber

# Function: getPartialE164PhoneNumber()

> **getPartialE164PhoneNumber**(`phoneNumber`, `defaultCountryInfo`): `string`

Returns a valid partial E.164 phone number based on the received phone
number or the default country code on undefined. This can be used to process
phone numbers in input fields as the user types.

## Parameters

| Parameter                      | Type                    | Description                                                                                                                                                                                                                                              |
| :----------------------------- | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `phoneNumber`                  | `undefined` \| `string` | The phone number to format.                                                                                                                                                                                                                              |
| `defaultCountryInfo`           | `object`                | The default country code and max length for the<br />desired country. In the case where the code is matched, the phone number will<br />be truncated at maxLength including the plus sign. (Defaults to +1 and 12<br />characters for US phone numbers.) |
| `defaultCountryInfo.code`      | `string`                | -                                                                                                                                                                                                                                                        |
| `defaultCountryInfo.maxLength` | `number`                | -                                                                                                                                                                                                                                                        |

## Returns

`string`

## Example

```ts
getPartialE164PhoneNumber('7')
// returns '+17'
```

## Example

```ts
getPartialE164PhoneNumber('787123')
// returns '+1787123'
```

## Example

```ts
getPartialE164PhoneNumber('787123', { code: '+34', maxLength: 12 })
// returns '+34787123'
```

## Source

[getPartialE164PhoneNumber.ts:31](https://github.com/ericvera/e164num/blob/main/src/getPartialE164PhoneNumber.ts#L31)
