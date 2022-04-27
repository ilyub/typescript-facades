[Typescript facades](../index.md) / [Exports](../modules.md) / [handlePromise](../modules/handlePromise.md) / [handlePromise](../modules/handlePromise.handlePromise-1.md) / Facade

# Interface: Facade

[handlePromise](../modules/handlePromise.md).[handlePromise](../modules/handlePromise.handlePromise-1.md).Facade

## Table of contents

### Methods

- [runAll](handlePromise.handlePromise-1.Facade.md#runall)
- [running](handlePromise.handlePromise-1.Facade.md#running)
- [silent](handlePromise.handlePromise-1.Facade.md#silent)
- [verbose](handlePromise.handlePromise-1.Facade.md#verbose)

## Methods

### runAll

▸ `Readonly` **runAll**(): `Promise`<`void`\>

Waits for all promises.

#### Returns

`Promise`<`void`\>

Promise.

___

### running

▸ `Readonly` **running**(): `boolean`

Checks that there are active promises.

#### Returns

`boolean`

_True_ if there are active promises, _false_ otherwise.

___

### silent

▸ `Readonly` **silent**<`T`\>(`promiseAsync`, `errorMessage?`): `void`

Handles promise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promiseAsync` | `AsyncPromise`<`T`, `nevers`\> | Promise or async function. |
| `errorMessage?` | `string` | Error message (used to alert user on error). |

#### Returns

`void`

___

### verbose

▸ `Readonly` **verbose**<`T`\>(`promiseAsync`, `type`, `errorMessage?`): `void`

Handles promise with progress reporting.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promiseAsync` | `AsyncPromise`<`T`, `nevers`\> | Promise or async function. |
| `type` | [`Type`](../modules/handlePromise.handlePromise-1.md#type) | Type (determines expected duration for progress reporting). |
| `errorMessage?` | `string` | Error message (used to alert user on error). |

#### Returns

`void`