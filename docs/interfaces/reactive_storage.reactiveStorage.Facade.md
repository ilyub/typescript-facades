[Typescript facades](../index.md) / [Exports](../modules.md) / [reactive-storage](../modules/reactive_storage.md) / [reactiveStorage](../modules/reactive_storage.reactiveStorage.md) / Facade

# Interface: Facade

[reactive-storage](../modules/reactive_storage.md).[reactiveStorage](../modules/reactive_storage.reactiveStorage.md).Facade

## Callable

### Facade

▸ **Facade**<`T`\>(`obj`): `T`

Creates reactive object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

`T`

Reactive object.

## Table of contents

### Properties

- [unwatch](reactive_storage.reactiveStorage.Facade.md#unwatch)
- [watch](reactive_storage.reactiveStorage.Facade.md#watch)

## Properties

### unwatch

• `Readonly` **unwatch**: (`obj`: `object`, `observer`: { `resourceType?`: ``"reactive-storage__observer"``  }) => `void`

#### Type declaration

▸ (`obj`, `observer`): `void`

Unsubscribes from changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Reactive object. |
| `observer` | `Object` | Observer. |
| `observer.resourceType?` | ``"reactive-storage__observer"`` | - |

##### Returns

`void`

___

### watch

• `Readonly` **watch**: <T\>(`obj`: `T`, `handler`: [`Handler`](reactive_storage.reactiveStorage.Handler.md)<`T`\>, `reducer?`: [`Reducer`](reactive_storage.reactiveStorage.Reducer.md)<`T`\>) => { `resourceType?`: ``"reactive-storage__observer"``  }

#### Type declaration

▸ <`T`\>(`obj`, `handler`, `reducer?`): `Object`

Subscribes to changes.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Reactive object. |
| `handler` | [`Handler`](reactive_storage.reactiveStorage.Handler.md)<`T`\> | Handles object change. |
| `reducer?` | [`Reducer`](reactive_storage.reactiveStorage.Reducer.md)<`T`\> | Reduces object for comparison. |

##### Returns

`Object`

Observer.

| Name | Type |
| :------ | :------ |
| `resourceType?` | ``"reactive-storage__observer"`` |
