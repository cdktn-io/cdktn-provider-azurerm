# `dataAzurermNetappVolumeBucket` Submodule <a name="`dataAzurermNetappVolumeBucket` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolumeBucket <a name="DataAzurermNetappVolumeBucket" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket azurerm_netapp_volume_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

new dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket(scope: Construct, id: string, config: DataAzurermNetappVolumeBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig">DataAzurermNetappVolumeBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig">DataAzurermNetappVolumeBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermNetappVolumeBucketTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetappVolumeBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isConstruct"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformElement"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformDataSource"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermNetappVolumeBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNetappVolumeBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNetappVolumeBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolumeBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fileSystemCifsUsername">fileSystemCifsUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fileSystemNfsUser">fileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList">DataAzurermNetappVolumeBucketFileSystemNfsUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.keyVault">keyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList">DataAzurermNetappVolumeBucketKeyVaultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverCertificateCommonName">serverCertificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverCertificateExpiryDate">serverCertificateExpiryDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverIpAddress">serverIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference">DataAzurermNetappVolumeBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.netappVolumeIdInput">netappVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.netappVolumeId">netappVolumeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `fileSystemCifsUsername`<sup>Required</sup> <a name="fileSystemCifsUsername" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fileSystemCifsUsername"></a>

```typescript
public readonly fileSystemCifsUsername: string;
```

- *Type:* string

---

##### `fileSystemNfsUser`<sup>Required</sup> <a name="fileSystemNfsUser" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.fileSystemNfsUser"></a>

```typescript
public readonly fileSystemNfsUser: DataAzurermNetappVolumeBucketFileSystemNfsUserList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList">DataAzurermNetappVolumeBucketFileSystemNfsUserList</a>

---

##### `keyVault`<sup>Required</sup> <a name="keyVault" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.keyVault"></a>

```typescript
public readonly keyVault: DataAzurermNetappVolumeBucketKeyVaultList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList">DataAzurermNetappVolumeBucketKeyVaultList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `serverCertificateCommonName`<sup>Required</sup> <a name="serverCertificateCommonName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverCertificateCommonName"></a>

```typescript
public readonly serverCertificateCommonName: string;
```

- *Type:* string

---

##### `serverCertificateExpiryDate`<sup>Required</sup> <a name="serverCertificateExpiryDate" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverCertificateExpiryDate"></a>

```typescript
public readonly serverCertificateExpiryDate: string;
```

- *Type:* string

---

##### `serverIpAddress`<sup>Required</sup> <a name="serverIpAddress" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.serverIpAddress"></a>

```typescript
public readonly serverIpAddress: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetappVolumeBucketTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference">DataAzurermNetappVolumeBucketTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `netappVolumeIdInput`<sup>Optional</sup> <a name="netappVolumeIdInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.netappVolumeIdInput"></a>

```typescript
public readonly netappVolumeIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermNetappVolumeBucketTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `netappVolumeId`<sup>Required</sup> <a name="netappVolumeId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.netappVolumeId"></a>

```typescript
public readonly netappVolumeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeBucketConfig <a name="DataAzurermNetappVolumeBucketConfig" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

const dataAzurermNetappVolumeBucketConfig: dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#name DataAzurermNetappVolumeBucket#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.netappVolumeId">netappVolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#netapp_volume_id DataAzurermNetappVolumeBucket#netapp_volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#id DataAzurermNetappVolumeBucket#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#name DataAzurermNetappVolumeBucket#name}.

---

##### `netappVolumeId`<sup>Required</sup> <a name="netappVolumeId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.netappVolumeId"></a>

```typescript
public readonly netappVolumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#netapp_volume_id DataAzurermNetappVolumeBucket#netapp_volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#id DataAzurermNetappVolumeBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetappVolumeBucketTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#timeouts DataAzurermNetappVolumeBucket#timeouts}

---

### DataAzurermNetappVolumeBucketFileSystemNfsUser <a name="DataAzurermNetappVolumeBucketFileSystemNfsUser" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

const dataAzurermNetappVolumeBucketFileSystemNfsUser: dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser = { ... }
```


### DataAzurermNetappVolumeBucketKeyVault <a name="DataAzurermNetappVolumeBucketKeyVault" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

const dataAzurermNetappVolumeBucketKeyVault: dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault = { ... }
```


### DataAzurermNetappVolumeBucketTimeouts <a name="DataAzurermNetappVolumeBucketTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

const dataAzurermNetappVolumeBucketTimeouts: dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#read DataAzurermNetappVolumeBucket#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket#read DataAzurermNetappVolumeBucket#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeBucketFileSystemNfsUserList <a name="DataAzurermNetappVolumeBucketFileSystemNfsUserList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

new dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.get"></a>

```typescript
public get(index: number): DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference <a name="DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

new dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser">DataAzurermNetappVolumeBucketFileSystemNfsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNetappVolumeBucketFileSystemNfsUser;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketFileSystemNfsUser">DataAzurermNetappVolumeBucketFileSystemNfsUser</a>

---


### DataAzurermNetappVolumeBucketKeyVaultList <a name="DataAzurermNetappVolumeBucketKeyVaultList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

new dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.get"></a>

```typescript
public get(index: number): DataAzurermNetappVolumeBucketKeyVaultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNetappVolumeBucketKeyVaultOutputReference <a name="DataAzurermNetappVolumeBucketKeyVaultOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

new dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUri">certificateKeyVaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUri">credentialsKeyVaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretName">credentialsSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault">DataAzurermNetappVolumeBucketKeyVault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateKeyVaultUri`<sup>Required</sup> <a name="certificateKeyVaultUri" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```typescript
public readonly certificateKeyVaultUri: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `credentialsKeyVaultUri`<sup>Required</sup> <a name="credentialsKeyVaultUri" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```typescript
public readonly credentialsKeyVaultUri: string;
```

- *Type:* string

---

##### `credentialsSecretName`<sup>Required</sup> <a name="credentialsSecretName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretName"></a>

```typescript
public readonly credentialsSecretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNetappVolumeBucketKeyVault;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketKeyVault">DataAzurermNetappVolumeBucketKeyVault</a>

---


### DataAzurermNetappVolumeBucketTimeoutsOutputReference <a name="DataAzurermNetappVolumeBucketTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetappVolumeBucket } from '@cdktn/provider-azurerm'

new dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermNetappVolumeBucketTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucket.DataAzurermNetappVolumeBucketTimeouts">DataAzurermNetappVolumeBucketTimeouts</a>

---



