# `cognitiveAccountProjectConnectionEntraId` Submodule <a name="`cognitiveAccountProjectConnectionEntraId` Submodule" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountProjectConnectionEntraId <a name="CognitiveAccountProjectConnectionEntraId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id azurerm_cognitive_account_project_connection_entra_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer"></a>

```typescript
import { cognitiveAccountProjectConnectionEntraId } from '@cdktn/provider-azurerm'

new cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId(scope: Construct, id: string, config: CognitiveAccountProjectConnectionEntraIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig">CognitiveAccountProjectConnectionEntraIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig">CognitiveAccountProjectConnectionEntraIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.putTimeouts"></a>

```typescript
public putTimeouts(value: CognitiveAccountProjectConnectionEntraIdTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitiveAccountProjectConnectionEntraId resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isConstruct"></a>

```typescript
import { cognitiveAccountProjectConnectionEntraId } from '@cdktn/provider-azurerm'

cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformElement"></a>

```typescript
import { cognitiveAccountProjectConnectionEntraId } from '@cdktn/provider-azurerm'

cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformResource"></a>

```typescript
import { cognitiveAccountProjectConnectionEntraId } from '@cdktn/provider-azurerm'

cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport"></a>

```typescript
import { cognitiveAccountProjectConnectionEntraId } from '@cdktn/provider-azurerm'

cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitiveAccountProjectConnectionEntraId resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccountProjectConnectionEntraId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccountProjectConnectionEntraId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitiveAccountProjectConnectionEntraId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference">CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cognitiveAccountProjectIdInput">cognitiveAccountProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cognitiveAccountProjectId">cognitiveAccountProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference">CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `cognitiveAccountProjectIdInput`<sup>Optional</sup> <a name="cognitiveAccountProjectIdInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cognitiveAccountProjectIdInput"></a>

```typescript
public readonly cognitiveAccountProjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CognitiveAccountProjectConnectionEntraIdTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `cognitiveAccountProjectId`<sup>Required</sup> <a name="cognitiveAccountProjectId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.cognitiveAccountProjectId"></a>

```typescript
public readonly cognitiveAccountProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountProjectConnectionEntraIdConfig <a name="CognitiveAccountProjectConnectionEntraIdConfig" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.Initializer"></a>

```typescript
import { cognitiveAccountProjectConnectionEntraId } from '@cdktn/provider-azurerm'

const cognitiveAccountProjectConnectionEntraIdConfig: cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#category CognitiveAccountProjectConnectionEntraId#category}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.cognitiveAccountProjectId">cognitiveAccountProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#cognitive_account_project_id CognitiveAccountProjectConnectionEntraId#cognitive_account_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#name CognitiveAccountProjectConnectionEntraId#name}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#target CognitiveAccountProjectConnectionEntraId#target}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#id CognitiveAccountProjectConnectionEntraId#id}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#metadata CognitiveAccountProjectConnectionEntraId#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#category CognitiveAccountProjectConnectionEntraId#category}.

---

##### `cognitiveAccountProjectId`<sup>Required</sup> <a name="cognitiveAccountProjectId" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.cognitiveAccountProjectId"></a>

```typescript
public readonly cognitiveAccountProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#cognitive_account_project_id CognitiveAccountProjectConnectionEntraId#cognitive_account_project_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#name CognitiveAccountProjectConnectionEntraId#name}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#target CognitiveAccountProjectConnectionEntraId#target}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#id CognitiveAccountProjectConnectionEntraId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#metadata CognitiveAccountProjectConnectionEntraId#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountProjectConnectionEntraIdTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#timeouts CognitiveAccountProjectConnectionEntraId#timeouts}

---

### CognitiveAccountProjectConnectionEntraIdTimeouts <a name="CognitiveAccountProjectConnectionEntraIdTimeouts" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.Initializer"></a>

```typescript
import { cognitiveAccountProjectConnectionEntraId } from '@cdktn/provider-azurerm'

const cognitiveAccountProjectConnectionEntraIdTimeouts: cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#create CognitiveAccountProjectConnectionEntraId#create}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#delete CognitiveAccountProjectConnectionEntraId#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#read CognitiveAccountProjectConnectionEntraId#read}. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#update CognitiveAccountProjectConnectionEntraId#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#create CognitiveAccountProjectConnectionEntraId#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#delete CognitiveAccountProjectConnectionEntraId#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#read CognitiveAccountProjectConnectionEntraId#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/cognitive_account_project_connection_entra_id#update CognitiveAccountProjectConnectionEntraId#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference <a name="CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer"></a>

```typescript
import { cognitiveAccountProjectConnectionEntraId } from '@cdktn/provider-azurerm'

new cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountProjectConnectionEntraIdTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cognitiveAccountProjectConnectionEntraId.CognitiveAccountProjectConnectionEntraIdTimeouts">CognitiveAccountProjectConnectionEntraIdTimeouts</a>

---



