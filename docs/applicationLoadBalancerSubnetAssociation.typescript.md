# `applicationLoadBalancerSubnetAssociation` Submodule <a name="`applicationLoadBalancerSubnetAssociation` Submodule" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadBalancerSubnetAssociation <a name="ApplicationLoadBalancerSubnetAssociation" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association azurerm_application_load_balancer_subnet_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer"></a>

```typescript
import { applicationLoadBalancerSubnetAssociation } from '@cdktn/provider-azurerm'

new applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation(scope: Construct, id: string, config: ApplicationLoadBalancerSubnetAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig">ApplicationLoadBalancerSubnetAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig">ApplicationLoadBalancerSubnetAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationLoadBalancerSubnetAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationLoadBalancerSubnetAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct"></a>

```typescript
import { applicationLoadBalancerSubnetAssociation } from '@cdktn/provider-azurerm'

applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement"></a>

```typescript
import { applicationLoadBalancerSubnetAssociation } from '@cdktn/provider-azurerm'

applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource"></a>

```typescript
import { applicationLoadBalancerSubnetAssociation } from '@cdktn/provider-azurerm'

applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport"></a>

```typescript
import { applicationLoadBalancerSubnetAssociation } from '@cdktn/provider-azurerm'

applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApplicationLoadBalancerSubnetAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationLoadBalancerSubnetAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationLoadBalancerSubnetAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationLoadBalancerSubnetAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference">ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerIdInput">applicationLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerId">applicationLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference">ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference</a>

---

##### `applicationLoadBalancerIdInput`<sup>Optional</sup> <a name="applicationLoadBalancerIdInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerIdInput"></a>

```typescript
public readonly applicationLoadBalancerIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationLoadBalancerSubnetAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

---

##### `applicationLoadBalancerId`<sup>Required</sup> <a name="applicationLoadBalancerId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerId"></a>

```typescript
public readonly applicationLoadBalancerId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadBalancerSubnetAssociationConfig <a name="ApplicationLoadBalancerSubnetAssociationConfig" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.Initializer"></a>

```typescript
import { applicationLoadBalancerSubnetAssociation } from '@cdktn/provider-azurerm'

const applicationLoadBalancerSubnetAssociationConfig: applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.applicationLoadBalancerId">applicationLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#application_load_balancer_id ApplicationLoadBalancerSubnetAssociation#application_load_balancer_id}. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#name ApplicationLoadBalancerSubnetAssociation#name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#subnet_id ApplicationLoadBalancerSubnetAssociation#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#id ApplicationLoadBalancerSubnetAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#tags ApplicationLoadBalancerSubnetAssociation#tags}. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationLoadBalancerId`<sup>Required</sup> <a name="applicationLoadBalancerId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.applicationLoadBalancerId"></a>

```typescript
public readonly applicationLoadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#application_load_balancer_id ApplicationLoadBalancerSubnetAssociation#application_load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#name ApplicationLoadBalancerSubnetAssociation#name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#subnet_id ApplicationLoadBalancerSubnetAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#id ApplicationLoadBalancerSubnetAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#tags ApplicationLoadBalancerSubnetAssociation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationLoadBalancerSubnetAssociationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#timeouts ApplicationLoadBalancerSubnetAssociation#timeouts}

---

### ApplicationLoadBalancerSubnetAssociationTimeouts <a name="ApplicationLoadBalancerSubnetAssociationTimeouts" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.Initializer"></a>

```typescript
import { applicationLoadBalancerSubnetAssociation } from '@cdktn/provider-azurerm'

const applicationLoadBalancerSubnetAssociationTimeouts: applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#create ApplicationLoadBalancerSubnetAssociation#create}. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#delete ApplicationLoadBalancerSubnetAssociation#delete}. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#read ApplicationLoadBalancerSubnetAssociation#read}. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#update ApplicationLoadBalancerSubnetAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#create ApplicationLoadBalancerSubnetAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#delete ApplicationLoadBalancerSubnetAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#read ApplicationLoadBalancerSubnetAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/application_load_balancer_subnet_association#update ApplicationLoadBalancerSubnetAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference <a name="ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationLoadBalancerSubnetAssociation } from '@cdktn/provider-azurerm'

new applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationLoadBalancerSubnetAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

---



