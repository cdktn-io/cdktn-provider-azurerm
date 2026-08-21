# `cdnFrontdoorRule` Submodule <a name="`cdnFrontdoorRule` Submodule" id="@cdktn/provider-azurerm.cdnFrontdoorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRule <a name="CdnFrontdoorRule" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule azurerm_cdn_frontdoor_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRule(scope: Construct, id: string, config: CdnFrontdoorRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig">CdnFrontdoorRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig">CdnFrontdoorRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetBehaviourOnMatch">resetBehaviourOnMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions"></a>

```typescript
public putActions(value: CdnFrontdoorRuleActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions"></a>

```typescript
public putConditions(value: CdnFrontdoorRuleConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnFrontdoorRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

---

##### `resetBehaviourOnMatch` <a name="resetBehaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetBehaviourOnMatch"></a>

```typescript
public resetBehaviourOnMatch(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CdnFrontdoorRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

cdnFrontdoorRule.CdnFrontdoorRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CdnFrontdoorRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnFrontdoorRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnFrontdoorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference">CdnFrontdoorRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetName">cdnFrontdoorRuleSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference">CdnFrontdoorRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference">CdnFrontdoorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviourOnMatchInput">behaviourOnMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetIdInput">cdnFrontdoorRuleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditionsInput">conditionsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviourOnMatch">behaviourOnMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetId">cdnFrontdoorRuleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.order">order</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actions"></a>

```typescript
public readonly actions: CdnFrontdoorRuleActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference">CdnFrontdoorRuleActionsOutputReference</a>

---

##### `cdnFrontdoorRuleSetName`<sup>Required</sup> <a name="cdnFrontdoorRuleSetName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetName"></a>

```typescript
public readonly cdnFrontdoorRuleSetName: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditions"></a>

```typescript
public readonly conditions: CdnFrontdoorRuleConditionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference">CdnFrontdoorRuleConditionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference">CdnFrontdoorRuleTimeoutsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: CdnFrontdoorRuleActions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---

##### `behaviourOnMatchInput`<sup>Optional</sup> <a name="behaviourOnMatchInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviourOnMatchInput"></a>

```typescript
public readonly behaviourOnMatchInput: string;
```

- *Type:* string

---

##### `cdnFrontdoorRuleSetIdInput`<sup>Optional</sup> <a name="cdnFrontdoorRuleSetIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetIdInput"></a>

```typescript
public readonly cdnFrontdoorRuleSetIdInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: CdnFrontdoorRuleConditions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CdnFrontdoorRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

---

##### `behaviourOnMatch`<sup>Required</sup> <a name="behaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviourOnMatch"></a>

```typescript
public readonly behaviourOnMatch: string;
```

- *Type:* string

---

##### `cdnFrontdoorRuleSetId`<sup>Required</sup> <a name="cdnFrontdoorRuleSetId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetId"></a>

```typescript
public readonly cdnFrontdoorRuleSetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRuleActions <a name="CdnFrontdoorRuleActions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleActions: cdnFrontdoorRule.CdnFrontdoorRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.modifyRequestHeader">modifyRequestHeader</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a>[]</code> | modify_request_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.modifyResponseHeader">modifyResponseHeader</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a>[]</code> | modify_response_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.routeConfigurationOverride">routeConfigurationOverride</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a></code> | route_configuration_override block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRedirect">urlRedirect</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a></code> | url_redirect block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a></code> | url_rewrite block. |

---

##### `modifyRequestHeader`<sup>Optional</sup> <a name="modifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.modifyRequestHeader"></a>

```typescript
public readonly modifyRequestHeader: IResolvable | CdnFrontdoorRuleActionsModifyRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a>[]

modify_request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#modify_request_header CdnFrontdoorRule#modify_request_header}

---

##### `modifyResponseHeader`<sup>Optional</sup> <a name="modifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.modifyResponseHeader"></a>

```typescript
public readonly modifyResponseHeader: IResolvable | CdnFrontdoorRuleActionsModifyResponseHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a>[]

modify_response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#modify_response_header CdnFrontdoorRule#modify_response_header}

---

##### `routeConfigurationOverride`<sup>Optional</sup> <a name="routeConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.routeConfigurationOverride"></a>

```typescript
public readonly routeConfigurationOverride: CdnFrontdoorRuleActionsRouteConfigurationOverride;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a>

route_configuration_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#route_configuration_override CdnFrontdoorRule#route_configuration_override}

---

##### `urlRedirect`<sup>Optional</sup> <a name="urlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRedirect"></a>

```typescript
public readonly urlRedirect: CdnFrontdoorRuleActionsUrlRedirect;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a>

url_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#url_redirect CdnFrontdoorRule#url_redirect}

---

##### `urlRewrite`<sup>Optional</sup> <a name="urlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRewrite"></a>

```typescript
public readonly urlRewrite: CdnFrontdoorRuleActionsUrlRewrite;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#url_rewrite CdnFrontdoorRule#url_rewrite}

---

### CdnFrontdoorRuleActionsModifyRequestHeader <a name="CdnFrontdoorRuleActionsModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleActionsModifyRequestHeader: cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.headerValue">headerValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}.

---

### CdnFrontdoorRuleActionsModifyResponseHeader <a name="CdnFrontdoorRuleActionsModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleActionsModifyResponseHeader: cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.headerValue">headerValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}.

---

### CdnFrontdoorRuleActionsRouteConfigurationOverride <a name="CdnFrontdoorRuleActionsRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleActionsRouteConfigurationOverride: cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.property.caching">caching</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a></code> | caching block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.property.originGroup">originGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | origin_group block. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.property.caching"></a>

```typescript
public readonly caching: CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a>

caching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#caching CdnFrontdoorRule#caching}

---

##### `originGroup`<sup>Optional</sup> <a name="originGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.property.originGroup"></a>

```typescript
public readonly originGroup: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a>

origin_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#origin_group CdnFrontdoorRule#origin_group}

---

### CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleActionsRouteConfigurationOverrideCaching: cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.behaviour">behaviour</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#behaviour CdnFrontdoorRule#behaviour}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.compressionEnabled">compressionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#compression_enabled CdnFrontdoorRule#compression_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#duration CdnFrontdoorRule#duration}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.queryStringBehaviour">queryStringBehaviour</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string_behaviour CdnFrontdoorRule#query_string_behaviour}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.queryStringParameters">queryStringParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string_parameters CdnFrontdoorRule#query_string_parameters}. |

---

##### `behaviour`<sup>Required</sup> <a name="behaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.behaviour"></a>

```typescript
public readonly behaviour: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#behaviour CdnFrontdoorRule#behaviour}.

---

##### `compressionEnabled`<sup>Optional</sup> <a name="compressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.compressionEnabled"></a>

```typescript
public readonly compressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#compression_enabled CdnFrontdoorRule#compression_enabled}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#duration CdnFrontdoorRule#duration}.

---

##### `queryStringBehaviour`<sup>Optional</sup> <a name="queryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.queryStringBehaviour"></a>

```typescript
public readonly queryStringBehaviour: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string_behaviour CdnFrontdoorRule#query_string_behaviour}.

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string_parameters CdnFrontdoorRule#query_string_parameters}.

---

### CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup: cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.property.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_origin_group_id CdnFrontdoorRule#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.property.forwardingProtocol">forwardingProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#forwarding_protocol CdnFrontdoorRule#forwarding_protocol}. |

---

##### `cdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.property.cdnFrontdoorOriginGroupId"></a>

```typescript
public readonly cdnFrontdoorOriginGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_origin_group_id CdnFrontdoorRule#cdn_frontdoor_origin_group_id}.

---

##### `forwardingProtocol`<sup>Required</sup> <a name="forwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.property.forwardingProtocol"></a>

```typescript
public readonly forwardingProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#forwarding_protocol CdnFrontdoorRule#forwarding_protocol}.

---

### CdnFrontdoorRuleActionsUrlRedirect <a name="CdnFrontdoorRuleActionsUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleActionsUrlRedirect: cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.redirectType">redirectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#redirect_type CdnFrontdoorRule#redirect_type}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationFragment">destinationFragment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_fragment CdnFrontdoorRule#destination_fragment}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationHostName">destinationHostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_host_name CdnFrontdoorRule#destination_host_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationPath">destinationPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.queryString">queryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.redirectProtocol">redirectProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#redirect_protocol CdnFrontdoorRule#redirect_protocol}. |

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.redirectType"></a>

```typescript
public readonly redirectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#redirect_type CdnFrontdoorRule#redirect_type}.

---

##### `destinationFragment`<sup>Optional</sup> <a name="destinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationFragment"></a>

```typescript
public readonly destinationFragment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_fragment CdnFrontdoorRule#destination_fragment}.

---

##### `destinationHostName`<sup>Optional</sup> <a name="destinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationHostName"></a>

```typescript
public readonly destinationHostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_host_name CdnFrontdoorRule#destination_host_name}.

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}.

---

##### `redirectProtocol`<sup>Optional</sup> <a name="redirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.redirectProtocol"></a>

```typescript
public readonly redirectProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#redirect_protocol CdnFrontdoorRule#redirect_protocol}.

---

### CdnFrontdoorRuleActionsUrlRewrite <a name="CdnFrontdoorRuleActionsUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleActionsUrlRewrite: cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.destinationPath">destinationPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.sourcePattern">sourcePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#source_pattern CdnFrontdoorRule#source_pattern}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.preserveUnmatchedPathEnabled">preserveUnmatchedPathEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#preserve_unmatched_path_enabled CdnFrontdoorRule#preserve_unmatched_path_enabled}. |

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}.

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.sourcePattern"></a>

```typescript
public readonly sourcePattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#source_pattern CdnFrontdoorRule#source_pattern}.

---

##### `preserveUnmatchedPathEnabled`<sup>Optional</sup> <a name="preserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.preserveUnmatchedPathEnabled"></a>

```typescript
public readonly preserveUnmatchedPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#preserve_unmatched_path_enabled CdnFrontdoorRule#preserve_unmatched_path_enabled}.

---

### CdnFrontdoorRuleConditions <a name="CdnFrontdoorRuleConditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditions: cdnFrontdoorRule.CdnFrontdoorRuleConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.clientPort">clientPort</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a>[]</code> | client_port block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.deviceType">deviceType</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a>[]</code> | device_type block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.hostName">hostName</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a>[]</code> | host_name block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.httpVersion">httpVersion</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a>[]</code> | http_version block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.postArgument">postArgument</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a>[]</code> | post_argument block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.queryString">queryString</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a>[]</code> | query_string block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.remoteAddress">remoteAddress</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a>[]</code> | remote_address block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestBody">requestBody</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a>[]</code> | request_body block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestCookies">requestCookies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a>[]</code> | request_cookies block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestFileExtension">requestFileExtension</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a>[]</code> | request_file_extension block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestFilename">requestFilename</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a>[]</code> | request_filename block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestHeader">requestHeader</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a>[]</code> | request_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestMethod">requestMethod</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a>[]</code> | request_method block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestPath">requestPath</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a>[]</code> | request_path block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestScheme">requestScheme</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a>[]</code> | request_scheme block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestUrl">requestUrl</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a>[]</code> | request_url block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.serverPort">serverPort</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a>[]</code> | server_port block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.socketAddress">socketAddress</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a>[]</code> | socket_address block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.sslProtocol">sslProtocol</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a>[]</code> | ssl_protocol block. |

---

##### `clientPort`<sup>Optional</sup> <a name="clientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.clientPort"></a>

```typescript
public readonly clientPort: IResolvable | CdnFrontdoorRuleConditionsClientPort[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a>[]

client_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#client_port CdnFrontdoorRule#client_port}

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.deviceType"></a>

```typescript
public readonly deviceType: IResolvable | CdnFrontdoorRuleConditionsDeviceType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a>[]

device_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#device_type CdnFrontdoorRule#device_type}

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.hostName"></a>

```typescript
public readonly hostName: IResolvable | CdnFrontdoorRuleConditionsHostName[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a>[]

host_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#host_name CdnFrontdoorRule#host_name}

---

##### `httpVersion`<sup>Optional</sup> <a name="httpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.httpVersion"></a>

```typescript
public readonly httpVersion: IResolvable | CdnFrontdoorRuleConditionsHttpVersion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a>[]

http_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#http_version CdnFrontdoorRule#http_version}

---

##### `postArgument`<sup>Optional</sup> <a name="postArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.postArgument"></a>

```typescript
public readonly postArgument: IResolvable | CdnFrontdoorRuleConditionsPostArgument[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a>[]

post_argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#post_argument CdnFrontdoorRule#post_argument}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.queryString"></a>

```typescript
public readonly queryString: IResolvable | CdnFrontdoorRuleConditionsQueryString[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a>[]

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}

---

##### `remoteAddress`<sup>Optional</sup> <a name="remoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.remoteAddress"></a>

```typescript
public readonly remoteAddress: IResolvable | CdnFrontdoorRuleConditionsRemoteAddress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a>[]

remote_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#remote_address CdnFrontdoorRule#remote_address}

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestBody"></a>

```typescript
public readonly requestBody: IResolvable | CdnFrontdoorRuleConditionsRequestBody[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a>[]

request_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_body CdnFrontdoorRule#request_body}

---

##### `requestCookies`<sup>Optional</sup> <a name="requestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestCookies"></a>

```typescript
public readonly requestCookies: IResolvable | CdnFrontdoorRuleConditionsRequestCookies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a>[]

request_cookies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_cookies CdnFrontdoorRule#request_cookies}

---

##### `requestFileExtension`<sup>Optional</sup> <a name="requestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestFileExtension"></a>

```typescript
public readonly requestFileExtension: IResolvable | CdnFrontdoorRuleConditionsRequestFileExtension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a>[]

request_file_extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_file_extension CdnFrontdoorRule#request_file_extension}

---

##### `requestFilename`<sup>Optional</sup> <a name="requestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestFilename"></a>

```typescript
public readonly requestFilename: IResolvable | CdnFrontdoorRuleConditionsRequestFilename[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a>[]

request_filename block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_filename CdnFrontdoorRule#request_filename}

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestHeader"></a>

```typescript
public readonly requestHeader: IResolvable | CdnFrontdoorRuleConditionsRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a>[]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_header CdnFrontdoorRule#request_header}

---

##### `requestMethod`<sup>Optional</sup> <a name="requestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestMethod"></a>

```typescript
public readonly requestMethod: IResolvable | CdnFrontdoorRuleConditionsRequestMethod[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a>[]

request_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_method CdnFrontdoorRule#request_method}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestPath"></a>

```typescript
public readonly requestPath: IResolvable | CdnFrontdoorRuleConditionsRequestPath[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a>[]

request_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_path CdnFrontdoorRule#request_path}

---

##### `requestScheme`<sup>Optional</sup> <a name="requestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestScheme"></a>

```typescript
public readonly requestScheme: IResolvable | CdnFrontdoorRuleConditionsRequestScheme[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a>[]

request_scheme block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_scheme CdnFrontdoorRule#request_scheme}

---

##### `requestUrl`<sup>Optional</sup> <a name="requestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestUrl"></a>

```typescript
public readonly requestUrl: IResolvable | CdnFrontdoorRuleConditionsRequestUrl[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a>[]

request_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_url CdnFrontdoorRule#request_url}

---

##### `serverPort`<sup>Optional</sup> <a name="serverPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.serverPort"></a>

```typescript
public readonly serverPort: IResolvable | CdnFrontdoorRuleConditionsServerPort[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a>[]

server_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#server_port CdnFrontdoorRule#server_port}

---

##### `socketAddress`<sup>Optional</sup> <a name="socketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.socketAddress"></a>

```typescript
public readonly socketAddress: IResolvable | CdnFrontdoorRuleConditionsSocketAddress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a>[]

socket_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#socket_address CdnFrontdoorRule#socket_address}

---

##### `sslProtocol`<sup>Optional</sup> <a name="sslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.sslProtocol"></a>

```typescript
public readonly sslProtocol: IResolvable | CdnFrontdoorRuleConditionsSslProtocol[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a>[]

ssl_protocol block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#ssl_protocol CdnFrontdoorRule#ssl_protocol}

---

### CdnFrontdoorRuleConditionsClientPort <a name="CdnFrontdoorRuleConditionsClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsClientPort: cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsDeviceType <a name="CdnFrontdoorRuleConditionsDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsDeviceType: cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsHostName <a name="CdnFrontdoorRuleConditionsHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsHostName: cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsHttpVersion <a name="CdnFrontdoorRuleConditionsHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsHttpVersion: cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsPostArgument <a name="CdnFrontdoorRuleConditionsPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsPostArgument: cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsQueryString <a name="CdnFrontdoorRuleConditionsQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsQueryString: cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRemoteAddress <a name="CdnFrontdoorRuleConditionsRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRemoteAddress: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestBody <a name="CdnFrontdoorRuleConditionsRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestBody: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestCookies <a name="CdnFrontdoorRuleConditionsRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestCookies: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestFileExtension <a name="CdnFrontdoorRuleConditionsRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestFileExtension: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestFilename <a name="CdnFrontdoorRuleConditionsRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestFilename: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestHeader <a name="CdnFrontdoorRuleConditionsRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestHeader: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestMethod <a name="CdnFrontdoorRuleConditionsRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestMethod: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestPath <a name="CdnFrontdoorRuleConditionsRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestPath: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestScheme <a name="CdnFrontdoorRuleConditionsRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestScheme: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestUrl <a name="CdnFrontdoorRuleConditionsRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsRequestUrl: cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsServerPort <a name="CdnFrontdoorRuleConditionsServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsServerPort: cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsSocketAddress <a name="CdnFrontdoorRuleConditionsSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsSocketAddress: cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsSslProtocol <a name="CdnFrontdoorRuleConditionsSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConditionsSslProtocol: cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConfig <a name="CdnFrontdoorRuleConfig" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleConfig: cdnFrontdoorRule.CdnFrontdoorRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | actions block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.cdnFrontdoorRuleSetId">cdnFrontdoorRuleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.behaviourOnMatch">behaviourOnMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#behaviour_on_match CdnFrontdoorRule#behaviour_on_match}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.actions"></a>

```typescript
public readonly actions: CdnFrontdoorRuleActions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#actions CdnFrontdoorRule#actions}

---

##### `cdnFrontdoorRuleSetId`<sup>Required</sup> <a name="cdnFrontdoorRuleSetId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.cdnFrontdoorRuleSetId"></a>

```typescript
public readonly cdnFrontdoorRuleSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}.

---

##### `behaviourOnMatch`<sup>Optional</sup> <a name="behaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.behaviourOnMatch"></a>

```typescript
public readonly behaviourOnMatch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#behaviour_on_match CdnFrontdoorRule#behaviour_on_match}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: CdnFrontdoorRuleConditions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#conditions CdnFrontdoorRule#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#timeouts CdnFrontdoorRule#timeouts}

---

### CdnFrontdoorRuleTimeouts <a name="CdnFrontdoorRuleTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

const cdnFrontdoorRuleTimeouts: cdnFrontdoorRule.CdnFrontdoorRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#create CdnFrontdoorRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#delete CdnFrontdoorRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#read CdnFrontdoorRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#update CdnFrontdoorRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#create CdnFrontdoorRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#delete CdnFrontdoorRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#read CdnFrontdoorRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#update CdnFrontdoorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRuleActionsModifyRequestHeaderList <a name="CdnFrontdoorRuleActionsModifyRequestHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleActionsModifyRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a>[]

---


### CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference <a name="CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderValue` <a name="resetHeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resetHeaderValue"></a>

```typescript
public resetHeaderValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleActionsModifyRequestHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a>

---


### CdnFrontdoorRuleActionsModifyResponseHeaderList <a name="CdnFrontdoorRuleActionsModifyResponseHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleActionsModifyResponseHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a>[]

---


### CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference <a name="CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderValue` <a name="resetHeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resetHeaderValue"></a>

```typescript
public resetHeaderValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleActionsModifyResponseHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a>

---


### CdnFrontdoorRuleActionsOutputReference <a name="CdnFrontdoorRuleActionsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyRequestHeader">putModifyRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyResponseHeader">putModifyResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverride">putRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirect">putUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewrite">putUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetModifyRequestHeader">resetModifyRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetModifyResponseHeader">resetModifyResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetRouteConfigurationOverride">resetRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRedirect">resetUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRewrite">resetUrlRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModifyRequestHeader` <a name="putModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyRequestHeader"></a>

```typescript
public putModifyRequestHeader(value: IResolvable | CdnFrontdoorRuleActionsModifyRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyRequestHeader.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a>[]

---

##### `putModifyResponseHeader` <a name="putModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyResponseHeader"></a>

```typescript
public putModifyResponseHeader(value: IResolvable | CdnFrontdoorRuleActionsModifyResponseHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyResponseHeader.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a>[]

---

##### `putRouteConfigurationOverride` <a name="putRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverride"></a>

```typescript
public putRouteConfigurationOverride(value: CdnFrontdoorRuleActionsRouteConfigurationOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a>

---

##### `putUrlRedirect` <a name="putUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirect"></a>

```typescript
public putUrlRedirect(value: CdnFrontdoorRuleActionsUrlRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a>

---

##### `putUrlRewrite` <a name="putUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewrite"></a>

```typescript
public putUrlRewrite(value: CdnFrontdoorRuleActionsUrlRewrite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a>

---

##### `resetModifyRequestHeader` <a name="resetModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetModifyRequestHeader"></a>

```typescript
public resetModifyRequestHeader(): void
```

##### `resetModifyResponseHeader` <a name="resetModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetModifyResponseHeader"></a>

```typescript
public resetModifyResponseHeader(): void
```

##### `resetRouteConfigurationOverride` <a name="resetRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetRouteConfigurationOverride"></a>

```typescript
public resetRouteConfigurationOverride(): void
```

##### `resetUrlRedirect` <a name="resetUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRedirect"></a>

```typescript
public resetUrlRedirect(): void
```

##### `resetUrlRewrite` <a name="resetUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRewrite"></a>

```typescript
public resetUrlRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyRequestHeader">modifyRequestHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList">CdnFrontdoorRuleActionsModifyRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyResponseHeader">modifyResponseHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList">CdnFrontdoorRuleActionsModifyResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverride">routeConfigurationOverride</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirect">urlRedirect</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference">CdnFrontdoorRuleActionsUrlRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference">CdnFrontdoorRuleActionsUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyRequestHeaderInput">modifyRequestHeaderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyResponseHeaderInput">modifyResponseHeaderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverrideInput">routeConfigurationOverrideInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirectInput">urlRedirectInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewriteInput">urlRewriteInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modifyRequestHeader`<sup>Required</sup> <a name="modifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyRequestHeader"></a>

```typescript
public readonly modifyRequestHeader: CdnFrontdoorRuleActionsModifyRequestHeaderList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList">CdnFrontdoorRuleActionsModifyRequestHeaderList</a>

---

##### `modifyResponseHeader`<sup>Required</sup> <a name="modifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyResponseHeader"></a>

```typescript
public readonly modifyResponseHeader: CdnFrontdoorRuleActionsModifyResponseHeaderList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList">CdnFrontdoorRuleActionsModifyResponseHeaderList</a>

---

##### `routeConfigurationOverride`<sup>Required</sup> <a name="routeConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverride"></a>

```typescript
public readonly routeConfigurationOverride: CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference</a>

---

##### `urlRedirect`<sup>Required</sup> <a name="urlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirect"></a>

```typescript
public readonly urlRedirect: CdnFrontdoorRuleActionsUrlRedirectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference">CdnFrontdoorRuleActionsUrlRedirectOutputReference</a>

---

##### `urlRewrite`<sup>Required</sup> <a name="urlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewrite"></a>

```typescript
public readonly urlRewrite: CdnFrontdoorRuleActionsUrlRewriteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference">CdnFrontdoorRuleActionsUrlRewriteOutputReference</a>

---

##### `modifyRequestHeaderInput`<sup>Optional</sup> <a name="modifyRequestHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyRequestHeaderInput"></a>

```typescript
public readonly modifyRequestHeaderInput: IResolvable | CdnFrontdoorRuleActionsModifyRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader">CdnFrontdoorRuleActionsModifyRequestHeader</a>[]

---

##### `modifyResponseHeaderInput`<sup>Optional</sup> <a name="modifyResponseHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyResponseHeaderInput"></a>

```typescript
public readonly modifyResponseHeaderInput: IResolvable | CdnFrontdoorRuleActionsModifyResponseHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader">CdnFrontdoorRuleActionsModifyResponseHeader</a>[]

---

##### `routeConfigurationOverrideInput`<sup>Optional</sup> <a name="routeConfigurationOverrideInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverrideInput"></a>

```typescript
public readonly routeConfigurationOverrideInput: CdnFrontdoorRuleActionsRouteConfigurationOverride;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a>

---

##### `urlRedirectInput`<sup>Optional</sup> <a name="urlRedirectInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirectInput"></a>

```typescript
public readonly urlRedirectInput: CdnFrontdoorRuleActionsUrlRedirect;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a>

---

##### `urlRewriteInput`<sup>Optional</sup> <a name="urlRewriteInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewriteInput"></a>

```typescript
public readonly urlRewriteInput: CdnFrontdoorRuleActionsUrlRewrite;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorRuleActions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---


### CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetCompressionEnabled">resetCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringBehaviour">resetQueryStringBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringParameters">resetQueryStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompressionEnabled` <a name="resetCompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetCompressionEnabled"></a>

```typescript
public resetCompressionEnabled(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetQueryStringBehaviour` <a name="resetQueryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringBehaviour"></a>

```typescript
public resetQueryStringBehaviour(): void
```

##### `resetQueryStringParameters` <a name="resetQueryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringParameters"></a>

```typescript
public resetQueryStringParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviourInput">behaviourInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabledInput">compressionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviourInput">queryStringBehaviourInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParametersInput">queryStringParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviour">behaviour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabled">compressionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviour">queryStringBehaviour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviourInput`<sup>Optional</sup> <a name="behaviourInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviourInput"></a>

```typescript
public readonly behaviourInput: string;
```

- *Type:* string

---

##### `compressionEnabledInput`<sup>Optional</sup> <a name="compressionEnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabledInput"></a>

```typescript
public readonly compressionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `queryStringBehaviourInput`<sup>Optional</sup> <a name="queryStringBehaviourInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviourInput"></a>

```typescript
public readonly queryStringBehaviourInput: string;
```

- *Type:* string

---

##### `queryStringParametersInput`<sup>Optional</sup> <a name="queryStringParametersInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParametersInput"></a>

```typescript
public readonly queryStringParametersInput: string[];
```

- *Type:* string[]

---

##### `behaviour`<sup>Required</sup> <a name="behaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviour"></a>

```typescript
public readonly behaviour: string;
```

- *Type:* string

---

##### `compressionEnabled`<sup>Required</sup> <a name="compressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabled"></a>

```typescript
public readonly compressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `queryStringBehaviour`<sup>Required</sup> <a name="queryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviour"></a>

```typescript
public readonly queryStringBehaviour: string;
```

- *Type:* string

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a>

---


### CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupIdInput">cdnFrontdoorOriginGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocolInput">forwardingProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocol">forwardingProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="cdnFrontdoorOriginGroupIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupIdInput"></a>

```typescript
public readonly cdnFrontdoorOriginGroupIdInput: string;
```

- *Type:* string

---

##### `forwardingProtocolInput`<sup>Optional</sup> <a name="forwardingProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocolInput"></a>

```typescript
public readonly forwardingProtocolInput: string;
```

- *Type:* string

---

##### `cdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupId"></a>

```typescript
public readonly cdnFrontdoorOriginGroupId: string;
```

- *Type:* string

---

##### `forwardingProtocol`<sup>Required</sup> <a name="forwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocol"></a>

```typescript
public readonly forwardingProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a>

---


### CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putCaching">putCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup">putOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resetOriginGroup">resetOriginGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaching` <a name="putCaching" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putCaching"></a>

```typescript
public putCaching(value: CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putCaching.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a>

---

##### `putOriginGroup` <a name="putOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup"></a>

```typescript
public putOriginGroup(value: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a>

---

##### `resetOriginGroup` <a name="resetOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resetOriginGroup"></a>

```typescript
public resetOriginGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.caching">caching</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.originGroup">originGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.cachingInput">cachingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.originGroupInput">originGroupInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.caching"></a>

```typescript
public readonly caching: CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference</a>

---

##### `originGroup`<sup>Required</sup> <a name="originGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.originGroup"></a>

```typescript
public readonly originGroup: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference</a>

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.cachingInput"></a>

```typescript
public readonly cachingInput: CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a>

---

##### `originGroupInput`<sup>Optional</sup> <a name="originGroupInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.originGroupInput"></a>

```typescript
public readonly originGroupInput: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorRuleActionsRouteConfigurationOverride;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a>

---


### CdnFrontdoorRuleActionsUrlRedirectOutputReference <a name="CdnFrontdoorRuleActionsUrlRedirectOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationFragment">resetDestinationFragment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationHostName">resetDestinationHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetRedirectProtocol">resetRedirectProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationFragment` <a name="resetDestinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationFragment"></a>

```typescript
public resetDestinationFragment(): void
```

##### `resetDestinationHostName` <a name="resetDestinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationHostName"></a>

```typescript
public resetDestinationHostName(): void
```

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationPath"></a>

```typescript
public resetDestinationPath(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetRedirectProtocol` <a name="resetRedirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetRedirectProtocol"></a>

```typescript
public resetRedirectProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationFragmentInput">destinationFragmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationHostNameInput">destinationHostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectProtocolInput">redirectProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectTypeInput">redirectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationFragment">destinationFragment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationHostName">destinationHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectProtocol">redirectProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectType">redirectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationFragmentInput`<sup>Optional</sup> <a name="destinationFragmentInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationFragmentInput"></a>

```typescript
public readonly destinationFragmentInput: string;
```

- *Type:* string

---

##### `destinationHostNameInput`<sup>Optional</sup> <a name="destinationHostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationHostNameInput"></a>

```typescript
public readonly destinationHostNameInput: string;
```

- *Type:* string

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationPathInput"></a>

```typescript
public readonly destinationPathInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `redirectProtocolInput`<sup>Optional</sup> <a name="redirectProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectProtocolInput"></a>

```typescript
public readonly redirectProtocolInput: string;
```

- *Type:* string

---

##### `redirectTypeInput`<sup>Optional</sup> <a name="redirectTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectTypeInput"></a>

```typescript
public readonly redirectTypeInput: string;
```

- *Type:* string

---

##### `destinationFragment`<sup>Required</sup> <a name="destinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationFragment"></a>

```typescript
public readonly destinationFragment: string;
```

- *Type:* string

---

##### `destinationHostName`<sup>Required</sup> <a name="destinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationHostName"></a>

```typescript
public readonly destinationHostName: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `redirectProtocol`<sup>Required</sup> <a name="redirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectProtocol"></a>

```typescript
public readonly redirectProtocol: string;
```

- *Type:* string

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectType"></a>

```typescript
public readonly redirectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorRuleActionsUrlRedirect;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a>

---


### CdnFrontdoorRuleActionsUrlRewriteOutputReference <a name="CdnFrontdoorRuleActionsUrlRewriteOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resetPreserveUnmatchedPathEnabled">resetPreserveUnmatchedPathEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveUnmatchedPathEnabled` <a name="resetPreserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resetPreserveUnmatchedPathEnabled"></a>

```typescript
public resetPreserveUnmatchedPathEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabledInput">preserveUnmatchedPathEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.sourcePatternInput">sourcePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabled">preserveUnmatchedPathEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.sourcePattern">sourcePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.destinationPathInput"></a>

```typescript
public readonly destinationPathInput: string;
```

- *Type:* string

---

##### `preserveUnmatchedPathEnabledInput`<sup>Optional</sup> <a name="preserveUnmatchedPathEnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabledInput"></a>

```typescript
public readonly preserveUnmatchedPathEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourcePatternInput`<sup>Optional</sup> <a name="sourcePatternInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.sourcePatternInput"></a>

```typescript
public readonly sourcePatternInput: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `preserveUnmatchedPathEnabled`<sup>Required</sup> <a name="preserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabled"></a>

```typescript
public readonly preserveUnmatchedPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.sourcePattern"></a>

```typescript
public readonly sourcePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorRuleActionsUrlRewrite;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a>

---


### CdnFrontdoorRuleConditionsClientPortList <a name="CdnFrontdoorRuleConditionsClientPortList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsClientPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsClientPort[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a>[]

---


### CdnFrontdoorRuleConditionsClientPortOutputReference <a name="CdnFrontdoorRuleConditionsClientPortOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsClientPort;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a>

---


### CdnFrontdoorRuleConditionsDeviceTypeList <a name="CdnFrontdoorRuleConditionsDeviceTypeList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsDeviceTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsDeviceType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a>[]

---


### CdnFrontdoorRuleConditionsDeviceTypeOutputReference <a name="CdnFrontdoorRuleConditionsDeviceTypeOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsDeviceType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a>

---


### CdnFrontdoorRuleConditionsHostNameList <a name="CdnFrontdoorRuleConditionsHostNameList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsHostNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsHostName[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a>[]

---


### CdnFrontdoorRuleConditionsHostNameOutputReference <a name="CdnFrontdoorRuleConditionsHostNameOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsHostName;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a>

---


### CdnFrontdoorRuleConditionsHttpVersionList <a name="CdnFrontdoorRuleConditionsHttpVersionList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsHttpVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsHttpVersion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a>[]

---


### CdnFrontdoorRuleConditionsHttpVersionOutputReference <a name="CdnFrontdoorRuleConditionsHttpVersionOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsHttpVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a>

---


### CdnFrontdoorRuleConditionsOutputReference <a name="CdnFrontdoorRuleConditionsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPort">putClientPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putDeviceType">putDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostName">putHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersion">putHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgument">putPostArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddress">putRemoteAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBody">putRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestCookies">putRequestCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFileExtension">putRequestFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFilename">putRequestFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethod">putRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestPath">putRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestScheme">putRequestScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUrl">putRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPort">putServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddress">putSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocol">putSslProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetClientPort">resetClientPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHttpVersion">resetHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetPostArgument">resetPostArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRemoteAddress">resetRemoteAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestBody">resetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestCookies">resetRequestCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestFileExtension">resetRequestFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestFilename">resetRequestFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestMethod">resetRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestScheme">resetRequestScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestUrl">resetRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetServerPort">resetServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSocketAddress">resetSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSslProtocol">resetSslProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientPort` <a name="putClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPort"></a>

```typescript
public putClientPort(value: IResolvable | CdnFrontdoorRuleConditionsClientPort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPort.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a>[]

---

##### `putDeviceType` <a name="putDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putDeviceType"></a>

```typescript
public putDeviceType(value: IResolvable | CdnFrontdoorRuleConditionsDeviceType[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putDeviceType.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a>[]

---

##### `putHostName` <a name="putHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostName"></a>

```typescript
public putHostName(value: IResolvable | CdnFrontdoorRuleConditionsHostName[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostName.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a>[]

---

##### `putHttpVersion` <a name="putHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersion"></a>

```typescript
public putHttpVersion(value: IResolvable | CdnFrontdoorRuleConditionsHttpVersion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersion.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a>[]

---

##### `putPostArgument` <a name="putPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgument"></a>

```typescript
public putPostArgument(value: IResolvable | CdnFrontdoorRuleConditionsPostArgument[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgument.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a>[]

---

##### `putQueryString` <a name="putQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryString"></a>

```typescript
public putQueryString(value: IResolvable | CdnFrontdoorRuleConditionsQueryString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryString.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a>[]

---

##### `putRemoteAddress` <a name="putRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddress"></a>

```typescript
public putRemoteAddress(value: IResolvable | CdnFrontdoorRuleConditionsRemoteAddress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddress.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a>[]

---

##### `putRequestBody` <a name="putRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBody"></a>

```typescript
public putRequestBody(value: IResolvable | CdnFrontdoorRuleConditionsRequestBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBody.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a>[]

---

##### `putRequestCookies` <a name="putRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestCookies"></a>

```typescript
public putRequestCookies(value: IResolvable | CdnFrontdoorRuleConditionsRequestCookies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestCookies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a>[]

---

##### `putRequestFileExtension` <a name="putRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFileExtension"></a>

```typescript
public putRequestFileExtension(value: IResolvable | CdnFrontdoorRuleConditionsRequestFileExtension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFileExtension.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a>[]

---

##### `putRequestFilename` <a name="putRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFilename"></a>

```typescript
public putRequestFilename(value: IResolvable | CdnFrontdoorRuleConditionsRequestFilename[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFilename.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a>[]

---

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeader"></a>

```typescript
public putRequestHeader(value: IResolvable | CdnFrontdoorRuleConditionsRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a>[]

---

##### `putRequestMethod` <a name="putRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethod"></a>

```typescript
public putRequestMethod(value: IResolvable | CdnFrontdoorRuleConditionsRequestMethod[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethod.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a>[]

---

##### `putRequestPath` <a name="putRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestPath"></a>

```typescript
public putRequestPath(value: IResolvable | CdnFrontdoorRuleConditionsRequestPath[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestPath.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a>[]

---

##### `putRequestScheme` <a name="putRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestScheme"></a>

```typescript
public putRequestScheme(value: IResolvable | CdnFrontdoorRuleConditionsRequestScheme[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestScheme.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a>[]

---

##### `putRequestUrl` <a name="putRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUrl"></a>

```typescript
public putRequestUrl(value: IResolvable | CdnFrontdoorRuleConditionsRequestUrl[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUrl.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a>[]

---

##### `putServerPort` <a name="putServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPort"></a>

```typescript
public putServerPort(value: IResolvable | CdnFrontdoorRuleConditionsServerPort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPort.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a>[]

---

##### `putSocketAddress` <a name="putSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddress"></a>

```typescript
public putSocketAddress(value: IResolvable | CdnFrontdoorRuleConditionsSocketAddress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a>[]

---

##### `putSslProtocol` <a name="putSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocol"></a>

```typescript
public putSslProtocol(value: IResolvable | CdnFrontdoorRuleConditionsSslProtocol[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocol.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a>[]

---

##### `resetClientPort` <a name="resetClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetClientPort"></a>

```typescript
public resetClientPort(): void
```

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetDeviceType"></a>

```typescript
public resetDeviceType(): void
```

##### `resetHostName` <a name="resetHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetHttpVersion` <a name="resetHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHttpVersion"></a>

```typescript
public resetHttpVersion(): void
```

##### `resetPostArgument` <a name="resetPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetPostArgument"></a>

```typescript
public resetPostArgument(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetRemoteAddress` <a name="resetRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRemoteAddress"></a>

```typescript
public resetRemoteAddress(): void
```

##### `resetRequestBody` <a name="resetRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestBody"></a>

```typescript
public resetRequestBody(): void
```

##### `resetRequestCookies` <a name="resetRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestCookies"></a>

```typescript
public resetRequestCookies(): void
```

##### `resetRequestFileExtension` <a name="resetRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestFileExtension"></a>

```typescript
public resetRequestFileExtension(): void
```

##### `resetRequestFilename` <a name="resetRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestFilename"></a>

```typescript
public resetRequestFilename(): void
```

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestHeader"></a>

```typescript
public resetRequestHeader(): void
```

##### `resetRequestMethod` <a name="resetRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestMethod"></a>

```typescript
public resetRequestMethod(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetRequestScheme` <a name="resetRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestScheme"></a>

```typescript
public resetRequestScheme(): void
```

##### `resetRequestUrl` <a name="resetRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestUrl"></a>

```typescript
public resetRequestUrl(): void
```

##### `resetServerPort` <a name="resetServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetServerPort"></a>

```typescript
public resetServerPort(): void
```

##### `resetSocketAddress` <a name="resetSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSocketAddress"></a>

```typescript
public resetSocketAddress(): void
```

##### `resetSslProtocol` <a name="resetSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSslProtocol"></a>

```typescript
public resetSslProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPort">clientPort</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList">CdnFrontdoorRuleConditionsClientPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.deviceType">deviceType</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList">CdnFrontdoorRuleConditionsDeviceTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostName">hostName</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList">CdnFrontdoorRuleConditionsHostNameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersion">httpVersion</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList">CdnFrontdoorRuleConditionsHttpVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgument">postArgument</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList">CdnFrontdoorRuleConditionsPostArgumentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList">CdnFrontdoorRuleConditionsQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddress">remoteAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList">CdnFrontdoorRuleConditionsRemoteAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBody">requestBody</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList">CdnFrontdoorRuleConditionsRequestBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestCookies">requestCookies</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList">CdnFrontdoorRuleConditionsRequestCookiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFileExtension">requestFileExtension</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList">CdnFrontdoorRuleConditionsRequestFileExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFilename">requestFilename</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList">CdnFrontdoorRuleConditionsRequestFilenameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList">CdnFrontdoorRuleConditionsRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethod">requestMethod</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList">CdnFrontdoorRuleConditionsRequestMethodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestPath">requestPath</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList">CdnFrontdoorRuleConditionsRequestPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestScheme">requestScheme</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList">CdnFrontdoorRuleConditionsRequestSchemeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUrl">requestUrl</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList">CdnFrontdoorRuleConditionsRequestUrlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPort">serverPort</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList">CdnFrontdoorRuleConditionsServerPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList">CdnFrontdoorRuleConditionsSocketAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocol">sslProtocol</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList">CdnFrontdoorRuleConditionsSslProtocolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPortInput">clientPortInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.deviceTypeInput">deviceTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersionInput">httpVersionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgumentInput">postArgumentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddressInput">remoteAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBodyInput">requestBodyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestCookiesInput">requestCookiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFileExtensionInput">requestFileExtensionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFilenameInput">requestFilenameInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethodInput">requestMethodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestSchemeInput">requestSchemeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUrlInput">requestUrlInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPortInput">serverPortInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddressInput">socketAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocolInput">sslProtocolInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientPort`<sup>Required</sup> <a name="clientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPort"></a>

```typescript
public readonly clientPort: CdnFrontdoorRuleConditionsClientPortList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList">CdnFrontdoorRuleConditionsClientPortList</a>

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: CdnFrontdoorRuleConditionsDeviceTypeList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList">CdnFrontdoorRuleConditionsDeviceTypeList</a>

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: CdnFrontdoorRuleConditionsHostNameList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList">CdnFrontdoorRuleConditionsHostNameList</a>

---

##### `httpVersion`<sup>Required</sup> <a name="httpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersion"></a>

```typescript
public readonly httpVersion: CdnFrontdoorRuleConditionsHttpVersionList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList">CdnFrontdoorRuleConditionsHttpVersionList</a>

---

##### `postArgument`<sup>Required</sup> <a name="postArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgument"></a>

```typescript
public readonly postArgument: CdnFrontdoorRuleConditionsPostArgumentList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList">CdnFrontdoorRuleConditionsPostArgumentList</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryString"></a>

```typescript
public readonly queryString: CdnFrontdoorRuleConditionsQueryStringList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList">CdnFrontdoorRuleConditionsQueryStringList</a>

---

##### `remoteAddress`<sup>Required</sup> <a name="remoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddress"></a>

```typescript
public readonly remoteAddress: CdnFrontdoorRuleConditionsRemoteAddressList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList">CdnFrontdoorRuleConditionsRemoteAddressList</a>

---

##### `requestBody`<sup>Required</sup> <a name="requestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBody"></a>

```typescript
public readonly requestBody: CdnFrontdoorRuleConditionsRequestBodyList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList">CdnFrontdoorRuleConditionsRequestBodyList</a>

---

##### `requestCookies`<sup>Required</sup> <a name="requestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestCookies"></a>

```typescript
public readonly requestCookies: CdnFrontdoorRuleConditionsRequestCookiesList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList">CdnFrontdoorRuleConditionsRequestCookiesList</a>

---

##### `requestFileExtension`<sup>Required</sup> <a name="requestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFileExtension"></a>

```typescript
public readonly requestFileExtension: CdnFrontdoorRuleConditionsRequestFileExtensionList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList">CdnFrontdoorRuleConditionsRequestFileExtensionList</a>

---

##### `requestFilename`<sup>Required</sup> <a name="requestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFilename"></a>

```typescript
public readonly requestFilename: CdnFrontdoorRuleConditionsRequestFilenameList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList">CdnFrontdoorRuleConditionsRequestFilenameList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: CdnFrontdoorRuleConditionsRequestHeaderList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList">CdnFrontdoorRuleConditionsRequestHeaderList</a>

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethod"></a>

```typescript
public readonly requestMethod: CdnFrontdoorRuleConditionsRequestMethodList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList">CdnFrontdoorRuleConditionsRequestMethodList</a>

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: CdnFrontdoorRuleConditionsRequestPathList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList">CdnFrontdoorRuleConditionsRequestPathList</a>

---

##### `requestScheme`<sup>Required</sup> <a name="requestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestScheme"></a>

```typescript
public readonly requestScheme: CdnFrontdoorRuleConditionsRequestSchemeList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList">CdnFrontdoorRuleConditionsRequestSchemeList</a>

---

##### `requestUrl`<sup>Required</sup> <a name="requestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUrl"></a>

```typescript
public readonly requestUrl: CdnFrontdoorRuleConditionsRequestUrlList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList">CdnFrontdoorRuleConditionsRequestUrlList</a>

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPort"></a>

```typescript
public readonly serverPort: CdnFrontdoorRuleConditionsServerPortList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList">CdnFrontdoorRuleConditionsServerPortList</a>

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: CdnFrontdoorRuleConditionsSocketAddressList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList">CdnFrontdoorRuleConditionsSocketAddressList</a>

---

##### `sslProtocol`<sup>Required</sup> <a name="sslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocol"></a>

```typescript
public readonly sslProtocol: CdnFrontdoorRuleConditionsSslProtocolList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList">CdnFrontdoorRuleConditionsSslProtocolList</a>

---

##### `clientPortInput`<sup>Optional</sup> <a name="clientPortInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPortInput"></a>

```typescript
public readonly clientPortInput: IResolvable | CdnFrontdoorRuleConditionsClientPort[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort">CdnFrontdoorRuleConditionsClientPort</a>[]

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: IResolvable | CdnFrontdoorRuleConditionsDeviceType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType">CdnFrontdoorRuleConditionsDeviceType</a>[]

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: IResolvable | CdnFrontdoorRuleConditionsHostName[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName">CdnFrontdoorRuleConditionsHostName</a>[]

---

##### `httpVersionInput`<sup>Optional</sup> <a name="httpVersionInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersionInput"></a>

```typescript
public readonly httpVersionInput: IResolvable | CdnFrontdoorRuleConditionsHttpVersion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion">CdnFrontdoorRuleConditionsHttpVersion</a>[]

---

##### `postArgumentInput`<sup>Optional</sup> <a name="postArgumentInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgumentInput"></a>

```typescript
public readonly postArgumentInput: IResolvable | CdnFrontdoorRuleConditionsPostArgument[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a>[]

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: IResolvable | CdnFrontdoorRuleConditionsQueryString[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a>[]

---

##### `remoteAddressInput`<sup>Optional</sup> <a name="remoteAddressInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddressInput"></a>

```typescript
public readonly remoteAddressInput: IResolvable | CdnFrontdoorRuleConditionsRemoteAddress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a>[]

---

##### `requestBodyInput`<sup>Optional</sup> <a name="requestBodyInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBodyInput"></a>

```typescript
public readonly requestBodyInput: IResolvable | CdnFrontdoorRuleConditionsRequestBody[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a>[]

---

##### `requestCookiesInput`<sup>Optional</sup> <a name="requestCookiesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestCookiesInput"></a>

```typescript
public readonly requestCookiesInput: IResolvable | CdnFrontdoorRuleConditionsRequestCookies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a>[]

---

##### `requestFileExtensionInput`<sup>Optional</sup> <a name="requestFileExtensionInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFileExtensionInput"></a>

```typescript
public readonly requestFileExtensionInput: IResolvable | CdnFrontdoorRuleConditionsRequestFileExtension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a>[]

---

##### `requestFilenameInput`<sup>Optional</sup> <a name="requestFilenameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFilenameInput"></a>

```typescript
public readonly requestFilenameInput: IResolvable | CdnFrontdoorRuleConditionsRequestFilename[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a>[]

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeaderInput"></a>

```typescript
public readonly requestHeaderInput: IResolvable | CdnFrontdoorRuleConditionsRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a>[]

---

##### `requestMethodInput`<sup>Optional</sup> <a name="requestMethodInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethodInput"></a>

```typescript
public readonly requestMethodInput: IResolvable | CdnFrontdoorRuleConditionsRequestMethod[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a>[]

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: IResolvable | CdnFrontdoorRuleConditionsRequestPath[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a>[]

---

##### `requestSchemeInput`<sup>Optional</sup> <a name="requestSchemeInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestSchemeInput"></a>

```typescript
public readonly requestSchemeInput: IResolvable | CdnFrontdoorRuleConditionsRequestScheme[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a>[]

---

##### `requestUrlInput`<sup>Optional</sup> <a name="requestUrlInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUrlInput"></a>

```typescript
public readonly requestUrlInput: IResolvable | CdnFrontdoorRuleConditionsRequestUrl[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a>[]

---

##### `serverPortInput`<sup>Optional</sup> <a name="serverPortInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPortInput"></a>

```typescript
public readonly serverPortInput: IResolvable | CdnFrontdoorRuleConditionsServerPort[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a>[]

---

##### `socketAddressInput`<sup>Optional</sup> <a name="socketAddressInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddressInput"></a>

```typescript
public readonly socketAddressInput: IResolvable | CdnFrontdoorRuleConditionsSocketAddress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a>[]

---

##### `sslProtocolInput`<sup>Optional</sup> <a name="sslProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocolInput"></a>

```typescript
public readonly sslProtocolInput: IResolvable | CdnFrontdoorRuleConditionsSslProtocol[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorRuleConditions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---


### CdnFrontdoorRuleConditionsPostArgumentList <a name="CdnFrontdoorRuleConditionsPostArgumentList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsPostArgumentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsPostArgument[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a>[]

---


### CdnFrontdoorRuleConditionsPostArgumentOutputReference <a name="CdnFrontdoorRuleConditionsPostArgumentOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsPostArgument;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument">CdnFrontdoorRuleConditionsPostArgument</a>

---


### CdnFrontdoorRuleConditionsQueryStringList <a name="CdnFrontdoorRuleConditionsQueryStringList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsQueryString[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a>[]

---


### CdnFrontdoorRuleConditionsQueryStringOutputReference <a name="CdnFrontdoorRuleConditionsQueryStringOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsQueryString;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString">CdnFrontdoorRuleConditionsQueryString</a>

---


### CdnFrontdoorRuleConditionsRemoteAddressList <a name="CdnFrontdoorRuleConditionsRemoteAddressList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRemoteAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRemoteAddress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a>[]

---


### CdnFrontdoorRuleConditionsRemoteAddressOutputReference <a name="CdnFrontdoorRuleConditionsRemoteAddressOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRemoteAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress">CdnFrontdoorRuleConditionsRemoteAddress</a>

---


### CdnFrontdoorRuleConditionsRequestBodyList <a name="CdnFrontdoorRuleConditionsRequestBodyList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestBody[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a>[]

---


### CdnFrontdoorRuleConditionsRequestBodyOutputReference <a name="CdnFrontdoorRuleConditionsRequestBodyOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestBody;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody">CdnFrontdoorRuleConditionsRequestBody</a>

---


### CdnFrontdoorRuleConditionsRequestCookiesList <a name="CdnFrontdoorRuleConditionsRequestCookiesList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestCookiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestCookies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a>[]

---


### CdnFrontdoorRuleConditionsRequestCookiesOutputReference <a name="CdnFrontdoorRuleConditionsRequestCookiesOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestCookies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies">CdnFrontdoorRuleConditionsRequestCookies</a>

---


### CdnFrontdoorRuleConditionsRequestFileExtensionList <a name="CdnFrontdoorRuleConditionsRequestFileExtensionList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestFileExtension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a>[]

---


### CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference <a name="CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestFileExtension;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension">CdnFrontdoorRuleConditionsRequestFileExtension</a>

---


### CdnFrontdoorRuleConditionsRequestFilenameList <a name="CdnFrontdoorRuleConditionsRequestFilenameList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestFilenameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestFilename[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a>[]

---


### CdnFrontdoorRuleConditionsRequestFilenameOutputReference <a name="CdnFrontdoorRuleConditionsRequestFilenameOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestFilename;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename">CdnFrontdoorRuleConditionsRequestFilename</a>

---


### CdnFrontdoorRuleConditionsRequestHeaderList <a name="CdnFrontdoorRuleConditionsRequestHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestHeader[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a>[]

---


### CdnFrontdoorRuleConditionsRequestHeaderOutputReference <a name="CdnFrontdoorRuleConditionsRequestHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader">CdnFrontdoorRuleConditionsRequestHeader</a>

---


### CdnFrontdoorRuleConditionsRequestMethodList <a name="CdnFrontdoorRuleConditionsRequestMethodList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestMethod[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a>[]

---


### CdnFrontdoorRuleConditionsRequestMethodOutputReference <a name="CdnFrontdoorRuleConditionsRequestMethodOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestMethod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod">CdnFrontdoorRuleConditionsRequestMethod</a>

---


### CdnFrontdoorRuleConditionsRequestPathList <a name="CdnFrontdoorRuleConditionsRequestPathList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestPath[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a>[]

---


### CdnFrontdoorRuleConditionsRequestPathOutputReference <a name="CdnFrontdoorRuleConditionsRequestPathOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestPath;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath">CdnFrontdoorRuleConditionsRequestPath</a>

---


### CdnFrontdoorRuleConditionsRequestSchemeList <a name="CdnFrontdoorRuleConditionsRequestSchemeList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestSchemeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestScheme[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a>[]

---


### CdnFrontdoorRuleConditionsRequestSchemeOutputReference <a name="CdnFrontdoorRuleConditionsRequestSchemeOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestScheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme">CdnFrontdoorRuleConditionsRequestScheme</a>

---


### CdnFrontdoorRuleConditionsRequestUrlList <a name="CdnFrontdoorRuleConditionsRequestUrlList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsRequestUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestUrl[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a>[]

---


### CdnFrontdoorRuleConditionsRequestUrlOutputReference <a name="CdnFrontdoorRuleConditionsRequestUrlOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsRequestUrl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl">CdnFrontdoorRuleConditionsRequestUrl</a>

---


### CdnFrontdoorRuleConditionsServerPortList <a name="CdnFrontdoorRuleConditionsServerPortList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsServerPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsServerPort[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a>[]

---


### CdnFrontdoorRuleConditionsServerPortOutputReference <a name="CdnFrontdoorRuleConditionsServerPortOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsServerPort;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort">CdnFrontdoorRuleConditionsServerPort</a>

---


### CdnFrontdoorRuleConditionsSocketAddressList <a name="CdnFrontdoorRuleConditionsSocketAddressList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsSocketAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsSocketAddress[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a>[]

---


### CdnFrontdoorRuleConditionsSocketAddressOutputReference <a name="CdnFrontdoorRuleConditionsSocketAddressOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress">CdnFrontdoorRuleConditionsSocketAddress</a>

---


### CdnFrontdoorRuleConditionsSslProtocolList <a name="CdnFrontdoorRuleConditionsSslProtocolList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.get"></a>

```typescript
public get(index: number): CdnFrontdoorRuleConditionsSslProtocolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsSslProtocol[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a>[]

---


### CdnFrontdoorRuleConditionsSslProtocolOutputReference <a name="CdnFrontdoorRuleConditionsSslProtocolOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleConditionsSslProtocol;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol">CdnFrontdoorRuleConditionsSslProtocol</a>

---


### CdnFrontdoorRuleTimeoutsOutputReference <a name="CdnFrontdoorRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorRule } from '@cdktn/provider-azurerm'

new cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnFrontdoorRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

---



