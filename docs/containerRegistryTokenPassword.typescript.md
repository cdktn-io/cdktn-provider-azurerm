# `containerRegistryTokenPassword` Submodule <a name="`containerRegistryTokenPassword` Submodule" id="@cdktn/provider-azurerm.containerRegistryTokenPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryTokenPassword <a name="ContainerRegistryTokenPassword" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password azurerm_container_registry_token_password}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

new containerRegistryTokenPassword.ContainerRegistryTokenPassword(scope: Construct, id: string, config: ContainerRegistryTokenPasswordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig">ContainerRegistryTokenPasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig">ContainerRegistryTokenPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1">putPassword1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2">putPassword2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetPassword2">resetPassword2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPassword1` <a name="putPassword1" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1"></a>

```typescript
public putPassword1(value: ContainerRegistryTokenPasswordPassword1): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

---

##### `putPassword2` <a name="putPassword2" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2"></a>

```typescript
public putPassword2(value: ContainerRegistryTokenPasswordPassword2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerRegistryTokenPasswordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword2` <a name="resetPassword2" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetPassword2"></a>

```typescript
public resetPassword2(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContainerRegistryTokenPassword resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ContainerRegistryTokenPassword resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistryTokenPassword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistryTokenPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContainerRegistryTokenPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1">password1</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference">ContainerRegistryTokenPasswordPassword1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2">password2</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference">ContainerRegistryTokenPasswordPassword2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference">ContainerRegistryTokenPasswordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenIdInput">containerRegistryTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1Input">password1Input</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2Input">password2Input</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenId">containerRegistryTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `password1`<sup>Required</sup> <a name="password1" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1"></a>

```typescript
public readonly password1: ContainerRegistryTokenPasswordPassword1OutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference">ContainerRegistryTokenPasswordPassword1OutputReference</a>

---

##### `password2`<sup>Required</sup> <a name="password2" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2"></a>

```typescript
public readonly password2: ContainerRegistryTokenPasswordPassword2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference">ContainerRegistryTokenPasswordPassword2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerRegistryTokenPasswordTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference">ContainerRegistryTokenPasswordTimeoutsOutputReference</a>

---

##### `containerRegistryTokenIdInput`<sup>Optional</sup> <a name="containerRegistryTokenIdInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenIdInput"></a>

```typescript
public readonly containerRegistryTokenIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `password1Input`<sup>Optional</sup> <a name="password1Input" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1Input"></a>

```typescript
public readonly password1Input: ContainerRegistryTokenPasswordPassword1;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

---

##### `password2Input`<sup>Optional</sup> <a name="password2Input" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2Input"></a>

```typescript
public readonly password2Input: ContainerRegistryTokenPasswordPassword2;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerRegistryTokenPasswordTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>

---

##### `containerRegistryTokenId`<sup>Required</sup> <a name="containerRegistryTokenId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenId"></a>

```typescript
public readonly containerRegistryTokenId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTokenPasswordConfig <a name="ContainerRegistryTokenPasswordConfig" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.Initializer"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

const containerRegistryTokenPasswordConfig: containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.containerRegistryTokenId">containerRegistryTokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password1">password1</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | password1 block. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password2">password2</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | password2 block. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerRegistryTokenId`<sup>Required</sup> <a name="containerRegistryTokenId" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.containerRegistryTokenId"></a>

```typescript
public readonly containerRegistryTokenId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}.

---

##### `password1`<sup>Required</sup> <a name="password1" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password1"></a>

```typescript
public readonly password1: ContainerRegistryTokenPasswordPassword1;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

password1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#password1 ContainerRegistryTokenPassword#password1}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password2`<sup>Optional</sup> <a name="password2" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password2"></a>

```typescript
public readonly password2: ContainerRegistryTokenPasswordPassword2;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

password2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#password2 ContainerRegistryTokenPassword#password2}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerRegistryTokenPasswordTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#timeouts ContainerRegistryTokenPassword#timeouts}

---

### ContainerRegistryTokenPasswordPassword1 <a name="ContainerRegistryTokenPasswordPassword1" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.Initializer"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

const containerRegistryTokenPasswordPassword1: containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.property.expiry">expiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}. |

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}.

---

### ContainerRegistryTokenPasswordPassword2 <a name="ContainerRegistryTokenPasswordPassword2" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.Initializer"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

const containerRegistryTokenPasswordPassword2: containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.property.expiry">expiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}. |

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}.

---

### ContainerRegistryTokenPasswordTimeouts <a name="ContainerRegistryTokenPasswordTimeouts" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.Initializer"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

const containerRegistryTokenPasswordTimeouts: containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#create ContainerRegistryTokenPassword#create}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#delete ContainerRegistryTokenPassword#delete}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#read ContainerRegistryTokenPassword#read}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#update ContainerRegistryTokenPassword#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#create ContainerRegistryTokenPassword#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#delete ContainerRegistryTokenPassword#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#read ContainerRegistryTokenPassword#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_registry_token_password#update ContainerRegistryTokenPassword#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTokenPasswordPassword1OutputReference <a name="ContainerRegistryTokenPasswordPassword1OutputReference" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

new containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resetExpiry">resetExpiry</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiry` <a name="resetExpiry" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resetExpiry"></a>

```typescript
public resetExpiry(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiryInput">expiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `expiryInput`<sup>Optional</sup> <a name="expiryInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiryInput"></a>

```typescript
public readonly expiryInput: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerRegistryTokenPasswordPassword1;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

---


### ContainerRegistryTokenPasswordPassword2OutputReference <a name="ContainerRegistryTokenPasswordPassword2OutputReference" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

new containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resetExpiry">resetExpiry</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiry` <a name="resetExpiry" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resetExpiry"></a>

```typescript
public resetExpiry(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiryInput">expiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `expiryInput`<sup>Optional</sup> <a name="expiryInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiryInput"></a>

```typescript
public readonly expiryInput: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerRegistryTokenPasswordPassword2;
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

---


### ContainerRegistryTokenPasswordTimeoutsOutputReference <a name="ContainerRegistryTokenPasswordTimeoutsOutputReference" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerRegistryTokenPassword } from '@cdktn/provider-azurerm'

new containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerRegistryTokenPasswordTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>

---



