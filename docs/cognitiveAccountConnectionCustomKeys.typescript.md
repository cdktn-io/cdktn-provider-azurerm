# `cognitiveAccountConnectionCustomKeys` Submodule <a name="`cognitiveAccountConnectionCustomKeys` Submodule" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountConnectionCustomKeys <a name="CognitiveAccountConnectionCustomKeys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys azurerm_cognitive_account_connection_custom_keys}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer"></a>

```typescript
import { cognitiveAccountConnectionCustomKeys } from '@cdktn/provider-azurerm'

new cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys(scope: Construct, id: string, config: CognitiveAccountConnectionCustomKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig">CognitiveAccountConnectionCustomKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig">CognitiveAccountConnectionCustomKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts"></a>

```typescript
public putTimeouts(value: CognitiveAccountConnectionCustomKeysTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitiveAccountConnectionCustomKeys resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct"></a>

```typescript
import { cognitiveAccountConnectionCustomKeys } from '@cdktn/provider-azurerm'

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement"></a>

```typescript
import { cognitiveAccountConnectionCustomKeys } from '@cdktn/provider-azurerm'

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource"></a>

```typescript
import { cognitiveAccountConnectionCustomKeys } from '@cdktn/provider-azurerm'

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport"></a>

```typescript
import { cognitiveAccountConnectionCustomKeys } from '@cdktn/provider-azurerm'

cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitiveAccountConnectionCustomKeys resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccountConnectionCustomKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccountConnectionCustomKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitiveAccountConnectionCustomKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference">CognitiveAccountConnectionCustomKeysTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountIdInput">cognitiveAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeysInput">customKeysInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeys">customKeys</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountConnectionCustomKeysTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference">CognitiveAccountConnectionCustomKeysTimeoutsOutputReference</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `cognitiveAccountIdInput`<sup>Optional</sup> <a name="cognitiveAccountIdInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountIdInput"></a>

```typescript
public readonly cognitiveAccountIdInput: string;
```

- *Type:* string

---

##### `customKeysInput`<sup>Optional</sup> <a name="customKeysInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeysInput"></a>

```typescript
public readonly customKeysInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CognitiveAccountConnectionCustomKeysTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

---

##### `customKeys`<sup>Required</sup> <a name="customKeys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.customKeys"></a>

```typescript
public readonly customKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountConnectionCustomKeysConfig <a name="CognitiveAccountConnectionCustomKeysConfig" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.Initializer"></a>

```typescript
import { cognitiveAccountConnectionCustomKeys } from '@cdktn/provider-azurerm'

const cognitiveAccountConnectionCustomKeysConfig: cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#category CognitiveAccountConnectionCustomKeys#category}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#cognitive_account_id CognitiveAccountConnectionCustomKeys#cognitive_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.customKeys">customKeys</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#custom_keys CognitiveAccountConnectionCustomKeys#custom_keys}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#name CognitiveAccountConnectionCustomKeys#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#target CognitiveAccountConnectionCustomKeys#target}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#id CognitiveAccountConnectionCustomKeys#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#metadata CognitiveAccountConnectionCustomKeys#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#category CognitiveAccountConnectionCustomKeys#category}.

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#cognitive_account_id CognitiveAccountConnectionCustomKeys#cognitive_account_id}.

---

##### `customKeys`<sup>Required</sup> <a name="customKeys" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.customKeys"></a>

```typescript
public readonly customKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#custom_keys CognitiveAccountConnectionCustomKeys#custom_keys}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#name CognitiveAccountConnectionCustomKeys#name}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#target CognitiveAccountConnectionCustomKeys#target}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#id CognitiveAccountConnectionCustomKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#metadata CognitiveAccountConnectionCustomKeys#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountConnectionCustomKeysTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#timeouts CognitiveAccountConnectionCustomKeys#timeouts}

---

### CognitiveAccountConnectionCustomKeysTimeouts <a name="CognitiveAccountConnectionCustomKeysTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.Initializer"></a>

```typescript
import { cognitiveAccountConnectionCustomKeys } from '@cdktn/provider-azurerm'

const cognitiveAccountConnectionCustomKeysTimeouts: cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#create CognitiveAccountConnectionCustomKeys#create}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#delete CognitiveAccountConnectionCustomKeys#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#read CognitiveAccountConnectionCustomKeys#read}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#update CognitiveAccountConnectionCustomKeys#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#create CognitiveAccountConnectionCustomKeys#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#delete CognitiveAccountConnectionCustomKeys#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#read CognitiveAccountConnectionCustomKeys#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/cognitive_account_connection_custom_keys#update CognitiveAccountConnectionCustomKeys#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountConnectionCustomKeysTimeoutsOutputReference <a name="CognitiveAccountConnectionCustomKeysTimeoutsOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer"></a>

```typescript
import { cognitiveAccountConnectionCustomKeys } from '@cdktn/provider-azurerm'

new cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountConnectionCustomKeysTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cognitiveAccountConnectionCustomKeys.CognitiveAccountConnectionCustomKeysTimeouts">CognitiveAccountConnectionCustomKeysTimeouts</a>

---



