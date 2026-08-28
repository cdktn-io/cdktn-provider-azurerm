# `cosmosdbMongoUserDefinition` Submodule <a name="`cosmosdbMongoUserDefinition` Submodule" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbMongoUserDefinition <a name="CosmosdbMongoUserDefinition" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition azurerm_cosmosdb_mongo_user_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer"></a>

```typescript
import { cosmosdbMongoUserDefinition } from '@cdktn/provider-azurerm'

new cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition(scope: Construct, id: string, config: CosmosdbMongoUserDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig">CosmosdbMongoUserDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig">CosmosdbMongoUserDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetInheritedRoleNames">resetInheritedRoleNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbMongoUserDefinitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInheritedRoleNames` <a name="resetInheritedRoleNames" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetInheritedRoleNames"></a>

```typescript
public resetInheritedRoleNames(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CosmosdbMongoUserDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isConstruct"></a>

```typescript
import { cosmosdbMongoUserDefinition } from '@cdktn/provider-azurerm'

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformElement"></a>

```typescript
import { cosmosdbMongoUserDefinition } from '@cdktn/provider-azurerm'

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformResource"></a>

```typescript
import { cosmosdbMongoUserDefinition } from '@cdktn/provider-azurerm'

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport"></a>

```typescript
import { cosmosdbMongoUserDefinition } from '@cdktn/provider-azurerm'

cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CosmosdbMongoUserDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbMongoUserDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbMongoUserDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CosmosdbMongoUserDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference">CosmosdbMongoUserDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cosmosMongoDatabaseIdInput">cosmosMongoDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.inheritedRoleNamesInput">inheritedRoleNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cosmosMongoDatabaseId">cosmosMongoDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.inheritedRoleNames">inheritedRoleNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbMongoUserDefinitionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference">CosmosdbMongoUserDefinitionTimeoutsOutputReference</a>

---

##### `cosmosMongoDatabaseIdInput`<sup>Optional</sup> <a name="cosmosMongoDatabaseIdInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cosmosMongoDatabaseIdInput"></a>

```typescript
public readonly cosmosMongoDatabaseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inheritedRoleNamesInput`<sup>Optional</sup> <a name="inheritedRoleNamesInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.inheritedRoleNamesInput"></a>

```typescript
public readonly inheritedRoleNamesInput: string[];
```

- *Type:* string[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbMongoUserDefinitionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `cosmosMongoDatabaseId`<sup>Required</sup> <a name="cosmosMongoDatabaseId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.cosmosMongoDatabaseId"></a>

```typescript
public readonly cosmosMongoDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inheritedRoleNames`<sup>Required</sup> <a name="inheritedRoleNames" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.inheritedRoleNames"></a>

```typescript
public readonly inheritedRoleNames: string[];
```

- *Type:* string[]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbMongoUserDefinitionConfig <a name="CosmosdbMongoUserDefinitionConfig" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.Initializer"></a>

```typescript
import { cosmosdbMongoUserDefinition } from '@cdktn/provider-azurerm'

const cosmosdbMongoUserDefinitionConfig: cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.cosmosMongoDatabaseId">cosmosMongoDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#cosmos_mongo_database_id CosmosdbMongoUserDefinition#cosmos_mongo_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#password CosmosdbMongoUserDefinition#password}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#username CosmosdbMongoUserDefinition#username}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#id CosmosdbMongoUserDefinition#id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.inheritedRoleNames">inheritedRoleNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#inherited_role_names CosmosdbMongoUserDefinition#inherited_role_names}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cosmosMongoDatabaseId`<sup>Required</sup> <a name="cosmosMongoDatabaseId" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.cosmosMongoDatabaseId"></a>

```typescript
public readonly cosmosMongoDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#cosmos_mongo_database_id CosmosdbMongoUserDefinition#cosmos_mongo_database_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#password CosmosdbMongoUserDefinition#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#username CosmosdbMongoUserDefinition#username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#id CosmosdbMongoUserDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inheritedRoleNames`<sup>Optional</sup> <a name="inheritedRoleNames" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.inheritedRoleNames"></a>

```typescript
public readonly inheritedRoleNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#inherited_role_names CosmosdbMongoUserDefinition#inherited_role_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbMongoUserDefinitionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#timeouts CosmosdbMongoUserDefinition#timeouts}

---

### CosmosdbMongoUserDefinitionTimeouts <a name="CosmosdbMongoUserDefinitionTimeouts" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.Initializer"></a>

```typescript
import { cosmosdbMongoUserDefinition } from '@cdktn/provider-azurerm'

const cosmosdbMongoUserDefinitionTimeouts: cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#create CosmosdbMongoUserDefinition#create}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#delete CosmosdbMongoUserDefinition#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#read CosmosdbMongoUserDefinition#read}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#update CosmosdbMongoUserDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#create CosmosdbMongoUserDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#delete CosmosdbMongoUserDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#read CosmosdbMongoUserDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/cosmosdb_mongo_user_definition#update CosmosdbMongoUserDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbMongoUserDefinitionTimeoutsOutputReference <a name="CosmosdbMongoUserDefinitionTimeoutsOutputReference" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbMongoUserDefinition } from '@cdktn/provider-azurerm'

new cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbMongoUserDefinitionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cosmosdbMongoUserDefinition.CosmosdbMongoUserDefinitionTimeouts">CosmosdbMongoUserDefinitionTimeouts</a>

---



