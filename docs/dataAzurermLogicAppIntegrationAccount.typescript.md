# `dataAzurermLogicAppIntegrationAccount` Submodule <a name="`dataAzurermLogicAppIntegrationAccount` Submodule" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLogicAppIntegrationAccount <a name="DataAzurermLogicAppIntegrationAccount" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account azurerm_logic_app_integration_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.Initializer"></a>

```typescript
import { dataAzurermLogicAppIntegrationAccount } from '@cdktn/provider-azurerm'

new dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount(scope: Construct, id: string, config: DataAzurermLogicAppIntegrationAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig">DataAzurermLogicAppIntegrationAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig">DataAzurermLogicAppIntegrationAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermLogicAppIntegrationAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts">DataAzurermLogicAppIntegrationAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermLogicAppIntegrationAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isConstruct"></a>

```typescript
import { dataAzurermLogicAppIntegrationAccount } from '@cdktn/provider-azurerm'

dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isTerraformElement"></a>

```typescript
import { dataAzurermLogicAppIntegrationAccount } from '@cdktn/provider-azurerm'

dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isTerraformDataSource"></a>

```typescript
import { dataAzurermLogicAppIntegrationAccount } from '@cdktn/provider-azurerm'

dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.generateConfigForImport"></a>

```typescript
import { dataAzurermLogicAppIntegrationAccount } from '@cdktn/provider-azurerm'

dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermLogicAppIntegrationAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermLogicAppIntegrationAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermLogicAppIntegrationAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermLogicAppIntegrationAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference">DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts">DataAzurermLogicAppIntegrationAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference">DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermLogicAppIntegrationAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts">DataAzurermLogicAppIntegrationAccountTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLogicAppIntegrationAccountConfig <a name="DataAzurermLogicAppIntegrationAccountConfig" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.Initializer"></a>

```typescript
import { dataAzurermLogicAppIntegrationAccount } from '@cdktn/provider-azurerm'

const dataAzurermLogicAppIntegrationAccountConfig: dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#name DataAzurermLogicAppIntegrationAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#resource_group_name DataAzurermLogicAppIntegrationAccount#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#id DataAzurermLogicAppIntegrationAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts">DataAzurermLogicAppIntegrationAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#name DataAzurermLogicAppIntegrationAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#resource_group_name DataAzurermLogicAppIntegrationAccount#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#id DataAzurermLogicAppIntegrationAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermLogicAppIntegrationAccountTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts">DataAzurermLogicAppIntegrationAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#timeouts DataAzurermLogicAppIntegrationAccount#timeouts}

---

### DataAzurermLogicAppIntegrationAccountTimeouts <a name="DataAzurermLogicAppIntegrationAccountTimeouts" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts.Initializer"></a>

```typescript
import { dataAzurermLogicAppIntegrationAccount } from '@cdktn/provider-azurerm'

const dataAzurermLogicAppIntegrationAccountTimeouts: dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#read DataAzurermLogicAppIntegrationAccount#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/logic_app_integration_account#read DataAzurermLogicAppIntegrationAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference <a name="DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermLogicAppIntegrationAccount } from '@cdktn/provider-azurerm'

new dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts">DataAzurermLogicAppIntegrationAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermLogicAppIntegrationAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermLogicAppIntegrationAccount.DataAzurermLogicAppIntegrationAccountTimeouts">DataAzurermLogicAppIntegrationAccountTimeouts</a>

---



