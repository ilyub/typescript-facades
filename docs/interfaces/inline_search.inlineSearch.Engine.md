[Typescript facades](../index.md) / [Exports](../modules.md) / [inline-search](../modules/inline_search.md) / [inlineSearch](../modules/inline_search.inlineSearch.md) / Engine

# Interface: Engine<T\>

[inline-search](../modules/inline_search.md).[inlineSearch](../modules/inline_search.inlineSearch.md).Engine

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Table of contents

### Properties

- [search](inline_search.inlineSearch.Engine.md#search)

## Properties

### search

• `Readonly` **search**: (`query`: `string`) => readonly `T`[]

#### Type declaration

▸ (`query`): readonly `T`[]

Performs search.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Query string. |

##### Returns

readonly `T`[]

- Matching items.
