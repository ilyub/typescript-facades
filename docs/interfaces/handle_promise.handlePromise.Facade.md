[Typescript facades](../index.md) / [Exports](../modules.md) / [handle-promise](../modules/handle_promise.md) / [handlePromise](../modules/handle_promise.handlePromise.md) / Facade

# Interface: Facade

[handle-promise](../modules/handle_promise.md).[handlePromise](../modules/handle_promise.handlePromise.md).Facade

## Callable

### Facade

▸ **Facade**<`T`\>(`type`, `mixed`, `errorMessage?`): `void`

Handles promise with progress reporting.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `undefined` \| [`PromiseType`](../enums/types.PromiseType.md) | Type (determines expected duration for progress reporting). |
| `mixed` | `AsyncPromise`<`T`, `nevers`\> | Promise or async function. |
| `errorMessage?` | `string` | Error message (used to alert user on error). |

#### Returns

`void`

## Table of contents

### Properties

- [runAll](handle_promise.handlePromise.Facade.md#runall)
- [running](handle_promise.handlePromise.Facade.md#running)
- [silent](handle_promise.handlePromise.Facade.md#silent)

## Properties

### runAll

• `Readonly` **runAll**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Waits for all promises.

##### Returns

`Promise`<`void`\>

Promise.

___

### running

• `Readonly` **running**: () => `boolean`

#### Type declaration

▸ (): `boolean`

Checks if there are active promises.

##### Returns

`boolean`

_True_ if there are active promises, _false_ otherwise.

___

### silent

• `Readonly` **silent**: <T\>(`mixed`: `AsyncPromise`<`T`, `nevers`\>, `errorMessage?`: `string`) => `void`

#### Type declaration

▸ <`T`\>(`mixed`, `errorMessage?`): `void`

Handles promise.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mixed` | `AsyncPromise`<`T`, `nevers`\> | Promise or async function. |
| `errorMessage?` | `string` | Error message (used to alert user on error). |

##### Returns

`void`
