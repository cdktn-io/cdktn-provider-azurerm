# `dataFactoryCustomDataset` Submodule <a name="`dataFactoryCustomDataset` Submodule" id="@cdktn/provider-azurerm.dataFactoryCustomDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryCustomDataset <a name="DataFactoryCustomDataset" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset azurerm_data_factory_custom_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

new dataFactoryCustomDataset.DataFactoryCustomDataset(scope: Construct, id: string, config: DataFactoryCustomDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig">DataFactoryCustomDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig">DataFactoryCustomDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putLinkedService">putLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetSchemaJson">resetSchemaJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinkedService` <a name="putLinkedService" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putLinkedService"></a>

```typescript
public putLinkedService(value: DataFactoryCustomDatasetLinkedService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryCustomDatasetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSchemaJson` <a name="resetSchemaJson" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetSchemaJson"></a>

```typescript
public resetSchemaJson(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryCustomDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isConstruct"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

dataFactoryCustomDataset.DataFactoryCustomDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformElement"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformResource"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.generateConfigForImport"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

dataFactoryCustomDataset.DataFactoryCustomDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataFactoryCustomDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryCustomDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryCustomDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryCustomDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.linkedService">linkedService</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference">DataFactoryCustomDatasetLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference">DataFactoryCustomDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.linkedServiceInput">linkedServiceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.schemaJsonInput">schemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typePropertiesJsonInput">typePropertiesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.schemaJson">schemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typePropertiesJson">typePropertiesJson</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `linkedService`<sup>Required</sup> <a name="linkedService" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.linkedService"></a>

```typescript
public readonly linkedService: DataFactoryCustomDatasetLinkedServiceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference">DataFactoryCustomDatasetLinkedServiceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryCustomDatasetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference">DataFactoryCustomDatasetTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkedServiceInput`<sup>Optional</sup> <a name="linkedServiceInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.linkedServiceInput"></a>

```typescript
public readonly linkedServiceInput: DataFactoryCustomDatasetLinkedService;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaJsonInput`<sup>Optional</sup> <a name="schemaJsonInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.schemaJsonInput"></a>

```typescript
public readonly schemaJsonInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryCustomDatasetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typePropertiesJsonInput`<sup>Optional</sup> <a name="typePropertiesJsonInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typePropertiesJsonInput"></a>

```typescript
public readonly typePropertiesJsonInput: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaJson`<sup>Required</sup> <a name="schemaJson" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typePropertiesJson`<sup>Required</sup> <a name="typePropertiesJson" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.typePropertiesJson"></a>

```typescript
public readonly typePropertiesJson: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryCustomDatasetConfig <a name="DataFactoryCustomDatasetConfig" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.Initializer"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

const dataFactoryCustomDatasetConfig: dataFactoryCustomDataset.DataFactoryCustomDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#data_factory_id DataFactoryCustomDataset#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.linkedService">linkedService</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#type DataFactoryCustomDataset#type}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.typePropertiesJson">typePropertiesJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#type_properties_json DataFactoryCustomDataset#type_properties_json}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#additional_properties DataFactoryCustomDataset#additional_properties}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#annotations DataFactoryCustomDataset#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#description DataFactoryCustomDataset#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.folder">folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#folder DataFactoryCustomDataset#folder}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#id DataFactoryCustomDataset#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.schemaJson">schemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#schema_json DataFactoryCustomDataset#schema_json}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#data_factory_id DataFactoryCustomDataset#data_factory_id}.

---

##### `linkedService`<sup>Required</sup> <a name="linkedService" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.linkedService"></a>

```typescript
public readonly linkedService: DataFactoryCustomDatasetLinkedService;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#linked_service DataFactoryCustomDataset#linked_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#type DataFactoryCustomDataset#type}.

---

##### `typePropertiesJson`<sup>Required</sup> <a name="typePropertiesJson" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.typePropertiesJson"></a>

```typescript
public readonly typePropertiesJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#type_properties_json DataFactoryCustomDataset#type_properties_json}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#additional_properties DataFactoryCustomDataset#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#annotations DataFactoryCustomDataset#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#description DataFactoryCustomDataset#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#folder DataFactoryCustomDataset#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#id DataFactoryCustomDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}.

---

##### `schemaJson`<sup>Optional</sup> <a name="schemaJson" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#schema_json DataFactoryCustomDataset#schema_json}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryCustomDatasetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#timeouts DataFactoryCustomDataset#timeouts}

---

### DataFactoryCustomDatasetLinkedService <a name="DataFactoryCustomDatasetLinkedService" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.Initializer"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

const dataFactoryCustomDatasetLinkedService: dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#name DataFactoryCustomDataset#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#parameters DataFactoryCustomDataset#parameters}.

---

### DataFactoryCustomDatasetTimeouts <a name="DataFactoryCustomDatasetTimeouts" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.Initializer"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

const dataFactoryCustomDatasetTimeouts: dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#create DataFactoryCustomDataset#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#delete DataFactoryCustomDataset#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#read DataFactoryCustomDataset#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#update DataFactoryCustomDataset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#create DataFactoryCustomDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#delete DataFactoryCustomDataset#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#read DataFactoryCustomDataset#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_custom_dataset#update DataFactoryCustomDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryCustomDatasetLinkedServiceOutputReference <a name="DataFactoryCustomDatasetLinkedServiceOutputReference" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

new dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryCustomDatasetLinkedService;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetLinkedService">DataFactoryCustomDatasetLinkedService</a>

---


### DataFactoryCustomDatasetTimeoutsOutputReference <a name="DataFactoryCustomDatasetTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryCustomDataset } from '@cdktn/provider-azurerm'

new dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryCustomDatasetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryCustomDataset.DataFactoryCustomDatasetTimeouts">DataFactoryCustomDatasetTimeouts</a>

---



