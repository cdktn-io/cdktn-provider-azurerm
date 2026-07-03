# `servicebusQueueAuthorizationRule` Submodule <a name="`servicebusQueueAuthorizationRule` Submodule" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusQueueAuthorizationRule <a name="ServicebusQueueAuthorizationRule" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule azurerm_servicebus_queue_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer"></a>

```typescript
import { servicebusQueueAuthorizationRule } from '@cdktn/provider-azurerm'

new servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule(scope: Construct, id: string, config: ServicebusQueueAuthorizationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig">ServicebusQueueAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig">ServicebusQueueAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetListen">resetListen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetManage">resetManage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetSend">resetSend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicebusQueueAuthorizationRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListen` <a name="resetListen" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetListen"></a>

```typescript
public resetListen(): void
```

##### `resetManage` <a name="resetManage" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetManage"></a>

```typescript
public resetManage(): void
```

##### `resetSend` <a name="resetSend" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetSend"></a>

```typescript
public resetSend(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicebusQueueAuthorizationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isConstruct"></a>

```typescript
import { servicebusQueueAuthorizationRule } from '@cdktn/provider-azurerm'

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformElement"></a>

```typescript
import { servicebusQueueAuthorizationRule } from '@cdktn/provider-azurerm'

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformResource"></a>

```typescript
import { servicebusQueueAuthorizationRule } from '@cdktn/provider-azurerm'

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport"></a>

```typescript
import { servicebusQueueAuthorizationRule } from '@cdktn/provider-azurerm'

servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicebusQueueAuthorizationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusQueueAuthorizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusQueueAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicebusQueueAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference">ServicebusQueueAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.listenInput">listenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.manageInput">manageInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.queueIdInput">queueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.sendInput">sendInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.listen">listen</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.manage">manage</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.send">send</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias"></a>

```typescript
public readonly primaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```typescript
public readonly secondaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusQueueAuthorizationRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference">ServicebusQueueAuthorizationRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenInput`<sup>Optional</sup> <a name="listenInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.listenInput"></a>

```typescript
public readonly listenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `manageInput`<sup>Optional</sup> <a name="manageInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.manageInput"></a>

```typescript
public readonly manageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.queueIdInput"></a>

```typescript
public readonly queueIdInput: string;
```

- *Type:* string

---

##### `sendInput`<sup>Optional</sup> <a name="sendInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.sendInput"></a>

```typescript
public readonly sendInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicebusQueueAuthorizationRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.listen"></a>

```typescript
public readonly listen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.manage"></a>

```typescript
public readonly manage: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.send"></a>

```typescript
public readonly send: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusQueueAuthorizationRuleConfig <a name="ServicebusQueueAuthorizationRuleConfig" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.Initializer"></a>

```typescript
import { servicebusQueueAuthorizationRule } from '@cdktn/provider-azurerm'

const servicebusQueueAuthorizationRuleConfig: servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#name ServicebusQueueAuthorizationRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.queueId">queueId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#queue_id ServicebusQueueAuthorizationRule#queue_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#id ServicebusQueueAuthorizationRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.listen">listen</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#listen ServicebusQueueAuthorizationRule#listen}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.manage">manage</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#manage ServicebusQueueAuthorizationRule#manage}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.send">send</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#send ServicebusQueueAuthorizationRule#send}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#name ServicebusQueueAuthorizationRule#name}.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#queue_id ServicebusQueueAuthorizationRule#queue_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#id ServicebusQueueAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.listen"></a>

```typescript
public readonly listen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#listen ServicebusQueueAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.manage"></a>

```typescript
public readonly manage: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#manage ServicebusQueueAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.send"></a>

```typescript
public readonly send: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#send ServicebusQueueAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusQueueAuthorizationRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#timeouts ServicebusQueueAuthorizationRule#timeouts}

---

### ServicebusQueueAuthorizationRuleTimeouts <a name="ServicebusQueueAuthorizationRuleTimeouts" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.Initializer"></a>

```typescript
import { servicebusQueueAuthorizationRule } from '@cdktn/provider-azurerm'

const servicebusQueueAuthorizationRuleTimeouts: servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#create ServicebusQueueAuthorizationRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#delete ServicebusQueueAuthorizationRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#read ServicebusQueueAuthorizationRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#update ServicebusQueueAuthorizationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#create ServicebusQueueAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#delete ServicebusQueueAuthorizationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#read ServicebusQueueAuthorizationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_queue_authorization_rule#update ServicebusQueueAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusQueueAuthorizationRuleTimeoutsOutputReference <a name="ServicebusQueueAuthorizationRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicebusQueueAuthorizationRule } from '@cdktn/provider-azurerm'

new servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicebusQueueAuthorizationRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.servicebusQueueAuthorizationRule.ServicebusQueueAuthorizationRuleTimeouts">ServicebusQueueAuthorizationRuleTimeouts</a>

---



