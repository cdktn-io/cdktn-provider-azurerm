# `dataAzurermNetworkSecurityPerimeterProfile` Submodule <a name="`dataAzurermNetworkSecurityPerimeterProfile` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkSecurityPerimeterProfile <a name="DataAzurermNetworkSecurityPerimeterProfile" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile azurerm_network_security_perimeter_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

new dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile(scope: Construct, id: string, config: DataAzurermNetworkSecurityPerimeterProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig">DataAzurermNetworkSecurityPerimeterProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig">DataAzurermNetworkSecurityPerimeterProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermNetworkSecurityPerimeterProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetworkSecurityPerimeterProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct"></a>

```typescript
import { dataAzurermNetworkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement"></a>

```typescript
import { dataAzurermNetworkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource"></a>

```typescript
import { dataAzurermNetworkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport"></a>

```typescript
import { dataAzurermNetworkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermNetworkSecurityPerimeterProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNetworkSecurityPerimeterProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNetworkSecurityPerimeterProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkSecurityPerimeterProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference">DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterIdInput">networkSecurityPerimeterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterId">networkSecurityPerimeterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference">DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkSecurityPerimeterIdInput`<sup>Optional</sup> <a name="networkSecurityPerimeterIdInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterIdInput"></a>

```typescript
public readonly networkSecurityPerimeterIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermNetworkSecurityPerimeterProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkSecurityPerimeterId`<sup>Required</sup> <a name="networkSecurityPerimeterId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterId"></a>

```typescript
public readonly networkSecurityPerimeterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkSecurityPerimeterProfileConfig <a name="DataAzurermNetworkSecurityPerimeterProfileConfig" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

const dataAzurermNetworkSecurityPerimeterProfileConfig: dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#name DataAzurermNetworkSecurityPerimeterProfile#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.networkSecurityPerimeterId">networkSecurityPerimeterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#network_security_perimeter_id DataAzurermNetworkSecurityPerimeterProfile#network_security_perimeter_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#id DataAzurermNetworkSecurityPerimeterProfile#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#name DataAzurermNetworkSecurityPerimeterProfile#name}.

---

##### `networkSecurityPerimeterId`<sup>Required</sup> <a name="networkSecurityPerimeterId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.networkSecurityPerimeterId"></a>

```typescript
public readonly networkSecurityPerimeterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#network_security_perimeter_id DataAzurermNetworkSecurityPerimeterProfile#network_security_perimeter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#id DataAzurermNetworkSecurityPerimeterProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetworkSecurityPerimeterProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#timeouts DataAzurermNetworkSecurityPerimeterProfile#timeouts}

---

### DataAzurermNetworkSecurityPerimeterProfileTimeouts <a name="DataAzurermNetworkSecurityPerimeterProfileTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

const dataAzurermNetworkSecurityPerimeterProfileTimeouts: dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#read DataAzurermNetworkSecurityPerimeterProfile#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/network_security_perimeter_profile#read DataAzurermNetworkSecurityPerimeterProfile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference <a name="DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityPerimeterProfile } from '@cdktn/provider-azurerm'

new dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermNetworkSecurityPerimeterProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---



