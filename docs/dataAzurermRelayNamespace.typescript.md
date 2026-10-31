# `dataAzurermRelayNamespace` Submodule <a name="`dataAzurermRelayNamespace` Submodule" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermRelayNamespace <a name="DataAzurermRelayNamespace" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace azurerm_relay_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer"></a>

```typescript
import { dataAzurermRelayNamespace } from '@cdktn/provider-azurerm'

new dataAzurermRelayNamespace.DataAzurermRelayNamespace(scope: Construct, id: string, config: DataAzurermRelayNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig">DataAzurermRelayNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig">DataAzurermRelayNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermRelayNamespaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermRelayNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct"></a>

```typescript
import { dataAzurermRelayNamespace } from '@cdktn/provider-azurerm'

dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement"></a>

```typescript
import { dataAzurermRelayNamespace } from '@cdktn/provider-azurerm'

dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource"></a>

```typescript
import { dataAzurermRelayNamespace } from '@cdktn/provider-azurerm'

dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport"></a>

```typescript
import { dataAzurermRelayNamespace } from '@cdktn/provider-azurerm'

dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermRelayNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermRelayNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermRelayNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermRelayNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.metricId">metricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference">DataAzurermRelayNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metricId`<sup>Required</sup> <a name="metricId" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.metricId"></a>

```typescript
public readonly metricId: string;
```

- *Type:* string

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermRelayNamespaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference">DataAzurermRelayNamespaceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermRelayNamespaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermRelayNamespaceConfig <a name="DataAzurermRelayNamespaceConfig" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.Initializer"></a>

```typescript
import { dataAzurermRelayNamespace } from '@cdktn/provider-azurerm'

const dataAzurermRelayNamespaceConfig: dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#name DataAzurermRelayNamespace#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#resource_group_name DataAzurermRelayNamespace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#id DataAzurermRelayNamespace#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#name DataAzurermRelayNamespace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#resource_group_name DataAzurermRelayNamespace#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#id DataAzurermRelayNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermRelayNamespaceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#timeouts DataAzurermRelayNamespace#timeouts}

---

### DataAzurermRelayNamespaceTimeouts <a name="DataAzurermRelayNamespaceTimeouts" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.Initializer"></a>

```typescript
import { dataAzurermRelayNamespace } from '@cdktn/provider-azurerm'

const dataAzurermRelayNamespaceTimeouts: dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#read DataAzurermRelayNamespace#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/relay_namespace#read DataAzurermRelayNamespace#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermRelayNamespaceTimeoutsOutputReference <a name="DataAzurermRelayNamespaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRelayNamespace } from '@cdktn/provider-azurerm'

new dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermRelayNamespaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermRelayNamespace.DataAzurermRelayNamespaceTimeouts">DataAzurermRelayNamespaceTimeouts</a>

---



