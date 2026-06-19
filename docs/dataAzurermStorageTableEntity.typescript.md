# `dataAzurermStorageTableEntity` Submodule <a name="`dataAzurermStorageTableEntity` Submodule" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageTableEntity <a name="DataAzurermStorageTableEntity" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity azurerm_storage_table_entity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer"></a>

```typescript
import { dataAzurermStorageTableEntity } from '@cdktn/provider-azurerm'

new dataAzurermStorageTableEntity.DataAzurermStorageTableEntity(scope: Construct, id: string, config: DataAzurermStorageTableEntityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig">DataAzurermStorageTableEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig">DataAzurermStorageTableEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermStorageTableEntityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermStorageTableEntity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isConstruct"></a>

```typescript
import { dataAzurermStorageTableEntity } from '@cdktn/provider-azurerm'

dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformElement"></a>

```typescript
import { dataAzurermStorageTableEntity } from '@cdktn/provider-azurerm'

dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformDataSource"></a>

```typescript
import { dataAzurermStorageTableEntity } from '@cdktn/provider-azurerm'

dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport"></a>

```typescript
import { dataAzurermStorageTableEntity } from '@cdktn/provider-azurerm'

dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermStorageTableEntity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermStorageTableEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermStorageTableEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageTableEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.entity">entity</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference">DataAzurermStorageTableEntityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.partitionKeyInput">partitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.rowKeyInput">rowKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.storageTableIdInput">storageTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.partitionKey">partitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.rowKey">rowKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.storageTableId">storageTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.entity"></a>

```typescript
public readonly entity: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageTableEntityTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference">DataAzurermStorageTableEntityTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.partitionKeyInput"></a>

```typescript
public readonly partitionKeyInput: string;
```

- *Type:* string

---

##### `rowKeyInput`<sup>Optional</sup> <a name="rowKeyInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.rowKeyInput"></a>

```typescript
public readonly rowKeyInput: string;
```

- *Type:* string

---

##### `storageTableIdInput`<sup>Optional</sup> <a name="storageTableIdInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.storageTableIdInput"></a>

```typescript
public readonly storageTableIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermStorageTableEntityTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

---

##### `rowKey`<sup>Required</sup> <a name="rowKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.rowKey"></a>

```typescript
public readonly rowKey: string;
```

- *Type:* string

---

##### `storageTableId`<sup>Required</sup> <a name="storageTableId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.storageTableId"></a>

```typescript
public readonly storageTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageTableEntityConfig <a name="DataAzurermStorageTableEntityConfig" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.Initializer"></a>

```typescript
import { dataAzurermStorageTableEntity } from '@cdktn/provider-azurerm'

const dataAzurermStorageTableEntityConfig: dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.partitionKey">partitionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#partition_key DataAzurermStorageTableEntity#partition_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.rowKey">rowKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#row_key DataAzurermStorageTableEntity#row_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.storageTableId">storageTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#storage_table_id DataAzurermStorageTableEntity#storage_table_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#id DataAzurermStorageTableEntity#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#partition_key DataAzurermStorageTableEntity#partition_key}.

---

##### `rowKey`<sup>Required</sup> <a name="rowKey" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.rowKey"></a>

```typescript
public readonly rowKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#row_key DataAzurermStorageTableEntity#row_key}.

---

##### `storageTableId`<sup>Required</sup> <a name="storageTableId" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.storageTableId"></a>

```typescript
public readonly storageTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#storage_table_id DataAzurermStorageTableEntity#storage_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#id DataAzurermStorageTableEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageTableEntityTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#timeouts DataAzurermStorageTableEntity#timeouts}

---

### DataAzurermStorageTableEntityTimeouts <a name="DataAzurermStorageTableEntityTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts.Initializer"></a>

```typescript
import { dataAzurermStorageTableEntity } from '@cdktn/provider-azurerm'

const dataAzurermStorageTableEntityTimeouts: dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#read DataAzurermStorageTableEntity#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/storage_table_entity#read DataAzurermStorageTableEntity#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageTableEntityTimeoutsOutputReference <a name="DataAzurermStorageTableEntityTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageTableEntity } from '@cdktn/provider-azurerm'

new dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermStorageTableEntityTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageTableEntity.DataAzurermStorageTableEntityTimeouts">DataAzurermStorageTableEntityTimeouts</a>

---



