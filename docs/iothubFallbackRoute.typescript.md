# `iothubFallbackRoute` Submodule <a name="`iothubFallbackRoute` Submodule" id="@cdktn/provider-azurerm.iothubFallbackRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubFallbackRouteA <a name="IothubFallbackRouteA" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route azurerm_iothub_fallback_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer"></a>

```typescript
import { iothubFallbackRoute } from '@cdktn/provider-azurerm'

new iothubFallbackRoute.IothubFallbackRouteA(scope: Construct, id: string, config: IothubFallbackRouteAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig">IothubFallbackRouteAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig">IothubFallbackRouteAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts"></a>

```typescript
public putTimeouts(value: IothubFallbackRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IothubFallbackRouteA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct"></a>

```typescript
import { iothubFallbackRoute } from '@cdktn/provider-azurerm'

iothubFallbackRoute.IothubFallbackRouteA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement"></a>

```typescript
import { iothubFallbackRoute } from '@cdktn/provider-azurerm'

iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource"></a>

```typescript
import { iothubFallbackRoute } from '@cdktn/provider-azurerm'

iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport"></a>

```typescript
import { iothubFallbackRoute } from '@cdktn/provider-azurerm'

iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IothubFallbackRouteA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IothubFallbackRouteA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IothubFallbackRouteA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IothubFallbackRouteA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference">IothubFallbackRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNamesInput">endpointNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubNameInput">iothubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNames">endpointNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubName">iothubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeouts"></a>

```typescript
public readonly timeouts: IothubFallbackRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference">IothubFallbackRouteTimeoutsOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointNamesInput`<sup>Optional</sup> <a name="endpointNamesInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNamesInput"></a>

```typescript
public readonly endpointNamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubNameInput`<sup>Optional</sup> <a name="iothubNameInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubNameInput"></a>

```typescript
public readonly iothubNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IothubFallbackRouteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointNames`<sup>Required</sup> <a name="endpointNames" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNames"></a>

```typescript
public readonly endpointNames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iothubName`<sup>Required</sup> <a name="iothubName" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubName"></a>

```typescript
public readonly iothubName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubFallbackRouteAConfig <a name="IothubFallbackRouteAConfig" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.Initializer"></a>

```typescript
import { iothubFallbackRoute } from '@cdktn/provider-azurerm'

const iothubFallbackRouteAConfig: iothubFallbackRoute.IothubFallbackRouteAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.endpointNames">endpointNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.iothubName">iothubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}.

---

##### `endpointNames`<sup>Required</sup> <a name="endpointNames" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.endpointNames"></a>

```typescript
public readonly endpointNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}.

---

##### `iothubName`<sup>Required</sup> <a name="iothubName" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.iothubName"></a>

```typescript
public readonly iothubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IothubFallbackRouteTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#timeouts IothubFallbackRouteA#timeouts}

---

### IothubFallbackRouteTimeouts <a name="IothubFallbackRouteTimeouts" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.Initializer"></a>

```typescript
import { iothubFallbackRoute } from '@cdktn/provider-azurerm'

const iothubFallbackRouteTimeouts: iothubFallbackRoute.IothubFallbackRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#create IothubFallbackRouteA#create}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#delete IothubFallbackRouteA#delete}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#read IothubFallbackRouteA#read}. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#update IothubFallbackRouteA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#create IothubFallbackRouteA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#delete IothubFallbackRouteA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#read IothubFallbackRouteA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/iothub_fallback_route#update IothubFallbackRouteA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubFallbackRouteTimeoutsOutputReference <a name="IothubFallbackRouteTimeoutsOutputReference" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { iothubFallbackRoute } from '@cdktn/provider-azurerm'

new iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IothubFallbackRouteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

---



