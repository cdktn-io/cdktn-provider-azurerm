# `searchServiceDatasourceBlob` Submodule <a name="`searchServiceDatasourceBlob` Submodule" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchServiceDatasourceBlob <a name="SearchServiceDatasourceBlob" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob azurerm_search_service_datasource_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

new searchServiceDatasourceBlob.SearchServiceDatasourceBlob(scope: Construct, id: string, config: SearchServiceDatasourceBlobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig">SearchServiceDatasourceBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig">SearchServiceDatasourceBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery">resetContainerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName">resetSoftDeleteColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue">resetSoftDeleteMarkerValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: SearchServiceDatasourceBlobEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts"></a>

```typescript
public putTimeouts(value: SearchServiceDatasourceBlobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---

##### `resetContainerQuery` <a name="resetContainerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery"></a>

```typescript
public resetContainerQuery(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSoftDeleteColumnName` <a name="resetSoftDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName"></a>

```typescript
public resetSoftDeleteColumnName(): void
```

##### `resetSoftDeleteMarkerValue` <a name="resetSoftDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue"></a>

```typescript
public resetSoftDeleteMarkerValue(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SearchServiceDatasourceBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SearchServiceDatasourceBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SearchServiceDatasourceBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput">connectionStringWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput">connectionStringWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput">containerQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput">searchServiceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput">softDeleteColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput">softDeleteMarkerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo">connectionStringWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion">connectionStringWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery">containerQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint">searchServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName">softDeleteColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue">softDeleteMarkerValue</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: SearchServiceDatasourceBlobEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts"></a>

```typescript
public readonly timeouts: SearchServiceDatasourceBlobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a>

---

##### `connectionStringWoInput`<sup>Optional</sup> <a name="connectionStringWoInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput"></a>

```typescript
public readonly connectionStringWoInput: string;
```

- *Type:* string

---

##### `connectionStringWoVersionInput`<sup>Optional</sup> <a name="connectionStringWoVersionInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput"></a>

```typescript
public readonly connectionStringWoVersionInput: number;
```

- *Type:* number

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `containerQueryInput`<sup>Optional</sup> <a name="containerQueryInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput"></a>

```typescript
public readonly containerQueryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: SearchServiceDatasourceBlobEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `searchServiceEndpointInput`<sup>Optional</sup> <a name="searchServiceEndpointInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput"></a>

```typescript
public readonly searchServiceEndpointInput: string;
```

- *Type:* string

---

##### `softDeleteColumnNameInput`<sup>Optional</sup> <a name="softDeleteColumnNameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput"></a>

```typescript
public readonly softDeleteColumnNameInput: string;
```

- *Type:* string

---

##### `softDeleteMarkerValueInput`<sup>Optional</sup> <a name="softDeleteMarkerValueInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput"></a>

```typescript
public readonly softDeleteMarkerValueInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SearchServiceDatasourceBlobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---

##### ~~`connectionStringWo`~~<sup>Required</sup> <a name="connectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly connectionStringWo: string;
```

- *Type:* string

---

##### `connectionStringWoVersion`<sup>Required</sup> <a name="connectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion"></a>

```typescript
public readonly connectionStringWoVersion: number;
```

- *Type:* number

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `containerQuery`<sup>Required</sup> <a name="containerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery"></a>

```typescript
public readonly containerQuery: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `searchServiceEndpoint`<sup>Required</sup> <a name="searchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint"></a>

```typescript
public readonly searchServiceEndpoint: string;
```

- *Type:* string

---

##### `softDeleteColumnName`<sup>Required</sup> <a name="softDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName"></a>

```typescript
public readonly softDeleteColumnName: string;
```

- *Type:* string

---

##### `softDeleteMarkerValue`<sup>Required</sup> <a name="softDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue"></a>

```typescript
public readonly softDeleteMarkerValue: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchServiceDatasourceBlobConfig <a name="SearchServiceDatasourceBlobConfig" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.Initializer"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

const searchServiceDatasourceBlobConfig: searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo">connectionStringWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion">connectionStringWoVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint">searchServiceEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery">containerQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName">softDeleteColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue">softDeleteMarkerValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionStringWo`<sup>Required</sup> <a name="connectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo"></a>

```typescript
public readonly connectionStringWo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}.

---

##### `connectionStringWoVersion`<sup>Required</sup> <a name="connectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion"></a>

```typescript
public readonly connectionStringWoVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}.

---

##### `searchServiceEndpoint`<sup>Required</sup> <a name="searchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint"></a>

```typescript
public readonly searchServiceEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}.

---

##### `containerQuery`<sup>Optional</sup> <a name="containerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery"></a>

```typescript
public readonly containerQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: SearchServiceDatasourceBlobEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#encryption_key SearchServiceDatasourceBlob#encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `softDeleteColumnName`<sup>Optional</sup> <a name="softDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName"></a>

```typescript
public readonly softDeleteColumnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}.

---

##### `softDeleteMarkerValue`<sup>Optional</sup> <a name="softDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue"></a>

```typescript
public readonly softDeleteMarkerValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SearchServiceDatasourceBlobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#timeouts SearchServiceDatasourceBlob#timeouts}

---

### SearchServiceDatasourceBlobEncryptionKey <a name="SearchServiceDatasourceBlobEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.Initializer"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

const searchServiceDatasourceBlobEncryptionKey: searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}.

---

### SearchServiceDatasourceBlobTimeouts <a name="SearchServiceDatasourceBlobTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.Initializer"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

const searchServiceDatasourceBlobTimeouts: searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchServiceDatasourceBlobEncryptionKeyOutputReference <a name="SearchServiceDatasourceBlobEncryptionKeyOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

new searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SearchServiceDatasourceBlobEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---


### SearchServiceDatasourceBlobTimeoutsOutputReference <a name="SearchServiceDatasourceBlobTimeoutsOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer"></a>

```typescript
import { searchServiceDatasourceBlob } from '@cdktn/provider-azurerm'

new searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SearchServiceDatasourceBlobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---



