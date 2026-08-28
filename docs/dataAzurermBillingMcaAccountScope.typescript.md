# `dataAzurermBillingMcaAccountScope` Submodule <a name="`dataAzurermBillingMcaAccountScope` Submodule" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBillingMcaAccountScope <a name="DataAzurermBillingMcaAccountScope" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope azurerm_billing_mca_account_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer"></a>

```typescript
import { dataAzurermBillingMcaAccountScope } from '@cdktn/provider-azurerm'

new dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope(scope: Construct, id: string, config: DataAzurermBillingMcaAccountScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig">DataAzurermBillingMcaAccountScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig">DataAzurermBillingMcaAccountScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermBillingMcaAccountScopeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermBillingMcaAccountScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct"></a>

```typescript
import { dataAzurermBillingMcaAccountScope } from '@cdktn/provider-azurerm'

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement"></a>

```typescript
import { dataAzurermBillingMcaAccountScope } from '@cdktn/provider-azurerm'

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource"></a>

```typescript
import { dataAzurermBillingMcaAccountScope } from '@cdktn/provider-azurerm'

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport"></a>

```typescript
import { dataAzurermBillingMcaAccountScope } from '@cdktn/provider-azurerm'

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermBillingMcaAccountScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermBillingMcaAccountScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermBillingMcaAccountScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermBillingMcaAccountScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference">DataAzurermBillingMcaAccountScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountNameInput">billingAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileNameInput">billingProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionNameInput">invoiceSectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountName">billingAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileName">billingProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionName">invoiceSectionName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermBillingMcaAccountScopeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference">DataAzurermBillingMcaAccountScopeTimeoutsOutputReference</a>

---

##### `billingAccountNameInput`<sup>Optional</sup> <a name="billingAccountNameInput" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountNameInput"></a>

```typescript
public readonly billingAccountNameInput: string;
```

- *Type:* string

---

##### `billingProfileNameInput`<sup>Optional</sup> <a name="billingProfileNameInput" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileNameInput"></a>

```typescript
public readonly billingProfileNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invoiceSectionNameInput`<sup>Optional</sup> <a name="invoiceSectionNameInput" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionNameInput"></a>

```typescript
public readonly invoiceSectionNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermBillingMcaAccountScopeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

---

##### `billingAccountName`<sup>Required</sup> <a name="billingAccountName" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountName"></a>

```typescript
public readonly billingAccountName: string;
```

- *Type:* string

---

##### `billingProfileName`<sup>Required</sup> <a name="billingProfileName" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileName"></a>

```typescript
public readonly billingProfileName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `invoiceSectionName`<sup>Required</sup> <a name="invoiceSectionName" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionName"></a>

```typescript
public readonly invoiceSectionName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBillingMcaAccountScopeConfig <a name="DataAzurermBillingMcaAccountScopeConfig" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.Initializer"></a>

```typescript
import { dataAzurermBillingMcaAccountScope } from '@cdktn/provider-azurerm'

const dataAzurermBillingMcaAccountScopeConfig: dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingAccountName">billingAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingProfileName">billingProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.invoiceSectionName">invoiceSectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `billingAccountName`<sup>Required</sup> <a name="billingAccountName" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingAccountName"></a>

```typescript
public readonly billingAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}.

---

##### `billingProfileName`<sup>Required</sup> <a name="billingProfileName" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingProfileName"></a>

```typescript
public readonly billingProfileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}.

---

##### `invoiceSectionName`<sup>Required</sup> <a name="invoiceSectionName" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.invoiceSectionName"></a>

```typescript
public readonly invoiceSectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermBillingMcaAccountScopeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#timeouts DataAzurermBillingMcaAccountScope#timeouts}

---

### DataAzurermBillingMcaAccountScopeTimeouts <a name="DataAzurermBillingMcaAccountScopeTimeouts" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.Initializer"></a>

```typescript
import { dataAzurermBillingMcaAccountScope } from '@cdktn/provider-azurerm'

const dataAzurermBillingMcaAccountScopeTimeouts: dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBillingMcaAccountScopeTimeoutsOutputReference <a name="DataAzurermBillingMcaAccountScopeTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermBillingMcaAccountScope } from '@cdktn/provider-azurerm'

new dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermBillingMcaAccountScopeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

---



