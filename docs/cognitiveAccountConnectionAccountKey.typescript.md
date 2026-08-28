# `cognitiveAccountConnectionAccountKey` Submodule <a name="`cognitiveAccountConnectionAccountKey` Submodule" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountConnectionAccountKey <a name="CognitiveAccountConnectionAccountKey" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key azurerm_cognitive_account_connection_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer"></a>

```typescript
import { cognitiveAccountConnectionAccountKey } from '@cdktn/provider-azurerm'

new cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey(scope: Construct, id: string, config: CognitiveAccountConnectionAccountKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig">CognitiveAccountConnectionAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig">CognitiveAccountConnectionAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.putTimeouts"></a>

```typescript
public putTimeouts(value: CognitiveAccountConnectionAccountKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitiveAccountConnectionAccountKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isConstruct"></a>

```typescript
import { cognitiveAccountConnectionAccountKey } from '@cdktn/provider-azurerm'

cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformElement"></a>

```typescript
import { cognitiveAccountConnectionAccountKey } from '@cdktn/provider-azurerm'

cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformResource"></a>

```typescript
import { cognitiveAccountConnectionAccountKey } from '@cdktn/provider-azurerm'

cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport"></a>

```typescript
import { cognitiveAccountConnectionAccountKey } from '@cdktn/provider-azurerm'

cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitiveAccountConnectionAccountKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccountConnectionAccountKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccountConnectionAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitiveAccountConnectionAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference">CognitiveAccountConnectionAccountKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cognitiveAccountIdInput">cognitiveAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountConnectionAccountKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference">CognitiveAccountConnectionAccountKeyTimeoutsOutputReference</a>

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `cognitiveAccountIdInput`<sup>Optional</sup> <a name="cognitiveAccountIdInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cognitiveAccountIdInput"></a>

```typescript
public readonly cognitiveAccountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CognitiveAccountConnectionAccountKeyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a>

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountConnectionAccountKeyConfig <a name="CognitiveAccountConnectionAccountKeyConfig" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.Initializer"></a>

```typescript
import { cognitiveAccountConnectionAccountKey } from '@cdktn/provider-azurerm'

const cognitiveAccountConnectionAccountKeyConfig: cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#account_key CognitiveAccountConnectionAccountKey#account_key}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#category CognitiveAccountConnectionAccountKey#category}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#cognitive_account_id CognitiveAccountConnectionAccountKey#cognitive_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#metadata CognitiveAccountConnectionAccountKey#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#name CognitiveAccountConnectionAccountKey#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#target CognitiveAccountConnectionAccountKey#target}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#id CognitiveAccountConnectionAccountKey#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#account_key CognitiveAccountConnectionAccountKey#account_key}.

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#category CognitiveAccountConnectionAccountKey#category}.

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#cognitive_account_id CognitiveAccountConnectionAccountKey#cognitive_account_id}.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#metadata CognitiveAccountConnectionAccountKey#metadata}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#name CognitiveAccountConnectionAccountKey#name}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#target CognitiveAccountConnectionAccountKey#target}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#id CognitiveAccountConnectionAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountConnectionAccountKeyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#timeouts CognitiveAccountConnectionAccountKey#timeouts}

---

### CognitiveAccountConnectionAccountKeyTimeouts <a name="CognitiveAccountConnectionAccountKeyTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.Initializer"></a>

```typescript
import { cognitiveAccountConnectionAccountKey } from '@cdktn/provider-azurerm'

const cognitiveAccountConnectionAccountKeyTimeouts: cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#create CognitiveAccountConnectionAccountKey#create}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#delete CognitiveAccountConnectionAccountKey#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#read CognitiveAccountConnectionAccountKey#read}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#update CognitiveAccountConnectionAccountKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#create CognitiveAccountConnectionAccountKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#delete CognitiveAccountConnectionAccountKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#read CognitiveAccountConnectionAccountKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cognitive_account_connection_account_key#update CognitiveAccountConnectionAccountKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountConnectionAccountKeyTimeoutsOutputReference <a name="CognitiveAccountConnectionAccountKeyTimeoutsOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { cognitiveAccountConnectionAccountKey } from '@cdktn/provider-azurerm'

new cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountConnectionAccountKeyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionAccountKey.CognitiveAccountConnectionAccountKeyTimeouts">CognitiveAccountConnectionAccountKeyTimeouts</a>

---



