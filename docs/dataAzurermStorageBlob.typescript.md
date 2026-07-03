# `dataAzurermStorageBlob` Submodule <a name="`dataAzurermStorageBlob` Submodule" id="@cdktn/provider-azurerm.dataAzurermStorageBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageBlob <a name="DataAzurermStorageBlob" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob azurerm_storage_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.Initializer"></a>

```typescript
import { dataAzurermStorageBlob } from '@cdktn/provider-azurerm'

new dataAzurermStorageBlob.DataAzurermStorageBlob(scope: Construct, id: string, config: DataAzurermStorageBlobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig">DataAzurermStorageBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig">DataAzurermStorageBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetStorageContainerId">resetStorageContainerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetStorageContainerName">resetStorageContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermStorageBlobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts">DataAzurermStorageBlobTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetStorageAccountName"></a>

```typescript
public resetStorageAccountName(): void
```

##### `resetStorageContainerId` <a name="resetStorageContainerId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetStorageContainerId"></a>

```typescript
public resetStorageContainerId(): void
```

##### `resetStorageContainerName` <a name="resetStorageContainerName" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetStorageContainerName"></a>

```typescript
public resetStorageContainerName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermStorageBlob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isConstruct"></a>

```typescript
import { dataAzurermStorageBlob } from '@cdktn/provider-azurerm'

dataAzurermStorageBlob.DataAzurermStorageBlob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isTerraformElement"></a>

```typescript
import { dataAzurermStorageBlob } from '@cdktn/provider-azurerm'

dataAzurermStorageBlob.DataAzurermStorageBlob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isTerraformDataSource"></a>

```typescript
import { dataAzurermStorageBlob } from '@cdktn/provider-azurerm'

dataAzurermStorageBlob.DataAzurermStorageBlob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.generateConfigForImport"></a>

```typescript
import { dataAzurermStorageBlob } from '@cdktn/provider-azurerm'

dataAzurermStorageBlob.DataAzurermStorageBlob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermStorageBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermStorageBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermStorageBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.accessTier">accessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.contentMd5">contentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.encryptionScope">encryptionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference">DataAzurermStorageBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageContainerNameInput">storageContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts">DataAzurermStorageBlobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageContainerName">storageContainerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.accessTier"></a>

```typescript
public readonly accessTier: string;
```

- *Type:* string

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.contentMd5"></a>

```typescript
public readonly contentMd5: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `encryptionScope`<sup>Required</sup> <a name="encryptionScope" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.encryptionScope"></a>

```typescript
public readonly encryptionScope: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageBlobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference">DataAzurermStorageBlobTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageContainerIdInput"></a>

```typescript
public readonly storageContainerIdInput: string;
```

- *Type:* string

---

##### `storageContainerNameInput`<sup>Optional</sup> <a name="storageContainerNameInput" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageContainerNameInput"></a>

```typescript
public readonly storageContainerNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermStorageBlobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts">DataAzurermStorageBlobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.storageContainerName"></a>

```typescript
public readonly storageContainerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageBlobConfig <a name="DataAzurermStorageBlobConfig" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.Initializer"></a>

```typescript
import { dataAzurermStorageBlob } from '@cdktn/provider-azurerm'

const dataAzurermStorageBlobConfig: dataAzurermStorageBlob.DataAzurermStorageBlobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#name DataAzurermStorageBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#id DataAzurermStorageBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#metadata DataAzurermStorageBlob#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#storage_account_name DataAzurermStorageBlob#storage_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#storage_container_id DataAzurermStorageBlob#storage_container_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.storageContainerName">storageContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#storage_container_name DataAzurermStorageBlob#storage_container_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts">DataAzurermStorageBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#name DataAzurermStorageBlob#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#id DataAzurermStorageBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#metadata DataAzurermStorageBlob#metadata}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#storage_account_name DataAzurermStorageBlob#storage_account_name}.

---

##### `storageContainerId`<sup>Optional</sup> <a name="storageContainerId" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#storage_container_id DataAzurermStorageBlob#storage_container_id}.

---

##### `storageContainerName`<sup>Optional</sup> <a name="storageContainerName" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.storageContainerName"></a>

```typescript
public readonly storageContainerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#storage_container_name DataAzurermStorageBlob#storage_container_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageBlobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts">DataAzurermStorageBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#timeouts DataAzurermStorageBlob#timeouts}

---

### DataAzurermStorageBlobTimeouts <a name="DataAzurermStorageBlobTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts.Initializer"></a>

```typescript
import { dataAzurermStorageBlob } from '@cdktn/provider-azurerm'

const dataAzurermStorageBlobTimeouts: dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#read DataAzurermStorageBlob#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_blob#read DataAzurermStorageBlob#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageBlobTimeoutsOutputReference <a name="DataAzurermStorageBlobTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageBlob } from '@cdktn/provider-azurerm'

new dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts">DataAzurermStorageBlobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermStorageBlobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageBlob.DataAzurermStorageBlobTimeouts">DataAzurermStorageBlobTimeouts</a>

---



