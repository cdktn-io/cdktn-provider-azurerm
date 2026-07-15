# `automationJobSchedule` Submodule <a name="`automationJobSchedule` Submodule" id="@cdktn/provider-azurerm.automationJobSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationJobSchedule <a name="AutomationJobSchedule" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule azurerm_automation_job_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer"></a>

```typescript
import { automationJobSchedule } from '@cdktn/provider-azurerm'

new automationJobSchedule.AutomationJobSchedule(scope: Construct, id: string, config: AutomationJobScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig">AutomationJobScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig">AutomationJobScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetJobScheduleId">resetJobScheduleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetRunOn">resetRunOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: AutomationJobScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJobScheduleId` <a name="resetJobScheduleId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetJobScheduleId"></a>

```typescript
public resetJobScheduleId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetRunOn` <a name="resetRunOn" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetRunOn"></a>

```typescript
public resetRunOn(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutomationJobSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isConstruct"></a>

```typescript
import { automationJobSchedule } from '@cdktn/provider-azurerm'

automationJobSchedule.AutomationJobSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformElement"></a>

```typescript
import { automationJobSchedule } from '@cdktn/provider-azurerm'

automationJobSchedule.AutomationJobSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformResource"></a>

```typescript
import { automationJobSchedule } from '@cdktn/provider-azurerm'

automationJobSchedule.AutomationJobSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport"></a>

```typescript
import { automationJobSchedule } from '@cdktn/provider-azurerm'

automationJobSchedule.AutomationJobSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AutomationJobSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationJobSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationJobSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutomationJobSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceManagerId">resourceManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference">AutomationJobScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.automationAccountNameInput">automationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.jobScheduleIdInput">jobScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runbookNameInput">runbookNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runOnInput">runOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.scheduleNameInput">scheduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.automationAccountName">automationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.jobScheduleId">jobScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runbookName">runbookName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runOn">runOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.scheduleName">scheduleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceManagerId`<sup>Required</sup> <a name="resourceManagerId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceManagerId"></a>

```typescript
public readonly resourceManagerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationJobScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference">AutomationJobScheduleTimeoutsOutputReference</a>

---

##### `automationAccountNameInput`<sup>Optional</sup> <a name="automationAccountNameInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.automationAccountNameInput"></a>

```typescript
public readonly automationAccountNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobScheduleIdInput`<sup>Optional</sup> <a name="jobScheduleIdInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.jobScheduleIdInput"></a>

```typescript
public readonly jobScheduleIdInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `runbookNameInput`<sup>Optional</sup> <a name="runbookNameInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runbookNameInput"></a>

```typescript
public readonly runbookNameInput: string;
```

- *Type:* string

---

##### `runOnInput`<sup>Optional</sup> <a name="runOnInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runOnInput"></a>

```typescript
public readonly runOnInput: string;
```

- *Type:* string

---

##### `scheduleNameInput`<sup>Optional</sup> <a name="scheduleNameInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.scheduleNameInput"></a>

```typescript
public readonly scheduleNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutomationJobScheduleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.automationAccountName"></a>

```typescript
public readonly automationAccountName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobScheduleId`<sup>Required</sup> <a name="jobScheduleId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.jobScheduleId"></a>

```typescript
public readonly jobScheduleId: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `runbookName`<sup>Required</sup> <a name="runbookName" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runbookName"></a>

```typescript
public readonly runbookName: string;
```

- *Type:* string

---

##### `runOn`<sup>Required</sup> <a name="runOn" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.runOn"></a>

```typescript
public readonly runOn: string;
```

- *Type:* string

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationJobScheduleConfig <a name="AutomationJobScheduleConfig" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.Initializer"></a>

```typescript
import { automationJobSchedule } from '@cdktn/provider-azurerm'

const automationJobScheduleConfig: automationJobSchedule.AutomationJobScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.automationAccountName">automationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#automation_account_name AutomationJobSchedule#automation_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#resource_group_name AutomationJobSchedule#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.runbookName">runbookName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#runbook_name AutomationJobSchedule#runbook_name}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.scheduleName">scheduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#schedule_name AutomationJobSchedule#schedule_name}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#id AutomationJobSchedule#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.jobScheduleId">jobScheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#job_schedule_id AutomationJobSchedule#job_schedule_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#parameters AutomationJobSchedule#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.runOn">runOn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#run_on AutomationJobSchedule#run_on}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.automationAccountName"></a>

```typescript
public readonly automationAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#automation_account_name AutomationJobSchedule#automation_account_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#resource_group_name AutomationJobSchedule#resource_group_name}.

---

##### `runbookName`<sup>Required</sup> <a name="runbookName" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.runbookName"></a>

```typescript
public readonly runbookName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#runbook_name AutomationJobSchedule#runbook_name}.

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#schedule_name AutomationJobSchedule#schedule_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#id AutomationJobSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobScheduleId`<sup>Optional</sup> <a name="jobScheduleId" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.jobScheduleId"></a>

```typescript
public readonly jobScheduleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#job_schedule_id AutomationJobSchedule#job_schedule_id}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#parameters AutomationJobSchedule#parameters}.

---

##### `runOn`<sup>Optional</sup> <a name="runOn" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.runOn"></a>

```typescript
public readonly runOn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#run_on AutomationJobSchedule#run_on}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationJobScheduleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#timeouts AutomationJobSchedule#timeouts}

---

### AutomationJobScheduleTimeouts <a name="AutomationJobScheduleTimeouts" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.Initializer"></a>

```typescript
import { automationJobSchedule } from '@cdktn/provider-azurerm'

const automationJobScheduleTimeouts: automationJobSchedule.AutomationJobScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#create AutomationJobSchedule#create}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#delete AutomationJobSchedule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#read AutomationJobSchedule#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#create AutomationJobSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#delete AutomationJobSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/automation_job_schedule#read AutomationJobSchedule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationJobScheduleTimeoutsOutputReference <a name="AutomationJobScheduleTimeoutsOutputReference" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { automationJobSchedule } from '@cdktn/provider-azurerm'

new automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationJobScheduleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.automationJobSchedule.AutomationJobScheduleTimeouts">AutomationJobScheduleTimeouts</a>

---



