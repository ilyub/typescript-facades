[Typescript facades](../index.md) / [Exports](../modules.md) / [database](database.md) / database

# Namespace: database

[database](database.md).database

## Table of contents

### Interfaces

- [AttachedChangesHandler](../interfaces/database.database.AttachedChangesHandler.md)
- [BaseBulkAttachedDocument](../interfaces/database.database.BaseBulkAttachedDocument.md)
- [BaseExistingAttachedDocument](../interfaces/database.database.BaseExistingAttachedDocument.md)
- [BaseExistingDocument](../interfaces/database.database.BaseExistingDocument.md)
- [BasePutAttachedDocument](../interfaces/database.database.BasePutAttachedDocument.md)
- [BasePutDocument](../interfaces/database.database.BasePutDocument.md)
- [BaseStoredAttachedDocument](../interfaces/database.database.BaseStoredAttachedDocument.md)
- [BulkAttachedDocument](../interfaces/database.database.BulkAttachedDocument.md)
- [ChangesHandler](../interfaces/database.database.ChangesHandler.md)
- [Database](../interfaces/database.database.Database.md)
- [DatabaseOptions](../interfaces/database.database.DatabaseOptions.md)
- [ExistingAttachedDocument](../interfaces/database.database.ExistingAttachedDocument.md)
- [ExistingDocument](../interfaces/database.database.ExistingDocument.md)
- [Extension](../interfaces/database.database.Extension.md)
- [Facade](../interfaces/database.database.Facade.md)
- [FieldConditions](../interfaces/database.database.FieldConditions.md)
- [Migration](../interfaces/database.database.Migration.md)
- [MigrationCallback](../interfaces/database.database.MigrationCallback.md)
- [PutAttachedDocument](../interfaces/database.database.PutAttachedDocument.md)
- [PutAttachedResponse](../interfaces/database.database.PutAttachedResponse.md)
- [PutDocument](../interfaces/database.database.PutDocument.md)
- [PutResponse](../interfaces/database.database.PutResponse.md)
- [QueryOptions](../interfaces/database.database.QueryOptions.md)
- [ReactiveConfig](../interfaces/database.database.ReactiveConfig.md)
- [ReactiveConfigAttached](../interfaces/database.database.ReactiveConfigAttached.md)
- [ReactiveRefresh](../interfaces/database.database.ReactiveRefresh.md)
- [ReactiveResponseBase](../interfaces/database.database.ReactiveResponseBase.md)
- [ReactiveResponseLoaded](../interfaces/database.database.ReactiveResponseLoaded.md)
- [ReactiveResponseLoading](../interfaces/database.database.ReactiveResponseLoading.md)
- [ReactiveUnsubscribe](../interfaces/database.database.ReactiveUnsubscribe.md)
- [ReactiveUpdate](../interfaces/database.database.ReactiveUpdate.md)
- [ResetCallback](../interfaces/database.database.ResetCallback.md)
- [StoredAttachedDocument](../interfaces/database.database.StoredAttachedDocument.md)

### Type Aliases

- [AttachedSubscriptionId](database.database.md#attachedsubscriptionid)
- [BaseBulkAttachedDocuments](database.database.md#basebulkattacheddocuments)
- [BaseExistingAttachedDocuments](database.database.md#baseexistingattacheddocuments)
- [BaseExistingDocuments](database.database.md#baseexistingdocuments)
- [BasePutAttachedDocuments](database.database.md#baseputattacheddocuments)
- [BasePutDocuments](database.database.md#baseputdocuments)
- [BaseStoredAttachedDocuments](database.database.md#basestoredattacheddocuments)
- [BulkAttachedDocuments](database.database.md#bulkattacheddocuments)
- [Conditions](database.database.md#conditions)
- [ConditionsArray](database.database.md#conditionsarray)
- [ConditionsRecord](database.database.md#conditionsrecord)
- [DateCondition](database.database.md#datecondition)
- [ExistingAttachedDocuments](database.database.md#existingattacheddocuments)
- [ExistingDocuments](database.database.md#existingdocuments)
- [Migrations](database.database.md#migrations)
- [PutAttachedDocuments](database.database.md#putattacheddocuments)
- [PutAttachedResponses](database.database.md#putattachedresponses)
- [PutDocuments](database.database.md#putdocuments)
- [PutResponses](database.database.md#putresponses)
- [ReactiveResponse](database.database.md#reactiveresponse)
- [StoredAttachedDocuments](database.database.md#storedattacheddocuments)
- [SubscriptionId](database.database.md#subscriptionid)

## Type Aliases

### AttachedSubscriptionId

?? **AttachedSubscriptionId**: \`uasid-${string}\`

___

### BaseBulkAttachedDocuments

?? **BaseBulkAttachedDocuments**: readonly [`BaseBulkAttachedDocument`](../interfaces/database.database.BaseBulkAttachedDocument.md)[]

___

### BaseExistingAttachedDocuments

?? **BaseExistingAttachedDocuments**: readonly [`BaseExistingAttachedDocument`](../interfaces/database.database.BaseExistingAttachedDocument.md)[]

___

### BaseExistingDocuments

?? **BaseExistingDocuments**: readonly [`BaseExistingDocument`](../interfaces/database.database.BaseExistingDocument.md)[]

___

### BasePutAttachedDocuments

?? **BasePutAttachedDocuments**: readonly [`BasePutAttachedDocument`](../interfaces/database.database.BasePutAttachedDocument.md)[]

___

### BasePutDocuments

?? **BasePutDocuments**: readonly [`BasePutDocument`](../interfaces/database.database.BasePutDocument.md)[]

___

### BaseStoredAttachedDocuments

?? **BaseStoredAttachedDocuments**: readonly [`BaseStoredAttachedDocument`](../interfaces/database.database.BaseStoredAttachedDocument.md)[]

___

### BulkAttachedDocuments

?? **BulkAttachedDocuments**: readonly [`BulkAttachedDocument`](../interfaces/database.database.BulkAttachedDocument.md)[]

___

### Conditions

?? **Conditions**<`T`\>: [`ConditionsArray`](database.database.md#conditionsarray)<`T`\> \| [`ConditionsRecord`](database.database.md#conditionsrecord)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### ConditionsArray

?? **ConditionsArray**<`T`\>: `ReadonlyArray`<[`ConditionsRecord`](database.database.md#conditionsrecord)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### ConditionsRecord

?? **ConditionsRecord**<`T`\>: `PartialRecord`<`T`, [`FieldConditions`](../interfaces/database.database.FieldConditions.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### DateCondition

?? **DateCondition**: `string` \| readonly [[`RelativeDate`](../enums/types.RelativeDate.md), [`Sign`](types.md#sign), `number`, [`TimeUnit`](../enums/types.TimeUnit.md)] \| readonly [[`RelativeDate`](../enums/types.RelativeDate.md)]

___

### ExistingAttachedDocuments

?? **ExistingAttachedDocuments**: readonly [`ExistingAttachedDocument`](../interfaces/database.database.ExistingAttachedDocument.md)[]

___

### ExistingDocuments

?? **ExistingDocuments**: readonly [`ExistingDocument`](../interfaces/database.database.ExistingDocument.md)[]

___

### Migrations

?? **Migrations**: readonly [`Migration`](../interfaces/database.database.Migration.md)[]

___

### PutAttachedDocuments

?? **PutAttachedDocuments**: readonly [`PutAttachedDocument`](../interfaces/database.database.PutAttachedDocument.md)[]

___

### PutAttachedResponses

?? **PutAttachedResponses**: readonly [`PutAttachedResponse`](../interfaces/database.database.PutAttachedResponse.md)[]

___

### PutDocuments

?? **PutDocuments**: readonly [`PutDocument`](../interfaces/database.database.PutDocument.md)[]

___

### PutResponses

?? **PutResponses**: readonly [`PutResponse`](../interfaces/database.database.PutResponse.md)[]

___

### ReactiveResponse

?? **ReactiveResponse**<`T`\>: [`ReactiveResponseLoaded`](../interfaces/database.database.ReactiveResponseLoaded.md)<`T`\> \| [`ReactiveResponseLoading`](../interfaces/database.database.ReactiveResponseLoading.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### StoredAttachedDocuments

?? **StoredAttachedDocuments**: readonly [`StoredAttachedDocument`](../interfaces/database.database.StoredAttachedDocument.md)[]

___

### SubscriptionId

?? **SubscriptionId**: \`usid-${string}\`
