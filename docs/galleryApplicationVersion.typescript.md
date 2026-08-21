# `galleryApplicationVersion` Submodule <a name="`galleryApplicationVersion` Submodule" id="@cdktn/provider-azurerm.galleryApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GalleryApplicationVersion <a name="GalleryApplicationVersion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version azurerm_gallery_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

new galleryApplicationVersion.GalleryApplicationVersion(scope: Construct, id: string, config: GalleryApplicationVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig">GalleryApplicationVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig">GalleryApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction">putManageAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion">putTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetConfigFile">resetConfigFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEnableHealthCheck">resetEnableHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEndOfLifeDate">resetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetExcludeFromLatest">resetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetPackageFile">resetPackageFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManageAction` <a name="putManageAction" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction"></a>

```typescript
public putManageAction(value: GalleryApplicationVersionManageAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource"></a>

```typescript
public putSource(value: GalleryApplicationVersionSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---

##### `putTargetRegion` <a name="putTargetRegion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion"></a>

```typescript
public putTargetRegion(value: IResolvable | GalleryApplicationVersionTargetRegion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GalleryApplicationVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

---

##### `resetConfigFile` <a name="resetConfigFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetConfigFile"></a>

```typescript
public resetConfigFile(): void
```

##### `resetEnableHealthCheck` <a name="resetEnableHealthCheck" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEnableHealthCheck"></a>

```typescript
public resetEnableHealthCheck(): void
```

##### `resetEndOfLifeDate` <a name="resetEndOfLifeDate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEndOfLifeDate"></a>

```typescript
public resetEndOfLifeDate(): void
```

##### `resetExcludeFromLatest` <a name="resetExcludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetExcludeFromLatest"></a>

```typescript
public resetExcludeFromLatest(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPackageFile` <a name="resetPackageFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetPackageFile"></a>

```typescript
public resetPackageFile(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GalleryApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

galleryApplicationVersion.GalleryApplicationVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GalleryApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GalleryApplicationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GalleryApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GalleryApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageAction">manageAction</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference">GalleryApplicationVersionManageActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.source">source</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference">GalleryApplicationVersionSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegion">targetRegion</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList">GalleryApplicationVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference">GalleryApplicationVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFileInput">configFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheckInput">enableHealthCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDateInput">endOfLifeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatestInput">excludeFromLatestInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationIdInput">galleryApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageActionInput">manageActionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFileInput">packageFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegionInput">targetRegionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFile">configFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheck">enableHealthCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDate">endOfLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatest">excludeFromLatest</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationId">galleryApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFile">packageFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `manageAction`<sup>Required</sup> <a name="manageAction" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageAction"></a>

```typescript
public readonly manageAction: GalleryApplicationVersionManageActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference">GalleryApplicationVersionManageActionOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.source"></a>

```typescript
public readonly source: GalleryApplicationVersionSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference">GalleryApplicationVersionSourceOutputReference</a>

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegion"></a>

```typescript
public readonly targetRegion: GalleryApplicationVersionTargetRegionList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList">GalleryApplicationVersionTargetRegionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GalleryApplicationVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference">GalleryApplicationVersionTimeoutsOutputReference</a>

---

##### `configFileInput`<sup>Optional</sup> <a name="configFileInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFileInput"></a>

```typescript
public readonly configFileInput: string;
```

- *Type:* string

---

##### `enableHealthCheckInput`<sup>Optional</sup> <a name="enableHealthCheckInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheckInput"></a>

```typescript
public readonly enableHealthCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endOfLifeDateInput`<sup>Optional</sup> <a name="endOfLifeDateInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDateInput"></a>

```typescript
public readonly endOfLifeDateInput: string;
```

- *Type:* string

---

##### `excludeFromLatestInput`<sup>Optional</sup> <a name="excludeFromLatestInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatestInput"></a>

```typescript
public readonly excludeFromLatestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `galleryApplicationIdInput`<sup>Optional</sup> <a name="galleryApplicationIdInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationIdInput"></a>

```typescript
public readonly galleryApplicationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `manageActionInput`<sup>Optional</sup> <a name="manageActionInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageActionInput"></a>

```typescript
public readonly manageActionInput: GalleryApplicationVersionManageAction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `packageFileInput`<sup>Optional</sup> <a name="packageFileInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFileInput"></a>

```typescript
public readonly packageFileInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.sourceInput"></a>

```typescript
public readonly sourceInput: GalleryApplicationVersionSource;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetRegionInput`<sup>Optional</sup> <a name="targetRegionInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegionInput"></a>

```typescript
public readonly targetRegionInput: IResolvable | GalleryApplicationVersionTargetRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GalleryApplicationVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

---

##### `configFile`<sup>Required</sup> <a name="configFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

---

##### `enableHealthCheck`<sup>Required</sup> <a name="enableHealthCheck" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheck"></a>

```typescript
public readonly enableHealthCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endOfLifeDate`<sup>Required</sup> <a name="endOfLifeDate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDate"></a>

```typescript
public readonly endOfLifeDate: string;
```

- *Type:* string

---

##### `excludeFromLatest`<sup>Required</sup> <a name="excludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatest"></a>

```typescript
public readonly excludeFromLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `galleryApplicationId`<sup>Required</sup> <a name="galleryApplicationId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationId"></a>

```typescript
public readonly galleryApplicationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packageFile`<sup>Required</sup> <a name="packageFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFile"></a>

```typescript
public readonly packageFile: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GalleryApplicationVersionConfig <a name="GalleryApplicationVersionConfig" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

const galleryApplicationVersionConfig: galleryApplicationVersion.GalleryApplicationVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.galleryApplicationId">galleryApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.manageAction">manageAction</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | manage_action block. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.targetRegion">targetRegion</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>[]</code> | target_region block. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.configFile">configFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.enableHealthCheck">enableHealthCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.endOfLifeDate">endOfLifeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.excludeFromLatest">excludeFromLatest</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.packageFile">packageFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `galleryApplicationId`<sup>Required</sup> <a name="galleryApplicationId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.galleryApplicationId"></a>

```typescript
public readonly galleryApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}.

---

##### `manageAction`<sup>Required</sup> <a name="manageAction" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.manageAction"></a>

```typescript
public readonly manageAction: GalleryApplicationVersionManageAction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

manage_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#manage_action GalleryApplicationVersion#manage_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.source"></a>

```typescript
public readonly source: GalleryApplicationVersionSource;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#source GalleryApplicationVersion#source}

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.targetRegion"></a>

```typescript
public readonly targetRegion: IResolvable | GalleryApplicationVersionTargetRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>[]

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#target_region GalleryApplicationVersion#target_region}

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}.

---

##### `enableHealthCheck`<sup>Optional</sup> <a name="enableHealthCheck" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.enableHealthCheck"></a>

```typescript
public readonly enableHealthCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.endOfLifeDate"></a>

```typescript
public readonly endOfLifeDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}.

---

##### `excludeFromLatest`<sup>Optional</sup> <a name="excludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.excludeFromLatest"></a>

```typescript
public readonly excludeFromLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageFile`<sup>Optional</sup> <a name="packageFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.packageFile"></a>

```typescript
public readonly packageFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GalleryApplicationVersionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#timeouts GalleryApplicationVersion#timeouts}

---

### GalleryApplicationVersionManageAction <a name="GalleryApplicationVersionManageAction" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

const galleryApplicationVersionManageAction: galleryApplicationVersion.GalleryApplicationVersionManageAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.install">install</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.remove">remove</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}. |

---

##### `install`<sup>Required</sup> <a name="install" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.install"></a>

```typescript
public readonly install: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}.

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.remove"></a>

```typescript
public readonly remove: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}.

---

### GalleryApplicationVersionSource <a name="GalleryApplicationVersionSource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

const galleryApplicationVersionSource: galleryApplicationVersion.GalleryApplicationVersionSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.mediaLink">mediaLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.defaultConfigurationLink">defaultConfigurationLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}. |

---

##### `mediaLink`<sup>Required</sup> <a name="mediaLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.mediaLink"></a>

```typescript
public readonly mediaLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}.

---

##### `defaultConfigurationLink`<sup>Optional</sup> <a name="defaultConfigurationLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.defaultConfigurationLink"></a>

```typescript
public readonly defaultConfigurationLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}.

---

### GalleryApplicationVersionTargetRegion <a name="GalleryApplicationVersionTargetRegion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

const galleryApplicationVersionTargetRegion: galleryApplicationVersion.GalleryApplicationVersionTargetRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.regionalReplicaCount">regionalReplicaCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.excludeFromLatest">excludeFromLatest</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `regionalReplicaCount`<sup>Required</sup> <a name="regionalReplicaCount" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.regionalReplicaCount"></a>

```typescript
public readonly regionalReplicaCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}.

---

##### `excludeFromLatest`<sup>Optional</sup> <a name="excludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.excludeFromLatest"></a>

```typescript
public readonly excludeFromLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}.

---

### GalleryApplicationVersionTimeouts <a name="GalleryApplicationVersionTimeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

const galleryApplicationVersionTimeouts: galleryApplicationVersion.GalleryApplicationVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GalleryApplicationVersionManageActionOutputReference <a name="GalleryApplicationVersionManageActionOutputReference" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

new galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.installInput">installInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.removeInput">removeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.install">install</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.remove">remove</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `installInput`<sup>Optional</sup> <a name="installInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.installInput"></a>

```typescript
public readonly installInput: string;
```

- *Type:* string

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `install`<sup>Required</sup> <a name="install" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.install"></a>

```typescript
public readonly install: string;
```

- *Type:* string

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.remove"></a>

```typescript
public readonly remove: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GalleryApplicationVersionManageAction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---


### GalleryApplicationVersionSourceOutputReference <a name="GalleryApplicationVersionSourceOutputReference" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

new galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resetDefaultConfigurationLink">resetDefaultConfigurationLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultConfigurationLink` <a name="resetDefaultConfigurationLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resetDefaultConfigurationLink"></a>

```typescript
public resetDefaultConfigurationLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLinkInput">defaultConfigurationLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLinkInput">mediaLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLink">defaultConfigurationLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLink">mediaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultConfigurationLinkInput`<sup>Optional</sup> <a name="defaultConfigurationLinkInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLinkInput"></a>

```typescript
public readonly defaultConfigurationLinkInput: string;
```

- *Type:* string

---

##### `mediaLinkInput`<sup>Optional</sup> <a name="mediaLinkInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLinkInput"></a>

```typescript
public readonly mediaLinkInput: string;
```

- *Type:* string

---

##### `defaultConfigurationLink`<sup>Required</sup> <a name="defaultConfigurationLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLink"></a>

```typescript
public readonly defaultConfigurationLink: string;
```

- *Type:* string

---

##### `mediaLink`<sup>Required</sup> <a name="mediaLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLink"></a>

```typescript
public readonly mediaLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GalleryApplicationVersionSource;
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---


### GalleryApplicationVersionTargetRegionList <a name="GalleryApplicationVersionTargetRegionList" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

new galleryApplicationVersion.GalleryApplicationVersionTargetRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get"></a>

```typescript
public get(index: number): GalleryApplicationVersionTargetRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GalleryApplicationVersionTargetRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>[]

---


### GalleryApplicationVersionTargetRegionOutputReference <a name="GalleryApplicationVersionTargetRegionOutputReference" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

new galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetExcludeFromLatest">resetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeFromLatest` <a name="resetExcludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetExcludeFromLatest"></a>

```typescript
public resetExcludeFromLatest(): void
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```typescript
public resetStorageAccountType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatestInput">excludeFromLatestInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCountInput">regionalReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatest">excludeFromLatest</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCount">regionalReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeFromLatestInput`<sup>Optional</sup> <a name="excludeFromLatestInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatestInput"></a>

```typescript
public readonly excludeFromLatestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionalReplicaCountInput`<sup>Optional</sup> <a name="regionalReplicaCountInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```typescript
public readonly regionalReplicaCountInput: number;
```

- *Type:* number

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `excludeFromLatest`<sup>Required</sup> <a name="excludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatest"></a>

```typescript
public readonly excludeFromLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regionalReplicaCount`<sup>Required</sup> <a name="regionalReplicaCount" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```typescript
public readonly regionalReplicaCount: number;
```

- *Type:* number

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GalleryApplicationVersionTargetRegion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>

---


### GalleryApplicationVersionTimeoutsOutputReference <a name="GalleryApplicationVersionTimeoutsOutputReference" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { galleryApplicationVersion } from '@cdktn/provider-azurerm'

new galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GalleryApplicationVersionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

---



