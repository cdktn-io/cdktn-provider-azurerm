# `storageContainerImmutabilityPolicy` Submodule <a name="`storageContainerImmutabilityPolicy` Submodule" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageContainerImmutabilityPolicy <a name="StorageContainerImmutabilityPolicy" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy azurerm_storage_container_immutability_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer"></a>

```typescript
import { storageContainerImmutabilityPolicy } from '@cdktn/provider-azurerm'

new storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy(scope: Construct, id: string, config: StorageContainerImmutabilityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig">StorageContainerImmutabilityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig">StorageContainerImmutabilityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetLocked">resetLocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetProtectedAppendWritesAllEnabled">resetProtectedAppendWritesAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetProtectedAppendWritesEnabled">resetProtectedAppendWritesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageContainerImmutabilityPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocked` <a name="resetLocked" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetLocked"></a>

```typescript
public resetLocked(): void
```

##### `resetProtectedAppendWritesAllEnabled` <a name="resetProtectedAppendWritesAllEnabled" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetProtectedAppendWritesAllEnabled"></a>

```typescript
public resetProtectedAppendWritesAllEnabled(): void
```

##### `resetProtectedAppendWritesEnabled` <a name="resetProtectedAppendWritesEnabled" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetProtectedAppendWritesEnabled"></a>

```typescript
public resetProtectedAppendWritesEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageContainerImmutabilityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isConstruct"></a>

```typescript
import { storageContainerImmutabilityPolicy } from '@cdktn/provider-azurerm'

storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformElement"></a>

```typescript
import { storageContainerImmutabilityPolicy } from '@cdktn/provider-azurerm'

storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformResource"></a>

```typescript
import { storageContainerImmutabilityPolicy } from '@cdktn/provider-azurerm'

storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport"></a>

```typescript
import { storageContainerImmutabilityPolicy } from '@cdktn/provider-azurerm'

storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StorageContainerImmutabilityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageContainerImmutabilityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageContainerImmutabilityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageContainerImmutabilityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference">StorageContainerImmutabilityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.immutabilityPeriodInDaysInput">immutabilityPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.lockedInput">lockedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesAllEnabledInput">protectedAppendWritesAllEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesEnabledInput">protectedAppendWritesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.storageContainerResourceManagerIdInput">storageContainerResourceManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.immutabilityPeriodInDays">immutabilityPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.locked">locked</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesAllEnabled">protectedAppendWritesAllEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesEnabled">protectedAppendWritesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.storageContainerResourceManagerId">storageContainerResourceManagerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: StorageContainerImmutabilityPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference">StorageContainerImmutabilityPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `immutabilityPeriodInDaysInput`<sup>Optional</sup> <a name="immutabilityPeriodInDaysInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.immutabilityPeriodInDaysInput"></a>

```typescript
public readonly immutabilityPeriodInDaysInput: number;
```

- *Type:* number

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.lockedInput"></a>

```typescript
public readonly lockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protectedAppendWritesAllEnabledInput`<sup>Optional</sup> <a name="protectedAppendWritesAllEnabledInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesAllEnabledInput"></a>

```typescript
public readonly protectedAppendWritesAllEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protectedAppendWritesEnabledInput`<sup>Optional</sup> <a name="protectedAppendWritesEnabledInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesEnabledInput"></a>

```typescript
public readonly protectedAppendWritesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `storageContainerResourceManagerIdInput`<sup>Optional</sup> <a name="storageContainerResourceManagerIdInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.storageContainerResourceManagerIdInput"></a>

```typescript
public readonly storageContainerResourceManagerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageContainerImmutabilityPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `immutabilityPeriodInDays`<sup>Required</sup> <a name="immutabilityPeriodInDays" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.immutabilityPeriodInDays"></a>

```typescript
public readonly immutabilityPeriodInDays: number;
```

- *Type:* number

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protectedAppendWritesAllEnabled`<sup>Required</sup> <a name="protectedAppendWritesAllEnabled" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesAllEnabled"></a>

```typescript
public readonly protectedAppendWritesAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protectedAppendWritesEnabled`<sup>Required</sup> <a name="protectedAppendWritesEnabled" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.protectedAppendWritesEnabled"></a>

```typescript
public readonly protectedAppendWritesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `storageContainerResourceManagerId`<sup>Required</sup> <a name="storageContainerResourceManagerId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.storageContainerResourceManagerId"></a>

```typescript
public readonly storageContainerResourceManagerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageContainerImmutabilityPolicyConfig <a name="StorageContainerImmutabilityPolicyConfig" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.Initializer"></a>

```typescript
import { storageContainerImmutabilityPolicy } from '@cdktn/provider-azurerm'

const storageContainerImmutabilityPolicyConfig: storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.immutabilityPeriodInDays">immutabilityPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#immutability_period_in_days StorageContainerImmutabilityPolicy#immutability_period_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.storageContainerResourceManagerId">storageContainerResourceManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#storage_container_resource_manager_id StorageContainerImmutabilityPolicy#storage_container_resource_manager_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#id StorageContainerImmutabilityPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.locked">locked</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#locked StorageContainerImmutabilityPolicy#locked}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.protectedAppendWritesAllEnabled">protectedAppendWritesAllEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#protected_append_writes_all_enabled StorageContainerImmutabilityPolicy#protected_append_writes_all_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.protectedAppendWritesEnabled">protectedAppendWritesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#protected_append_writes_enabled StorageContainerImmutabilityPolicy#protected_append_writes_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `immutabilityPeriodInDays`<sup>Required</sup> <a name="immutabilityPeriodInDays" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.immutabilityPeriodInDays"></a>

```typescript
public readonly immutabilityPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#immutability_period_in_days StorageContainerImmutabilityPolicy#immutability_period_in_days}.

---

##### `storageContainerResourceManagerId`<sup>Required</sup> <a name="storageContainerResourceManagerId" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.storageContainerResourceManagerId"></a>

```typescript
public readonly storageContainerResourceManagerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#storage_container_resource_manager_id StorageContainerImmutabilityPolicy#storage_container_resource_manager_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#id StorageContainerImmutabilityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#locked StorageContainerImmutabilityPolicy#locked}.

---

##### `protectedAppendWritesAllEnabled`<sup>Optional</sup> <a name="protectedAppendWritesAllEnabled" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.protectedAppendWritesAllEnabled"></a>

```typescript
public readonly protectedAppendWritesAllEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#protected_append_writes_all_enabled StorageContainerImmutabilityPolicy#protected_append_writes_all_enabled}.

---

##### `protectedAppendWritesEnabled`<sup>Optional</sup> <a name="protectedAppendWritesEnabled" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.protectedAppendWritesEnabled"></a>

```typescript
public readonly protectedAppendWritesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#protected_append_writes_enabled StorageContainerImmutabilityPolicy#protected_append_writes_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageContainerImmutabilityPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#timeouts StorageContainerImmutabilityPolicy#timeouts}

---

### StorageContainerImmutabilityPolicyTimeouts <a name="StorageContainerImmutabilityPolicyTimeouts" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.Initializer"></a>

```typescript
import { storageContainerImmutabilityPolicy } from '@cdktn/provider-azurerm'

const storageContainerImmutabilityPolicyTimeouts: storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#create StorageContainerImmutabilityPolicy#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#delete StorageContainerImmutabilityPolicy#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#read StorageContainerImmutabilityPolicy#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#update StorageContainerImmutabilityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#create StorageContainerImmutabilityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#delete StorageContainerImmutabilityPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#read StorageContainerImmutabilityPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_container_immutability_policy#update StorageContainerImmutabilityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageContainerImmutabilityPolicyTimeoutsOutputReference <a name="StorageContainerImmutabilityPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageContainerImmutabilityPolicy } from '@cdktn/provider-azurerm'

new storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageContainerImmutabilityPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageContainerImmutabilityPolicy.StorageContainerImmutabilityPolicyTimeouts">StorageContainerImmutabilityPolicyTimeouts</a>

---



