# `dataAzurermAppConfigurationKey` Submodule <a name="`dataAzurermAppConfigurationKey` Submodule" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppConfigurationKey <a name="DataAzurermAppConfigurationKey" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key azurerm_app_configuration_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.Initializer"></a>

```typescript
import { dataAzurermAppConfigurationKey } from '@cdktn/provider-azurerm'

new dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey(scope: Construct, id: string, config: DataAzurermAppConfigurationKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig">DataAzurermAppConfigurationKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig">DataAzurermAppConfigurationKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermAppConfigurationKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts">DataAzurermAppConfigurationKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermAppConfigurationKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isConstruct"></a>

```typescript
import { dataAzurermAppConfigurationKey } from '@cdktn/provider-azurerm'

dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isTerraformElement"></a>

```typescript
import { dataAzurermAppConfigurationKey } from '@cdktn/provider-azurerm'

dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isTerraformDataSource"></a>

```typescript
import { dataAzurermAppConfigurationKey } from '@cdktn/provider-azurerm'

dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.generateConfigForImport"></a>

```typescript
import { dataAzurermAppConfigurationKey } from '@cdktn/provider-azurerm'

dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermAppConfigurationKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermAppConfigurationKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermAppConfigurationKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermAppConfigurationKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.locked">locked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference">DataAzurermAppConfigurationKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.vaultKeyReference">vaultKeyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.configurationStoreIdInput">configurationStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts">DataAzurermAppConfigurationKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.configurationStoreId">configurationStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.label">label</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.locked"></a>

```typescript
public readonly locked: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermAppConfigurationKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference">DataAzurermAppConfigurationKeyTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `vaultKeyReference`<sup>Required</sup> <a name="vaultKeyReference" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.vaultKeyReference"></a>

```typescript
public readonly vaultKeyReference: string;
```

- *Type:* string

---

##### `configurationStoreIdInput`<sup>Optional</sup> <a name="configurationStoreIdInput" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.configurationStoreIdInput"></a>

```typescript
public readonly configurationStoreIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermAppConfigurationKeyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts">DataAzurermAppConfigurationKeyTimeouts</a>

---

##### `configurationStoreId`<sup>Required</sup> <a name="configurationStoreId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.configurationStoreId"></a>

```typescript
public readonly configurationStoreId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppConfigurationKeyConfig <a name="DataAzurermAppConfigurationKeyConfig" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.Initializer"></a>

```typescript
import { dataAzurermAppConfigurationKey } from '@cdktn/provider-azurerm'

const dataAzurermAppConfigurationKeyConfig: dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.configurationStoreId">configurationStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#configuration_store_id DataAzurermAppConfigurationKey#configuration_store_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#key DataAzurermAppConfigurationKey#key}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#id DataAzurermAppConfigurationKey#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#label DataAzurermAppConfigurationKey#label}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts">DataAzurermAppConfigurationKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationStoreId`<sup>Required</sup> <a name="configurationStoreId" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.configurationStoreId"></a>

```typescript
public readonly configurationStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#configuration_store_id DataAzurermAppConfigurationKey#configuration_store_id}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#key DataAzurermAppConfigurationKey#key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#id DataAzurermAppConfigurationKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#label DataAzurermAppConfigurationKey#label}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermAppConfigurationKeyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts">DataAzurermAppConfigurationKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#timeouts DataAzurermAppConfigurationKey#timeouts}

---

### DataAzurermAppConfigurationKeyTimeouts <a name="DataAzurermAppConfigurationKeyTimeouts" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts.Initializer"></a>

```typescript
import { dataAzurermAppConfigurationKey } from '@cdktn/provider-azurerm'

const dataAzurermAppConfigurationKeyTimeouts: dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#read DataAzurermAppConfigurationKey#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/app_configuration_key#read DataAzurermAppConfigurationKey#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppConfigurationKeyTimeoutsOutputReference <a name="DataAzurermAppConfigurationKeyTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppConfigurationKey } from '@cdktn/provider-azurerm'

new dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts">DataAzurermAppConfigurationKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermAppConfigurationKeyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermAppConfigurationKey.DataAzurermAppConfigurationKeyTimeouts">DataAzurermAppConfigurationKeyTimeouts</a>

---



