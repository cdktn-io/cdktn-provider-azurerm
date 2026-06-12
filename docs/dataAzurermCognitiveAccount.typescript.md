# `dataAzurermCognitiveAccount` Submodule <a name="`dataAzurermCognitiveAccount` Submodule" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCognitiveAccount <a name="DataAzurermCognitiveAccount" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account azurerm_cognitive_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccount(scope: Construct, id: string, config: DataAzurermCognitiveAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig">DataAzurermCognitiveAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig">DataAzurermCognitiveAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermCognitiveAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermCognitiveAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermCognitiveAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermCognitiveAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermCognitiveAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCognitiveAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList">DataAzurermCognitiveAccountCustomerManagedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customQuestionAnsweringSearchServiceId">customQuestionAnsweringSearchServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customSubdomainName">customSubdomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dynamicThrottlingEnabled">dynamicThrottlingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqdns">fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList">DataAzurermCognitiveAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.localAuthEnabled">localAuthEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadClientId">metricsAdvisorAadClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadTenantId">metricsAdvisorAadTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorSuperUserName">metricsAdvisorSuperUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorWebsiteName">metricsAdvisorWebsiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList">DataAzurermCognitiveAccountNetworkAclsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkInjection">networkInjection</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList">DataAzurermCognitiveAccountNetworkInjectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.projectManagementEnabled">projectManagementEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.qnaRuntimeEndpoint">qnaRuntimeEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList">DataAzurermCognitiveAccountStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference">DataAzurermCognitiveAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: DataAzurermCognitiveAccountCustomerManagedKeyList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList">DataAzurermCognitiveAccountCustomerManagedKeyList</a>

---

##### `customQuestionAnsweringSearchServiceId`<sup>Required</sup> <a name="customQuestionAnsweringSearchServiceId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customQuestionAnsweringSearchServiceId"></a>

```typescript
public readonly customQuestionAnsweringSearchServiceId: string;
```

- *Type:* string

---

##### `customSubdomainName`<sup>Required</sup> <a name="customSubdomainName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customSubdomainName"></a>

```typescript
public readonly customSubdomainName: string;
```

- *Type:* string

---

##### `dynamicThrottlingEnabled`<sup>Required</sup> <a name="dynamicThrottlingEnabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dynamicThrottlingEnabled"></a>

```typescript
public readonly dynamicThrottlingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.identity"></a>

```typescript
public readonly identity: DataAzurermCognitiveAccountIdentityList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList">DataAzurermCognitiveAccountIdentityList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metricsAdvisorAadClientId`<sup>Required</sup> <a name="metricsAdvisorAadClientId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadClientId"></a>

```typescript
public readonly metricsAdvisorAadClientId: string;
```

- *Type:* string

---

##### `metricsAdvisorAadTenantId`<sup>Required</sup> <a name="metricsAdvisorAadTenantId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadTenantId"></a>

```typescript
public readonly metricsAdvisorAadTenantId: string;
```

- *Type:* string

---

##### `metricsAdvisorSuperUserName`<sup>Required</sup> <a name="metricsAdvisorSuperUserName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorSuperUserName"></a>

```typescript
public readonly metricsAdvisorSuperUserName: string;
```

- *Type:* string

---

##### `metricsAdvisorWebsiteName`<sup>Required</sup> <a name="metricsAdvisorWebsiteName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorWebsiteName"></a>

```typescript
public readonly metricsAdvisorWebsiteName: string;
```

- *Type:* string

---

##### `networkAcls`<sup>Required</sup> <a name="networkAcls" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkAcls"></a>

```typescript
public readonly networkAcls: DataAzurermCognitiveAccountNetworkAclsList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList">DataAzurermCognitiveAccountNetworkAclsList</a>

---

##### `networkInjection`<sup>Required</sup> <a name="networkInjection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkInjection"></a>

```typescript
public readonly networkInjection: DataAzurermCognitiveAccountNetworkInjectionList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList">DataAzurermCognitiveAccountNetworkInjectionList</a>

---

##### `outboundNetworkAccessRestricted`<sup>Required</sup> <a name="outboundNetworkAccessRestricted" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.outboundNetworkAccessRestricted"></a>

```typescript
public readonly outboundNetworkAccessRestricted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `projectManagementEnabled`<sup>Required</sup> <a name="projectManagementEnabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.projectManagementEnabled"></a>

```typescript
public readonly projectManagementEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `qnaRuntimeEndpoint`<sup>Required</sup> <a name="qnaRuntimeEndpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.qnaRuntimeEndpoint"></a>

```typescript
public readonly qnaRuntimeEndpoint: string;
```

- *Type:* string

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.storage"></a>

```typescript
public readonly storage: DataAzurermCognitiveAccountStorageList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList">DataAzurermCognitiveAccountStorageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCognitiveAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference">DataAzurermCognitiveAccountTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermCognitiveAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCognitiveAccountConfig <a name="DataAzurermCognitiveAccountConfig" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

const dataAzurermCognitiveAccountConfig: dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#name DataAzurermCognitiveAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#resource_group_name DataAzurermCognitiveAccount#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#id DataAzurermCognitiveAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#tags DataAzurermCognitiveAccount#tags}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#name DataAzurermCognitiveAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#resource_group_name DataAzurermCognitiveAccount#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#id DataAzurermCognitiveAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#tags DataAzurermCognitiveAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCognitiveAccountTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#timeouts DataAzurermCognitiveAccount#timeouts}

---

### DataAzurermCognitiveAccountCustomerManagedKey <a name="DataAzurermCognitiveAccountCustomerManagedKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

const dataAzurermCognitiveAccountCustomerManagedKey: dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey = { ... }
```


### DataAzurermCognitiveAccountIdentity <a name="DataAzurermCognitiveAccountIdentity" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

const dataAzurermCognitiveAccountIdentity: dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity = { ... }
```


### DataAzurermCognitiveAccountNetworkAcls <a name="DataAzurermCognitiveAccountNetworkAcls" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

const dataAzurermCognitiveAccountNetworkAcls: dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls = { ... }
```


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

const dataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules: dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules = { ... }
```


### DataAzurermCognitiveAccountNetworkInjection <a name="DataAzurermCognitiveAccountNetworkInjection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

const dataAzurermCognitiveAccountNetworkInjection: dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection = { ... }
```


### DataAzurermCognitiveAccountStorage <a name="DataAzurermCognitiveAccountStorage" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

const dataAzurermCognitiveAccountStorage: dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage = { ... }
```


### DataAzurermCognitiveAccountTimeouts <a name="DataAzurermCognitiveAccountTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

const dataAzurermCognitiveAccountTimeouts: dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#read DataAzurermCognitiveAccount#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cognitive_account#read DataAzurermCognitiveAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCognitiveAccountCustomerManagedKeyList <a name="DataAzurermCognitiveAccountCustomerManagedKeyList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get"></a>

```typescript
public get(index: number): DataAzurermCognitiveAccountCustomerManagedKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCognitiveAccountCustomerManagedKeyOutputReference <a name="DataAzurermCognitiveAccountCustomerManagedKeyOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId">identityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey">DataAzurermCognitiveAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCognitiveAccountCustomerManagedKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey">DataAzurermCognitiveAccountCustomerManagedKey</a>

---


### DataAzurermCognitiveAccountIdentityList <a name="DataAzurermCognitiveAccountIdentityList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermCognitiveAccountIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCognitiveAccountIdentityOutputReference <a name="DataAzurermCognitiveAccountIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity">DataAzurermCognitiveAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCognitiveAccountIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity">DataAzurermCognitiveAccountIdentity</a>

---


### DataAzurermCognitiveAccountNetworkAclsList <a name="DataAzurermCognitiveAccountNetworkAclsList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get"></a>

```typescript
public get(index: number): DataAzurermCognitiveAccountNetworkAclsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCognitiveAccountNetworkAclsOutputReference <a name="DataAzurermCognitiveAccountNetworkAclsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.bypass">bypass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.ipRules">ipRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules">virtualNetworkRules</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls">DataAzurermCognitiveAccountNetworkAcls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.bypass"></a>

```typescript
public readonly bypass: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

---

##### `virtualNetworkRules`<sup>Required</sup> <a name="virtualNetworkRules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules"></a>

```typescript
public readonly virtualNetworkRules: DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCognitiveAccountNetworkAcls;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls">DataAzurermCognitiveAccountNetworkAcls</a>

---


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get"></a>

```typescript
public get(index: number): DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules</a>

---


### DataAzurermCognitiveAccountNetworkInjectionList <a name="DataAzurermCognitiveAccountNetworkInjectionList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get"></a>

```typescript
public get(index: number): DataAzurermCognitiveAccountNetworkInjectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCognitiveAccountNetworkInjectionOutputReference <a name="DataAzurermCognitiveAccountNetworkInjectionOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.scenario">scenario</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection">DataAzurermCognitiveAccountNetworkInjection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scenario`<sup>Required</sup> <a name="scenario" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.scenario"></a>

```typescript
public readonly scenario: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCognitiveAccountNetworkInjection;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection">DataAzurermCognitiveAccountNetworkInjection</a>

---


### DataAzurermCognitiveAccountStorageList <a name="DataAzurermCognitiveAccountStorageList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get"></a>

```typescript
public get(index: number): DataAzurermCognitiveAccountStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCognitiveAccountStorageOutputReference <a name="DataAzurermCognitiveAccountStorageOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.identityClientId">identityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage">DataAzurermCognitiveAccountStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCognitiveAccountStorage;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage">DataAzurermCognitiveAccountStorage</a>

---


### DataAzurermCognitiveAccountTimeoutsOutputReference <a name="DataAzurermCognitiveAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCognitiveAccount } from '@cdktn/provider-azurerm'

new dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermCognitiveAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

---



