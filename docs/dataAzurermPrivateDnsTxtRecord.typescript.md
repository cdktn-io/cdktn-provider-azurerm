# `dataAzurermPrivateDnsTxtRecord` Submodule <a name="`dataAzurermPrivateDnsTxtRecord` Submodule" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsTxtRecord <a name="DataAzurermPrivateDnsTxtRecord" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record azurerm_private_dns_txt_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

new dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord(scope: Construct, id: string, config: DataAzurermPrivateDnsTxtRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig">DataAzurermPrivateDnsTxtRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig">DataAzurermPrivateDnsTxtRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPrivateDnsTxtRecordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts">DataAzurermPrivateDnsTxtRecordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermPrivateDnsTxtRecord resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isConstruct"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isTerraformElement"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isTerraformDataSource"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.generateConfigForImport"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermPrivateDnsTxtRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPrivateDnsTxtRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPrivateDnsTxtRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsTxtRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.record">record</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList">DataAzurermPrivateDnsTxtRecordRecordList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference">DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts">DataAzurermPrivateDnsTxtRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.record"></a>

```typescript
public readonly record: DataAzurermPrivateDnsTxtRecordRecordList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList">DataAzurermPrivateDnsTxtRecordRecordList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference">DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPrivateDnsTxtRecordTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts">DataAzurermPrivateDnsTxtRecordTimeouts</a>

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsTxtRecordConfig <a name="DataAzurermPrivateDnsTxtRecordConfig" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

const dataAzurermPrivateDnsTxtRecordConfig: dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#name DataAzurermPrivateDnsTxtRecord#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#resource_group_name DataAzurermPrivateDnsTxtRecord#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.zoneName">zoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#zone_name DataAzurermPrivateDnsTxtRecord#zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#id DataAzurermPrivateDnsTxtRecord#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts">DataAzurermPrivateDnsTxtRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#name DataAzurermPrivateDnsTxtRecord#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#resource_group_name DataAzurermPrivateDnsTxtRecord#resource_group_name}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#zone_name DataAzurermPrivateDnsTxtRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#id DataAzurermPrivateDnsTxtRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsTxtRecordTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts">DataAzurermPrivateDnsTxtRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#timeouts DataAzurermPrivateDnsTxtRecord#timeouts}

---

### DataAzurermPrivateDnsTxtRecordRecord <a name="DataAzurermPrivateDnsTxtRecordRecord" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecord.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

const dataAzurermPrivateDnsTxtRecordRecord: dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecord = { ... }
```


### DataAzurermPrivateDnsTxtRecordTimeouts <a name="DataAzurermPrivateDnsTxtRecordTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

const dataAzurermPrivateDnsTxtRecordTimeouts: dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#read DataAzurermPrivateDnsTxtRecord#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/private_dns_txt_record#read DataAzurermPrivateDnsTxtRecord#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsTxtRecordRecordList <a name="DataAzurermPrivateDnsTxtRecordRecordList" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

new dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.get"></a>

```typescript
public get(index: number): DataAzurermPrivateDnsTxtRecordRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermPrivateDnsTxtRecordRecordOutputReference <a name="DataAzurermPrivateDnsTxtRecordRecordOutputReference" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

new dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecord">DataAzurermPrivateDnsTxtRecordRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermPrivateDnsTxtRecordRecord;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordRecord">DataAzurermPrivateDnsTxtRecordRecord</a>

---


### DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference <a name="DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsTxtRecord } from '@cdktn/provider-azurerm'

new dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts">DataAzurermPrivateDnsTxtRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPrivateDnsTxtRecordTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsTxtRecord.DataAzurermPrivateDnsTxtRecordTimeouts">DataAzurermPrivateDnsTxtRecordTimeouts</a>

---



