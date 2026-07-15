# `managedRedisAccessPolicyAssignment` Submodule <a name="`managedRedisAccessPolicyAssignment` Submodule" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedRedisAccessPolicyAssignment <a name="ManagedRedisAccessPolicyAssignment" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment azurerm_managed_redis_access_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer"></a>

```typescript
import { managedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

new managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment(scope: Construct, id: string, config: ManagedRedisAccessPolicyAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig">ManagedRedisAccessPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig">ManagedRedisAccessPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedRedisAccessPolicyAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedRedisAccessPolicyAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isConstruct"></a>

```typescript
import { managedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformElement"></a>

```typescript
import { managedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformResource"></a>

```typescript
import { managedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport"></a>

```typescript
import { managedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ManagedRedisAccessPolicyAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedRedisAccessPolicyAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedRedisAccessPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedRedisAccessPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference">ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.managedRedisIdInput">managedRedisIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.managedRedisId">managedRedisId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference">ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedRedisIdInput`<sup>Optional</sup> <a name="managedRedisIdInput" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.managedRedisIdInput"></a>

```typescript
public readonly managedRedisIdInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedRedisAccessPolicyAssignmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedRedisId`<sup>Required</sup> <a name="managedRedisId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.managedRedisId"></a>

```typescript
public readonly managedRedisId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedRedisAccessPolicyAssignmentConfig <a name="ManagedRedisAccessPolicyAssignmentConfig" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.Initializer"></a>

```typescript
import { managedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

const managedRedisAccessPolicyAssignmentConfig: managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.managedRedisId">managedRedisId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#managed_redis_id ManagedRedisAccessPolicyAssignment#managed_redis_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#object_id ManagedRedisAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#id ManagedRedisAccessPolicyAssignment#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `managedRedisId`<sup>Required</sup> <a name="managedRedisId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.managedRedisId"></a>

```typescript
public readonly managedRedisId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#managed_redis_id ManagedRedisAccessPolicyAssignment#managed_redis_id}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#object_id ManagedRedisAccessPolicyAssignment#object_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#id ManagedRedisAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedRedisAccessPolicyAssignmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#timeouts ManagedRedisAccessPolicyAssignment#timeouts}

---

### ManagedRedisAccessPolicyAssignmentTimeouts <a name="ManagedRedisAccessPolicyAssignmentTimeouts" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.Initializer"></a>

```typescript
import { managedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

const managedRedisAccessPolicyAssignmentTimeouts: managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#create ManagedRedisAccessPolicyAssignment#create}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#delete ManagedRedisAccessPolicyAssignment#delete}. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#read ManagedRedisAccessPolicyAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#create ManagedRedisAccessPolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#delete ManagedRedisAccessPolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_redis_access_policy_assignment#read ManagedRedisAccessPolicyAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference <a name="ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedRedisAccessPolicyAssignment } from '@cdktn/provider-azurerm'

new managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedRedisAccessPolicyAssignmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedRedisAccessPolicyAssignment.ManagedRedisAccessPolicyAssignmentTimeouts">ManagedRedisAccessPolicyAssignmentTimeouts</a>

---



