# `healthcareMedtechService` Submodule <a name="`healthcareMedtechService` Submodule" id="@cdktn/provider-azurerm.healthcareMedtechService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareMedtechService <a name="HealthcareMedtechService" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service azurerm_healthcare_medtech_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.Initializer"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

new healthcareMedtechService.HealthcareMedtechService(scope: Construct, id: string, config: HealthcareMedtechServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig">HealthcareMedtechServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig">HealthcareMedtechServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.putIdentity"></a>

```typescript
public putIdentity(value: HealthcareMedtechServiceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity">HealthcareMedtechServiceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcareMedtechServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts">HealthcareMedtechServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthcareMedtechService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isConstruct"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

healthcareMedtechService.HealthcareMedtechService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isTerraformElement"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

healthcareMedtechService.HealthcareMedtechService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isTerraformResource"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

healthcareMedtechService.HealthcareMedtechService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.generateConfigForImport"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

healthcareMedtechService.HealthcareMedtechService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HealthcareMedtechService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareMedtechService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareMedtechService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HealthcareMedtechService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference">HealthcareMedtechServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference">HealthcareMedtechServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.deviceMappingJsonInput">deviceMappingJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubConsumerGroupNameInput">eventhubConsumerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubNameInput">eventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubNamespaceNameInput">eventhubNamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity">HealthcareMedtechServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts">HealthcareMedtechServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.deviceMappingJson">deviceMappingJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubName">eventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubNamespaceName">eventhubNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.identity"></a>

```typescript
public readonly identity: HealthcareMedtechServiceIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference">HealthcareMedtechServiceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareMedtechServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference">HealthcareMedtechServiceTimeoutsOutputReference</a>

---

##### `deviceMappingJsonInput`<sup>Optional</sup> <a name="deviceMappingJsonInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.deviceMappingJsonInput"></a>

```typescript
public readonly deviceMappingJsonInput: string;
```

- *Type:* string

---

##### `eventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="eventhubConsumerGroupNameInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubConsumerGroupNameInput"></a>

```typescript
public readonly eventhubConsumerGroupNameInput: string;
```

- *Type:* string

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubNameInput"></a>

```typescript
public readonly eventhubNameInput: string;
```

- *Type:* string

---

##### `eventhubNamespaceNameInput`<sup>Optional</sup> <a name="eventhubNamespaceNameInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubNamespaceNameInput"></a>

```typescript
public readonly eventhubNamespaceNameInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.identityInput"></a>

```typescript
public readonly identityInput: HealthcareMedtechServiceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity">HealthcareMedtechServiceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcareMedtechServiceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts">HealthcareMedtechServiceTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `deviceMappingJson`<sup>Required</sup> <a name="deviceMappingJson" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.deviceMappingJson"></a>

```typescript
public readonly deviceMappingJson: string;
```

- *Type:* string

---

##### `eventhubConsumerGroupName`<sup>Required</sup> <a name="eventhubConsumerGroupName" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubConsumerGroupName"></a>

```typescript
public readonly eventhubConsumerGroupName: string;
```

- *Type:* string

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

---

##### `eventhubNamespaceName`<sup>Required</sup> <a name="eventhubNamespaceName" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.eventhubNamespaceName"></a>

```typescript
public readonly eventhubNamespaceName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareMedtechServiceConfig <a name="HealthcareMedtechServiceConfig" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.Initializer"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

const healthcareMedtechServiceConfig: healthcareMedtechService.HealthcareMedtechServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.deviceMappingJson">deviceMappingJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#device_mapping_json HealthcareMedtechService#device_mapping_json}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#eventhub_consumer_group_name HealthcareMedtechService#eventhub_consumer_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.eventhubName">eventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#eventhub_name HealthcareMedtechService#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.eventhubNamespaceName">eventhubNamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#eventhub_namespace_name HealthcareMedtechService#eventhub_namespace_name}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#location HealthcareMedtechService#location}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#name HealthcareMedtechService#name}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#workspace_id HealthcareMedtechService#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#id HealthcareMedtechService#id}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity">HealthcareMedtechServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#tags HealthcareMedtechService#tags}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts">HealthcareMedtechServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deviceMappingJson`<sup>Required</sup> <a name="deviceMappingJson" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.deviceMappingJson"></a>

```typescript
public readonly deviceMappingJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#device_mapping_json HealthcareMedtechService#device_mapping_json}.

---

##### `eventhubConsumerGroupName`<sup>Required</sup> <a name="eventhubConsumerGroupName" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.eventhubConsumerGroupName"></a>

```typescript
public readonly eventhubConsumerGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#eventhub_consumer_group_name HealthcareMedtechService#eventhub_consumer_group_name}.

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.eventhubName"></a>

```typescript
public readonly eventhubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#eventhub_name HealthcareMedtechService#eventhub_name}.

---

##### `eventhubNamespaceName`<sup>Required</sup> <a name="eventhubNamespaceName" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.eventhubNamespaceName"></a>

```typescript
public readonly eventhubNamespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#eventhub_namespace_name HealthcareMedtechService#eventhub_namespace_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#location HealthcareMedtechService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#name HealthcareMedtechService#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#workspace_id HealthcareMedtechService#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#id HealthcareMedtechService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.identity"></a>

```typescript
public readonly identity: HealthcareMedtechServiceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity">HealthcareMedtechServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#identity HealthcareMedtechService#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#tags HealthcareMedtechService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareMedtechServiceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts">HealthcareMedtechServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#timeouts HealthcareMedtechService#timeouts}

---

### HealthcareMedtechServiceIdentity <a name="HealthcareMedtechServiceIdentity" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity.Initializer"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

const healthcareMedtechServiceIdentity: healthcareMedtechService.HealthcareMedtechServiceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#type HealthcareMedtechService#type}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#identity_ids HealthcareMedtechService#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#type HealthcareMedtechService#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#identity_ids HealthcareMedtechService#identity_ids}.

---

### HealthcareMedtechServiceTimeouts <a name="HealthcareMedtechServiceTimeouts" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.Initializer"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

const healthcareMedtechServiceTimeouts: healthcareMedtechService.HealthcareMedtechServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#create HealthcareMedtechService#create}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#delete HealthcareMedtechService#delete}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#read HealthcareMedtechService#read}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#update HealthcareMedtechService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#create HealthcareMedtechService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#delete HealthcareMedtechService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#read HealthcareMedtechService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/healthcare_medtech_service#update HealthcareMedtechService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareMedtechServiceIdentityOutputReference <a name="HealthcareMedtechServiceIdentityOutputReference" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.Initializer"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

new healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity">HealthcareMedtechServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareMedtechServiceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceIdentity">HealthcareMedtechServiceIdentity</a>

---


### HealthcareMedtechServiceTimeoutsOutputReference <a name="HealthcareMedtechServiceTimeoutsOutputReference" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcareMedtechService } from '@cdktn/provider-azurerm'

new healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts">HealthcareMedtechServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareMedtechServiceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.healthcareMedtechService.HealthcareMedtechServiceTimeouts">HealthcareMedtechServiceTimeouts</a>

---



