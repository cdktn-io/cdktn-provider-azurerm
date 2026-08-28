# `netappVolumeBucket` Submodule <a name="`netappVolumeBucket` Submodule" id="@cdktn/provider-azurerm.netappVolumeBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeBucket <a name="NetappVolumeBucket" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket azurerm_netapp_volume_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

new netappVolumeBucket.NetappVolumeBucket(scope: Construct, id: string, config: NetappVolumeBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig">NetappVolumeBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig">NetappVolumeBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putFileSystemNfsUser">putFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putKeyVault">putKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetFileSystemCifsUsername">resetFileSystemCifsUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetFileSystemNfsUser">resetFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetKeyVault">resetKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFileSystemNfsUser` <a name="putFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putFileSystemNfsUser"></a>

```typescript
public putFileSystemNfsUser(value: NetappVolumeBucketFileSystemNfsUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putFileSystemNfsUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a>

---

##### `putKeyVault` <a name="putKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putKeyVault"></a>

```typescript
public putKeyVault(value: NetappVolumeBucketKeyVault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putTimeouts"></a>

```typescript
public putTimeouts(value: NetappVolumeBucketTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a>

---

##### `resetFileSystemCifsUsername` <a name="resetFileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetFileSystemCifsUsername"></a>

```typescript
public resetFileSystemCifsUsername(): void
```

##### `resetFileSystemNfsUser` <a name="resetFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetFileSystemNfsUser"></a>

```typescript
public resetFileSystemNfsUser(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVault` <a name="resetKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetKeyVault"></a>

```typescript
public resetKeyVault(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetappVolumeBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isConstruct"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

netappVolumeBucket.NetappVolumeBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformElement"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

netappVolumeBucket.NetappVolumeBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformResource"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

netappVolumeBucket.NetappVolumeBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

netappVolumeBucket.NetappVolumeBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetappVolumeBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolumeBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolumeBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolumeBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemNfsUser">fileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference">NetappVolumeBucketFileSystemNfsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.keyVault">keyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference">NetappVolumeBucketKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverCertificateCommonName">serverCertificateCommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverCertificateExpiryDate">serverCertificateExpiryDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverIpAddress">serverIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference">NetappVolumeBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemCifsUsernameInput">fileSystemCifsUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemNfsUserInput">fileSystemNfsUserInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.keyVaultInput">keyVaultInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemCifsUsername">fileSystemCifsUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fileSystemNfsUser`<sup>Required</sup> <a name="fileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemNfsUser"></a>

```typescript
public readonly fileSystemNfsUser: NetappVolumeBucketFileSystemNfsUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference">NetappVolumeBucketFileSystemNfsUserOutputReference</a>

---

##### `keyVault`<sup>Required</sup> <a name="keyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.keyVault"></a>

```typescript
public readonly keyVault: NetappVolumeBucketKeyVaultOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference">NetappVolumeBucketKeyVaultOutputReference</a>

---

##### `serverCertificateCommonName`<sup>Required</sup> <a name="serverCertificateCommonName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverCertificateCommonName"></a>

```typescript
public readonly serverCertificateCommonName: string;
```

- *Type:* string

---

##### `serverCertificateExpiryDate`<sup>Required</sup> <a name="serverCertificateExpiryDate" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverCertificateExpiryDate"></a>

```typescript
public readonly serverCertificateExpiryDate: string;
```

- *Type:* string

---

##### `serverIpAddress`<sup>Required</sup> <a name="serverIpAddress" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverIpAddress"></a>

```typescript
public readonly serverIpAddress: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeBucketTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference">NetappVolumeBucketTimeoutsOutputReference</a>

---

##### `fileSystemCifsUsernameInput`<sup>Optional</sup> <a name="fileSystemCifsUsernameInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemCifsUsernameInput"></a>

```typescript
public readonly fileSystemCifsUsernameInput: string;
```

- *Type:* string

---

##### `fileSystemNfsUserInput`<sup>Optional</sup> <a name="fileSystemNfsUserInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemNfsUserInput"></a>

```typescript
public readonly fileSystemNfsUserInput: NetappVolumeBucketFileSystemNfsUser;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultInput`<sup>Optional</sup> <a name="keyVaultInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.keyVaultInput"></a>

```typescript
public readonly keyVaultInput: NetappVolumeBucketKeyVault;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetappVolumeBucketTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `fileSystemCifsUsername`<sup>Required</sup> <a name="fileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemCifsUsername"></a>

```typescript
public readonly fileSystemCifsUsername: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBucketConfig <a name="NetappVolumeBucketConfig" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.Initializer"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

const netappVolumeBucketConfig: netappVolumeBucket.NetappVolumeBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#name NetappVolumeBucket#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.volumeId">volumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#volume_id NetappVolumeBucket#volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.fileSystemCifsUsername">fileSystemCifsUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#file_system_cifs_username NetappVolumeBucket#file_system_cifs_username}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.fileSystemNfsUser">fileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a></code> | file_system_nfs_user block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#id NetappVolumeBucket#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.keyVault">keyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#path NetappVolumeBucket#path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.permissions">permissions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#permissions NetappVolumeBucket#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#name NetappVolumeBucket#name}.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#volume_id NetappVolumeBucket#volume_id}.

---

##### `fileSystemCifsUsername`<sup>Optional</sup> <a name="fileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.fileSystemCifsUsername"></a>

```typescript
public readonly fileSystemCifsUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#file_system_cifs_username NetappVolumeBucket#file_system_cifs_username}.

---

##### `fileSystemNfsUser`<sup>Optional</sup> <a name="fileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.fileSystemNfsUser"></a>

```typescript
public readonly fileSystemNfsUser: NetappVolumeBucketFileSystemNfsUser;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a>

file_system_nfs_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#file_system_nfs_user NetappVolumeBucket#file_system_nfs_user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#id NetappVolumeBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVault`<sup>Optional</sup> <a name="keyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.keyVault"></a>

```typescript
public readonly keyVault: NetappVolumeBucketKeyVault;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#key_vault NetappVolumeBucket#key_vault}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#path NetappVolumeBucket#path}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#permissions NetappVolumeBucket#permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeBucketTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#timeouts NetappVolumeBucket#timeouts}

---

### NetappVolumeBucketFileSystemNfsUser <a name="NetappVolumeBucketFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.Initializer"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

const netappVolumeBucketFileSystemNfsUser: netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.property.groupId">groupId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#group_id NetappVolumeBucket#group_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.property.userId">userId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#user_id NetappVolumeBucket#user_id}. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#group_id NetappVolumeBucket#group_id}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#user_id NetappVolumeBucket#user_id}.

---

### NetappVolumeBucketKeyVault <a name="NetappVolumeBucketKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.Initializer"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

const netappVolumeBucketKeyVault: netappVolumeBucket.NetappVolumeBucketKeyVault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.certificateKeyVaultUri">certificateKeyVaultUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#certificate_key_vault_uri NetappVolumeBucket#certificate_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.certificateName">certificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#certificate_name NetappVolumeBucket#certificate_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.credentialsKeyVaultUri">credentialsKeyVaultUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#credentials_key_vault_uri NetappVolumeBucket#credentials_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.credentialsSecretName">credentialsSecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#credentials_secret_name NetappVolumeBucket#credentials_secret_name}. |

---

##### `certificateKeyVaultUri`<sup>Required</sup> <a name="certificateKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.certificateKeyVaultUri"></a>

```typescript
public readonly certificateKeyVaultUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#certificate_key_vault_uri NetappVolumeBucket#certificate_key_vault_uri}.

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#certificate_name NetappVolumeBucket#certificate_name}.

---

##### `credentialsKeyVaultUri`<sup>Required</sup> <a name="credentialsKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.credentialsKeyVaultUri"></a>

```typescript
public readonly credentialsKeyVaultUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#credentials_key_vault_uri NetappVolumeBucket#credentials_key_vault_uri}.

---

##### `credentialsSecretName`<sup>Required</sup> <a name="credentialsSecretName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.credentialsSecretName"></a>

```typescript
public readonly credentialsSecretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#credentials_secret_name NetappVolumeBucket#credentials_secret_name}.

---

### NetappVolumeBucketTimeouts <a name="NetappVolumeBucketTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.Initializer"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

const netappVolumeBucketTimeouts: netappVolumeBucket.NetappVolumeBucketTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#create NetappVolumeBucket#create}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#delete NetappVolumeBucket#delete}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#read NetappVolumeBucket#read}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#update NetappVolumeBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#create NetappVolumeBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#delete NetappVolumeBucket#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#read NetappVolumeBucket#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/netapp_volume_bucket#update NetappVolumeBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBucketFileSystemNfsUserOutputReference <a name="NetappVolumeBucketFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

new netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeBucketFileSystemNfsUser;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a>

---


### NetappVolumeBucketKeyVaultOutputReference <a name="NetappVolumeBucketKeyVaultOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

new netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUriInput">certificateKeyVaultUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUriInput">credentialsKeyVaultUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretNameInput">credentialsSecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUri">certificateKeyVaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUri">credentialsKeyVaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretName">credentialsSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateKeyVaultUriInput`<sup>Optional</sup> <a name="certificateKeyVaultUriInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUriInput"></a>

```typescript
public readonly certificateKeyVaultUriInput: string;
```

- *Type:* string

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `credentialsKeyVaultUriInput`<sup>Optional</sup> <a name="credentialsKeyVaultUriInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUriInput"></a>

```typescript
public readonly credentialsKeyVaultUriInput: string;
```

- *Type:* string

---

##### `credentialsSecretNameInput`<sup>Optional</sup> <a name="credentialsSecretNameInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretNameInput"></a>

```typescript
public readonly credentialsSecretNameInput: string;
```

- *Type:* string

---

##### `certificateKeyVaultUri`<sup>Required</sup> <a name="certificateKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```typescript
public readonly certificateKeyVaultUri: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `credentialsKeyVaultUri`<sup>Required</sup> <a name="credentialsKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```typescript
public readonly credentialsKeyVaultUri: string;
```

- *Type:* string

---

##### `credentialsSecretName`<sup>Required</sup> <a name="credentialsSecretName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretName"></a>

```typescript
public readonly credentialsSecretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeBucketKeyVault;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a>

---


### NetappVolumeBucketTimeoutsOutputReference <a name="NetappVolumeBucketTimeoutsOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer"></a>

```typescript
import { netappVolumeBucket } from '@cdktn/provider-azurerm'

new netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeBucketTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a>

---



