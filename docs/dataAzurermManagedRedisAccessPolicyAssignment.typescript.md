# `dataAzurermManagedRedisAccessPolicyAssignment` Submodule <a name="`dataAzurermManagedRedisAccessPolicyAssignment` Submodule" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagedRedisAccessPolicyAssignment <a name="DataAzurermManagedRedisAccessPolicyAssignment" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment azurerm_managed_redis_access_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer"></a>

```typescript
import { dataAzurermManagedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

new dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment(scope: Construct, id: string, config: DataAzurermManagedRedisAccessPolicyAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig">DataAzurermManagedRedisAccessPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig">DataAzurermManagedRedisAccessPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermManagedRedisAccessPolicyAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermManagedRedisAccessPolicyAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isConstruct"></a>

```typescript
import { dataAzurermManagedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformElement"></a>

```typescript
import { dataAzurermManagedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformDataSource"></a>

```typescript
import { dataAzurermManagedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport"></a>

```typescript
import { dataAzurermManagedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermManagedRedisAccessPolicyAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermManagedRedisAccessPolicyAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermManagedRedisAccessPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermManagedRedisAccessPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference">DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.managedRedisNameInput">managedRedisNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.managedRedisName">managedRedisName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference">DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedRedisNameInput`<sup>Optional</sup> <a name="managedRedisNameInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.managedRedisNameInput"></a>

```typescript
public readonly managedRedisNameInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermManagedRedisAccessPolicyAssignmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedRedisName`<sup>Required</sup> <a name="managedRedisName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.managedRedisName"></a>

```typescript
public readonly managedRedisName: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagedRedisAccessPolicyAssignmentConfig <a name="DataAzurermManagedRedisAccessPolicyAssignmentConfig" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.Initializer"></a>

```typescript
import { dataAzurermManagedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

const dataAzurermManagedRedisAccessPolicyAssignmentConfig: dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.managedRedisName">managedRedisName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#managed_redis_name DataAzurermManagedRedisAccessPolicyAssignment#managed_redis_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#object_id DataAzurermManagedRedisAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#resource_group_name DataAzurermManagedRedisAccessPolicyAssignment#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#id DataAzurermManagedRedisAccessPolicyAssignment#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `managedRedisName`<sup>Required</sup> <a name="managedRedisName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.managedRedisName"></a>

```typescript
public readonly managedRedisName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#managed_redis_name DataAzurermManagedRedisAccessPolicyAssignment#managed_redis_name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#object_id DataAzurermManagedRedisAccessPolicyAssignment#object_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#resource_group_name DataAzurermManagedRedisAccessPolicyAssignment#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#id DataAzurermManagedRedisAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermManagedRedisAccessPolicyAssignmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#timeouts DataAzurermManagedRedisAccessPolicyAssignment#timeouts}

---

### DataAzurermManagedRedisAccessPolicyAssignmentTimeouts <a name="DataAzurermManagedRedisAccessPolicyAssignmentTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts.Initializer"></a>

```typescript
import { dataAzurermManagedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

const dataAzurermManagedRedisAccessPolicyAssignmentTimeouts: dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#read DataAzurermManagedRedisAccessPolicyAssignment#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_redis_access_policy_assignment#read DataAzurermManagedRedisAccessPolicyAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference <a name="DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermManagedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

new dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermManagedRedisAccessPolicyAssignmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermManagedRedisAccessPolicyAssignment.DataAzurermManagedRedisAccessPolicyAssignmentTimeouts">DataAzurermManagedRedisAccessPolicyAssignmentTimeouts</a>

---



