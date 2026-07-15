# `automationRuntimeEnvironmentPackage` Submodule <a name="`automationRuntimeEnvironmentPackage` Submodule" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuntimeEnvironmentPackage <a name="AutomationRuntimeEnvironmentPackage" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package azurerm_automation_runtime_environment_package}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer"></a>

```typescript
import { automationRuntimeEnvironmentPackage } from '@cdktn/provider-azurerm'

new automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage(scope: Construct, id: string, config: AutomationRuntimeEnvironmentPackageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig">AutomationRuntimeEnvironmentPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig">AutomationRuntimeEnvironmentPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetContentVersion">resetContentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashAlgorithm">resetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashValue">resetHashValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts"></a>

```typescript
public putTimeouts(value: AutomationRuntimeEnvironmentPackageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---

##### `resetContentVersion` <a name="resetContentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetContentVersion"></a>

```typescript
public resetContentVersion(): void
```

##### `resetHashAlgorithm` <a name="resetHashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashAlgorithm"></a>

```typescript
public resetHashAlgorithm(): void
```

##### `resetHashValue` <a name="resetHashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashValue"></a>

```typescript
public resetHashValue(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct"></a>

```typescript
import { automationRuntimeEnvironmentPackage } from '@cdktn/provider-azurerm'

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement"></a>

```typescript
import { automationRuntimeEnvironmentPackage } from '@cdktn/provider-azurerm'

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource"></a>

```typescript
import { automationRuntimeEnvironmentPackage } from '@cdktn/provider-azurerm'

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport"></a>

```typescript
import { automationRuntimeEnvironmentPackage } from '@cdktn/provider-azurerm'

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationRuntimeEnvironmentPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationRuntimeEnvironmentPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutomationRuntimeEnvironmentPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.sizeInBytes">sizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference">AutomationRuntimeEnvironmentPackageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentIdInput">automationRuntimeEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUriInput">contentUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersionInput">contentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithmInput">hashAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValueInput">hashValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentId">automationRuntimeEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUri">contentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersion">contentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValue">hashValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationRuntimeEnvironmentPackageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference">AutomationRuntimeEnvironmentPackageTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `automationRuntimeEnvironmentIdInput`<sup>Optional</sup> <a name="automationRuntimeEnvironmentIdInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentIdInput"></a>

```typescript
public readonly automationRuntimeEnvironmentIdInput: string;
```

- *Type:* string

---

##### `contentUriInput`<sup>Optional</sup> <a name="contentUriInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUriInput"></a>

```typescript
public readonly contentUriInput: string;
```

- *Type:* string

---

##### `contentVersionInput`<sup>Optional</sup> <a name="contentVersionInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersionInput"></a>

```typescript
public readonly contentVersionInput: string;
```

- *Type:* string

---

##### `hashAlgorithmInput`<sup>Optional</sup> <a name="hashAlgorithmInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithmInput"></a>

```typescript
public readonly hashAlgorithmInput: string;
```

- *Type:* string

---

##### `hashValueInput`<sup>Optional</sup> <a name="hashValueInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValueInput"></a>

```typescript
public readonly hashValueInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutomationRuntimeEnvironmentPackageTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---

##### `automationRuntimeEnvironmentId`<sup>Required</sup> <a name="automationRuntimeEnvironmentId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentId"></a>

```typescript
public readonly automationRuntimeEnvironmentId: string;
```

- *Type:* string

---

##### `contentUri`<sup>Required</sup> <a name="contentUri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUri"></a>

```typescript
public readonly contentUri: string;
```

- *Type:* string

---

##### `contentVersion`<sup>Required</sup> <a name="contentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersion"></a>

```typescript
public readonly contentVersion: string;
```

- *Type:* string

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

---

##### `hashValue`<sup>Required</sup> <a name="hashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValue"></a>

```typescript
public readonly hashValue: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuntimeEnvironmentPackageConfig <a name="AutomationRuntimeEnvironmentPackageConfig" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.Initializer"></a>

```typescript
import { automationRuntimeEnvironmentPackage } from '@cdktn/provider-azurerm'

const automationRuntimeEnvironmentPackageConfig: automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.automationRuntimeEnvironmentId">automationRuntimeEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentUri">contentUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentVersion">contentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashValue">hashValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `automationRuntimeEnvironmentId`<sup>Required</sup> <a name="automationRuntimeEnvironmentId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.automationRuntimeEnvironmentId"></a>

```typescript
public readonly automationRuntimeEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}.

---

##### `contentUri`<sup>Required</sup> <a name="contentUri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentUri"></a>

```typescript
public readonly contentUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}.

---

##### `contentVersion`<sup>Optional</sup> <a name="contentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentVersion"></a>

```typescript
public readonly contentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}.

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}.

---

##### `hashValue`<sup>Optional</sup> <a name="hashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashValue"></a>

```typescript
public readonly hashValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationRuntimeEnvironmentPackageTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#timeouts AutomationRuntimeEnvironmentPackage#timeouts}

---

### AutomationRuntimeEnvironmentPackageTimeouts <a name="AutomationRuntimeEnvironmentPackageTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.Initializer"></a>

```typescript
import { automationRuntimeEnvironmentPackage } from '@cdktn/provider-azurerm'

const automationRuntimeEnvironmentPackageTimeouts: automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRuntimeEnvironmentPackageTimeoutsOutputReference <a name="AutomationRuntimeEnvironmentPackageTimeoutsOutputReference" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer"></a>

```typescript
import { automationRuntimeEnvironmentPackage } from '@cdktn/provider-azurerm'

new automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationRuntimeEnvironmentPackageTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---



