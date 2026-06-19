# `dataAzurermPublicIpPrefix` Submodule <a name="`dataAzurermPublicIpPrefix` Submodule" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPublicIpPrefix <a name="DataAzurermPublicIpPrefix" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix azurerm_public_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.Initializer"></a>

```typescript
import { dataAzurermPublicIpPrefix } from '@cdktn/provider-azurerm'

new dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix(scope: Construct, id: string, config: DataAzurermPublicIpPrefixConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig">DataAzurermPublicIpPrefixConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig">DataAzurermPublicIpPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPublicIpPrefixTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts">DataAzurermPublicIpPrefixTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermPublicIpPrefix resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isConstruct"></a>

```typescript
import { dataAzurermPublicIpPrefix } from '@cdktn/provider-azurerm'

dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isTerraformElement"></a>

```typescript
import { dataAzurermPublicIpPrefix } from '@cdktn/provider-azurerm'

dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isTerraformDataSource"></a>

```typescript
import { dataAzurermPublicIpPrefix } from '@cdktn/provider-azurerm'

dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.generateConfigForImport"></a>

```typescript
import { dataAzurermPublicIpPrefix } from '@cdktn/provider-azurerm'

dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermPublicIpPrefix resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPublicIpPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPublicIpPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermPublicIpPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.ipPrefix">ipPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.prefixLength">prefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.skuTier">skuTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference">DataAzurermPublicIpPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts">DataAzurermPublicIpPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `ipPrefix`<sup>Required</sup> <a name="ipPrefix" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.ipPrefix"></a>

```typescript
public readonly ipPrefix: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `skuTier`<sup>Required</sup> <a name="skuTier" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.skuTier"></a>

```typescript
public readonly skuTier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPublicIpPrefixTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference">DataAzurermPublicIpPrefixTimeoutsOutputReference</a>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPublicIpPrefixTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts">DataAzurermPublicIpPrefixTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefix.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPublicIpPrefixConfig <a name="DataAzurermPublicIpPrefixConfig" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.Initializer"></a>

```typescript
import { dataAzurermPublicIpPrefix } from '@cdktn/provider-azurerm'

const dataAzurermPublicIpPrefixConfig: dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#name DataAzurermPublicIpPrefix#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#resource_group_name DataAzurermPublicIpPrefix#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#id DataAzurermPublicIpPrefix#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts">DataAzurermPublicIpPrefixTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#name DataAzurermPublicIpPrefix#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#resource_group_name DataAzurermPublicIpPrefix#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#id DataAzurermPublicIpPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPublicIpPrefixTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts">DataAzurermPublicIpPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#timeouts DataAzurermPublicIpPrefix#timeouts}

---

### DataAzurermPublicIpPrefixTimeouts <a name="DataAzurermPublicIpPrefixTimeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts.Initializer"></a>

```typescript
import { dataAzurermPublicIpPrefix } from '@cdktn/provider-azurerm'

const dataAzurermPublicIpPrefixTimeouts: dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#read DataAzurermPublicIpPrefix#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/public_ip_prefix#read DataAzurermPublicIpPrefix#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPublicIpPrefixTimeoutsOutputReference <a name="DataAzurermPublicIpPrefixTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPublicIpPrefix } from '@cdktn/provider-azurerm'

new dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts">DataAzurermPublicIpPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPublicIpPrefixTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermPublicIpPrefix.DataAzurermPublicIpPrefixTimeouts">DataAzurermPublicIpPrefixTimeouts</a>

---



