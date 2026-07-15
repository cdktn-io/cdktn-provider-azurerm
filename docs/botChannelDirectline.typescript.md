# `botChannelDirectline` Submodule <a name="`botChannelDirectline` Submodule" id="@cdktn/provider-azurerm.botChannelDirectline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelDirectline <a name="BotChannelDirectline" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline azurerm_bot_channel_directline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

new botChannelDirectline.BotChannelDirectline(scope: Construct, id: string, config: BotChannelDirectlineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig">BotChannelDirectlineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig">BotChannelDirectlineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite">putSite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSite` <a name="putSite" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite"></a>

```typescript
public putSite(value: IResolvable | BotChannelDirectlineSite[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts"></a>

```typescript
public putTimeouts(value: BotChannelDirectlineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BotChannelDirectline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

botChannelDirectline.BotChannelDirectline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

botChannelDirectline.BotChannelDirectline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

botChannelDirectline.BotChannelDirectline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

botChannelDirectline.BotChannelDirectline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BotChannelDirectline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BotChannelDirectline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BotChannelDirectline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BotChannelDirectline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.extensionKey1">extensionKey1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.extensionKey2">extensionKey2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.site">site</a></code> | <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList">BotChannelDirectlineSiteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference">BotChannelDirectlineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botNameInput">botNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.siteInput">siteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botName">botName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `extensionKey1`<sup>Required</sup> <a name="extensionKey1" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.extensionKey1"></a>

```typescript
public readonly extensionKey1: string;
```

- *Type:* string

---

##### `extensionKey2`<sup>Required</sup> <a name="extensionKey2" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.extensionKey2"></a>

```typescript
public readonly extensionKey2: string;
```

- *Type:* string

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.site"></a>

```typescript
public readonly site: BotChannelDirectlineSiteList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList">BotChannelDirectlineSiteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeouts"></a>

```typescript
public readonly timeouts: BotChannelDirectlineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference">BotChannelDirectlineTimeoutsOutputReference</a>

---

##### `botNameInput`<sup>Optional</sup> <a name="botNameInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botNameInput"></a>

```typescript
public readonly botNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `siteInput`<sup>Optional</sup> <a name="siteInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.siteInput"></a>

```typescript
public readonly siteInput: IResolvable | BotChannelDirectlineSite[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BotChannelDirectlineTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelDirectlineConfig <a name="BotChannelDirectlineConfig" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.Initializer"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

const botChannelDirectlineConfig: botChannelDirectline.BotChannelDirectlineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.botName">botName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#bot_name BotChannelDirectline#bot_name}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#location BotChannelDirectline#location}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.site">site</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>[]</code> | site block. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#id BotChannelDirectline#id}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#bot_name BotChannelDirectline#bot_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#location BotChannelDirectline#location}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}.

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.site"></a>

```typescript
public readonly site: IResolvable | BotChannelDirectlineSite[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>[]

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#site BotChannelDirectline#site}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#id BotChannelDirectline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BotChannelDirectlineTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#timeouts BotChannelDirectline#timeouts}

---

### BotChannelDirectlineSite <a name="BotChannelDirectlineSite" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.Initializer"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

const botChannelDirectlineSite: botChannelDirectline.BotChannelDirectlineSite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#name BotChannelDirectline#name}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#enabled BotChannelDirectline#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.endpointParametersEnabled">endpointParametersEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#endpoint_parameters_enabled BotChannelDirectline#endpoint_parameters_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enhancedAuthenticationEnabled">enhancedAuthenticationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#enhanced_authentication_enabled BotChannelDirectline#enhanced_authentication_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.storageEnabled">storageEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#storage_enabled BotChannelDirectline#storage_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.trustedOrigins">trustedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#trusted_origins BotChannelDirectline#trusted_origins}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.userUploadEnabled">userUploadEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#user_upload_enabled BotChannelDirectline#user_upload_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v1Allowed">v1Allowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#v1_allowed BotChannelDirectline#v1_allowed}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v3Allowed">v3Allowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#v3_allowed BotChannelDirectline#v3_allowed}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#name BotChannelDirectline#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#enabled BotChannelDirectline#enabled}.

---

##### `endpointParametersEnabled`<sup>Optional</sup> <a name="endpointParametersEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.endpointParametersEnabled"></a>

```typescript
public readonly endpointParametersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#endpoint_parameters_enabled BotChannelDirectline#endpoint_parameters_enabled}.

---

##### `enhancedAuthenticationEnabled`<sup>Optional</sup> <a name="enhancedAuthenticationEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enhancedAuthenticationEnabled"></a>

```typescript
public readonly enhancedAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#enhanced_authentication_enabled BotChannelDirectline#enhanced_authentication_enabled}.

---

##### `storageEnabled`<sup>Optional</sup> <a name="storageEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.storageEnabled"></a>

```typescript
public readonly storageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#storage_enabled BotChannelDirectline#storage_enabled}.

---

##### `trustedOrigins`<sup>Optional</sup> <a name="trustedOrigins" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.trustedOrigins"></a>

```typescript
public readonly trustedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#trusted_origins BotChannelDirectline#trusted_origins}.

---

##### `userUploadEnabled`<sup>Optional</sup> <a name="userUploadEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.userUploadEnabled"></a>

```typescript
public readonly userUploadEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#user_upload_enabled BotChannelDirectline#user_upload_enabled}.

---

##### `v1Allowed`<sup>Optional</sup> <a name="v1Allowed" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v1Allowed"></a>

```typescript
public readonly v1Allowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#v1_allowed BotChannelDirectline#v1_allowed}.

---

##### `v3Allowed`<sup>Optional</sup> <a name="v3Allowed" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v3Allowed"></a>

```typescript
public readonly v3Allowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#v3_allowed BotChannelDirectline#v3_allowed}.

---

### BotChannelDirectlineTimeouts <a name="BotChannelDirectlineTimeouts" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.Initializer"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

const botChannelDirectlineTimeouts: botChannelDirectline.BotChannelDirectlineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#create BotChannelDirectline#create}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#delete BotChannelDirectline#delete}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#read BotChannelDirectline#read}. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#update BotChannelDirectline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#create BotChannelDirectline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#delete BotChannelDirectline#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#read BotChannelDirectline#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/bot_channel_directline#update BotChannelDirectline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelDirectlineSiteList <a name="BotChannelDirectlineSiteList" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

new botChannelDirectline.BotChannelDirectlineSiteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get"></a>

```typescript
public get(index: number): BotChannelDirectlineSiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BotChannelDirectlineSite[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>[]

---


### BotChannelDirectlineSiteOutputReference <a name="BotChannelDirectlineSiteOutputReference" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

new botChannelDirectline.BotChannelDirectlineSiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEndpointParametersEnabled">resetEndpointParametersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnhancedAuthenticationEnabled">resetEnhancedAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetStorageEnabled">resetStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetTrustedOrigins">resetTrustedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetUserUploadEnabled">resetUserUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV1Allowed">resetV1Allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV3Allowed">resetV3Allowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEndpointParametersEnabled` <a name="resetEndpointParametersEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEndpointParametersEnabled"></a>

```typescript
public resetEndpointParametersEnabled(): void
```

##### `resetEnhancedAuthenticationEnabled` <a name="resetEnhancedAuthenticationEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnhancedAuthenticationEnabled"></a>

```typescript
public resetEnhancedAuthenticationEnabled(): void
```

##### `resetStorageEnabled` <a name="resetStorageEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetStorageEnabled"></a>

```typescript
public resetStorageEnabled(): void
```

##### `resetTrustedOrigins` <a name="resetTrustedOrigins" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetTrustedOrigins"></a>

```typescript
public resetTrustedOrigins(): void
```

##### `resetUserUploadEnabled` <a name="resetUserUploadEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetUserUploadEnabled"></a>

```typescript
public resetUserUploadEnabled(): void
```

##### `resetV1Allowed` <a name="resetV1Allowed" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV1Allowed"></a>

```typescript
public resetV1Allowed(): void
```

##### `resetV3Allowed` <a name="resetV3Allowed" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV3Allowed"></a>

```typescript
public resetV3Allowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key2">key2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.endpointParametersEnabledInput">endpointParametersEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabledInput">enhancedAuthenticationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.storageEnabledInput">storageEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOriginsInput">trustedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.userUploadEnabledInput">userUploadEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1AllowedInput">v1AllowedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3AllowedInput">v3AllowedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.endpointParametersEnabled">endpointParametersEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabled">enhancedAuthenticationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.storageEnabled">storageEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOrigins">trustedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.userUploadEnabled">userUploadEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1Allowed">v1Allowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3Allowed">v3Allowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `key2`<sup>Required</sup> <a name="key2" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key2"></a>

```typescript
public readonly key2: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointParametersEnabledInput`<sup>Optional</sup> <a name="endpointParametersEnabledInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.endpointParametersEnabledInput"></a>

```typescript
public readonly endpointParametersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enhancedAuthenticationEnabledInput`<sup>Optional</sup> <a name="enhancedAuthenticationEnabledInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabledInput"></a>

```typescript
public readonly enhancedAuthenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageEnabledInput`<sup>Optional</sup> <a name="storageEnabledInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.storageEnabledInput"></a>

```typescript
public readonly storageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `trustedOriginsInput`<sup>Optional</sup> <a name="trustedOriginsInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOriginsInput"></a>

```typescript
public readonly trustedOriginsInput: string[];
```

- *Type:* string[]

---

##### `userUploadEnabledInput`<sup>Optional</sup> <a name="userUploadEnabledInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.userUploadEnabledInput"></a>

```typescript
public readonly userUploadEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `v1AllowedInput`<sup>Optional</sup> <a name="v1AllowedInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1AllowedInput"></a>

```typescript
public readonly v1AllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `v3AllowedInput`<sup>Optional</sup> <a name="v3AllowedInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3AllowedInput"></a>

```typescript
public readonly v3AllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointParametersEnabled`<sup>Required</sup> <a name="endpointParametersEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.endpointParametersEnabled"></a>

```typescript
public readonly endpointParametersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enhancedAuthenticationEnabled`<sup>Required</sup> <a name="enhancedAuthenticationEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabled"></a>

```typescript
public readonly enhancedAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageEnabled`<sup>Required</sup> <a name="storageEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.storageEnabled"></a>

```typescript
public readonly storageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `trustedOrigins`<sup>Required</sup> <a name="trustedOrigins" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOrigins"></a>

```typescript
public readonly trustedOrigins: string[];
```

- *Type:* string[]

---

##### `userUploadEnabled`<sup>Required</sup> <a name="userUploadEnabled" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.userUploadEnabled"></a>

```typescript
public readonly userUploadEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `v1Allowed`<sup>Required</sup> <a name="v1Allowed" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1Allowed"></a>

```typescript
public readonly v1Allowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `v3Allowed`<sup>Required</sup> <a name="v3Allowed" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3Allowed"></a>

```typescript
public readonly v3Allowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BotChannelDirectlineSite;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite">BotChannelDirectlineSite</a>

---


### BotChannelDirectlineTimeoutsOutputReference <a name="BotChannelDirectlineTimeoutsOutputReference" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer"></a>

```typescript
import { botChannelDirectline } from '@cdktn/provider-azurerm'

new botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BotChannelDirectlineTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>

---



