# `appServiceManagedCertificate` Submodule <a name="`appServiceManagedCertificate` Submodule" id="@cdktn/provider-azurerm.appServiceManagedCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceManagedCertificate <a name="AppServiceManagedCertificate" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate azurerm_app_service_managed_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer"></a>

```typescript
import { appServiceManagedCertificate } from '@cdktn/provider-azurerm'

new appServiceManagedCertificate.AppServiceManagedCertificate(scope: Construct, id: string, config: AppServiceManagedCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig">AppServiceManagedCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig">AppServiceManagedCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: AppServiceManagedCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppServiceManagedCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isConstruct"></a>

```typescript
import { appServiceManagedCertificate } from '@cdktn/provider-azurerm'

appServiceManagedCertificate.AppServiceManagedCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformElement"></a>

```typescript
import { appServiceManagedCertificate } from '@cdktn/provider-azurerm'

appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformResource"></a>

```typescript
import { appServiceManagedCertificate } from '@cdktn/provider-azurerm'

appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport"></a>

```typescript
import { appServiceManagedCertificate } from '@cdktn/provider-azurerm'

appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppServiceManagedCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceManagedCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceManagedCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppServiceManagedCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.canonicalName">canonicalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.hostNames">hostNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.issueDate">issueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.subjectName">subjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference">AppServiceManagedCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.customHostnameBindingIdInput">customHostnameBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.customHostnameBindingId">customHostnameBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `canonicalName`<sup>Required</sup> <a name="canonicalName" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.canonicalName"></a>

```typescript
public readonly canonicalName: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `hostNames`<sup>Required</sup> <a name="hostNames" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.hostNames"></a>

```typescript
public readonly hostNames: string[];
```

- *Type:* string[]

---

##### `issueDate`<sup>Required</sup> <a name="issueDate" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.issueDate"></a>

```typescript
public readonly issueDate: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.subjectName"></a>

```typescript
public readonly subjectName: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceManagedCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference">AppServiceManagedCertificateTimeoutsOutputReference</a>

---

##### `customHostnameBindingIdInput`<sup>Optional</sup> <a name="customHostnameBindingIdInput" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.customHostnameBindingIdInput"></a>

```typescript
public readonly customHostnameBindingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppServiceManagedCertificateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

---

##### `customHostnameBindingId`<sup>Required</sup> <a name="customHostnameBindingId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.customHostnameBindingId"></a>

```typescript
public readonly customHostnameBindingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceManagedCertificateConfig <a name="AppServiceManagedCertificateConfig" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.Initializer"></a>

```typescript
import { appServiceManagedCertificate } from '@cdktn/provider-azurerm'

const appServiceManagedCertificateConfig: appServiceManagedCertificate.AppServiceManagedCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.customHostnameBindingId">customHostnameBindingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#custom_hostname_binding_id AppServiceManagedCertificate#custom_hostname_binding_id}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#id AppServiceManagedCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#tags AppServiceManagedCertificate#tags}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customHostnameBindingId`<sup>Required</sup> <a name="customHostnameBindingId" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.customHostnameBindingId"></a>

```typescript
public readonly customHostnameBindingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#custom_hostname_binding_id AppServiceManagedCertificate#custom_hostname_binding_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#id AppServiceManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#tags AppServiceManagedCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppServiceManagedCertificateTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#timeouts AppServiceManagedCertificate#timeouts}

---

### AppServiceManagedCertificateTimeouts <a name="AppServiceManagedCertificateTimeouts" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.Initializer"></a>

```typescript
import { appServiceManagedCertificate } from '@cdktn/provider-azurerm'

const appServiceManagedCertificateTimeouts: appServiceManagedCertificate.AppServiceManagedCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#create AppServiceManagedCertificate#create}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#delete AppServiceManagedCertificate#delete}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#read AppServiceManagedCertificate#read}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#update AppServiceManagedCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#create AppServiceManagedCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#delete AppServiceManagedCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#read AppServiceManagedCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/app_service_managed_certificate#update AppServiceManagedCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceManagedCertificateTimeoutsOutputReference <a name="AppServiceManagedCertificateTimeoutsOutputReference" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { appServiceManagedCertificate } from '@cdktn/provider-azurerm'

new appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppServiceManagedCertificateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

---



