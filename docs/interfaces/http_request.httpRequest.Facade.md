[Typescript facades](../index.md) / [Exports](../modules.md) / [http-request](../modules/http_request.md) / [httpRequest](../modules/http_request.httpRequest.md) / Facade

# Interface: Facade

[http-request](../modules/http_request.md).[httpRequest](../modules/http_request.httpRequest.md).Facade

## Table of contents

### Properties

- [send](http_request.httpRequest.Facade.md#send)

## Properties

### send

• `Readonly` **send**: (`url`: `string`, `method?`: [`HttpMethod`](../enums/types.HttpMethod.md), `data?`: `IndexedRecord`<`unknown`\>, `headers?`: [`HTTPHeaders`](../modules/types.md#httpheaders)) => `Promise`<`unknown`\>

#### Type declaration

▸ (`url`, `method?`, `data?`, `headers?`): `Promise`<`unknown`\>

Sends HTTP request.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL. |
| `method?` | [`HttpMethod`](../enums/types.HttpMethod.md) | HTTP method. |
| `data?` | `IndexedRecord`<`unknown`\> | Data. |
| `headers?` | [`HTTPHeaders`](../modules/types.md#httpheaders) | HTTPHeaders. |

##### Returns

`Promise`<`unknown`\>

Server response.
