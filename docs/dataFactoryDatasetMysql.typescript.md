# `dataFactoryDatasetMysql` Submodule <a name="`dataFactoryDatasetMysql` Submodule" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetMysql <a name="DataFactoryDatasetMysql" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql azurerm_data_factory_dataset_mysql}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

new dataFactoryDatasetMysql.DataFactoryDatasetMysql(scope: Construct, id: string, config: DataFactoryDatasetMysqlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig">DataFactoryDatasetMysqlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig">DataFactoryDatasetMysqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putSchemaColumn">putSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetSchemaColumn">resetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaColumn` <a name="putSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putSchemaColumn"></a>

```typescript
public putSchemaColumn(value: IResolvable | DataFactoryDatasetMysqlSchemaColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putSchemaColumn.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryDatasetMysqlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSchemaColumn` <a name="resetSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetSchemaColumn"></a>

```typescript
public resetSchemaColumn(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryDatasetMysql resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isConstruct"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

dataFactoryDatasetMysql.DataFactoryDatasetMysql.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformElement"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformResource"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataFactoryDatasetMysql resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryDatasetMysql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryDatasetMysql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetMysql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.schemaColumn">schemaColumn</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList">DataFactoryDatasetMysqlSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference">DataFactoryDatasetMysqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.schemaColumnInput">schemaColumnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `schemaColumn`<sup>Required</sup> <a name="schemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.schemaColumn"></a>

```typescript
public readonly schemaColumn: DataFactoryDatasetMysqlSchemaColumnList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList">DataFactoryDatasetMysqlSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryDatasetMysqlTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference">DataFactoryDatasetMysqlTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaColumnInput`<sup>Optional</sup> <a name="schemaColumnInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.schemaColumnInput"></a>

```typescript
public readonly schemaColumnInput: IResolvable | DataFactoryDatasetMysqlSchemaColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryDatasetMysqlTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a>

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetMysqlConfig <a name="DataFactoryDatasetMysqlConfig" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.Initializer"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

const dataFactoryDatasetMysqlConfig: dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#data_factory_id DataFactoryDatasetMysql#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#linked_service_name DataFactoryDatasetMysql#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#name DataFactoryDatasetMysql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#additional_properties DataFactoryDatasetMysql#additional_properties}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#annotations DataFactoryDatasetMysql#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#description DataFactoryDatasetMysql#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.folder">folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#folder DataFactoryDatasetMysql#folder}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#id DataFactoryDatasetMysql#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#parameters DataFactoryDatasetMysql#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.schemaColumn">schemaColumn</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]</code> | schema_column block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#table_name DataFactoryDatasetMysql#table_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#data_factory_id DataFactoryDatasetMysql#data_factory_id}.

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#linked_service_name DataFactoryDatasetMysql#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#name DataFactoryDatasetMysql#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#additional_properties DataFactoryDatasetMysql#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#annotations DataFactoryDatasetMysql#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#description DataFactoryDatasetMysql#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#folder DataFactoryDatasetMysql#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#id DataFactoryDatasetMysql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#parameters DataFactoryDatasetMysql#parameters}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.schemaColumn"></a>

```typescript
public readonly schemaColumn: IResolvable | DataFactoryDatasetMysqlSchemaColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#schema_column DataFactoryDatasetMysql#schema_column}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#table_name DataFactoryDatasetMysql#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryDatasetMysqlTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#timeouts DataFactoryDatasetMysql#timeouts}

---

### DataFactoryDatasetMysqlSchemaColumn <a name="DataFactoryDatasetMysqlSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.Initializer"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

const dataFactoryDatasetMysqlSchemaColumn: dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#name DataFactoryDatasetMysql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#description DataFactoryDatasetMysql#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#type DataFactoryDatasetMysql#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#name DataFactoryDatasetMysql#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#description DataFactoryDatasetMysql#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#type DataFactoryDatasetMysql#type}.

---

### DataFactoryDatasetMysqlTimeouts <a name="DataFactoryDatasetMysqlTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.Initializer"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

const dataFactoryDatasetMysqlTimeouts: dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#create DataFactoryDatasetMysql#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#delete DataFactoryDatasetMysql#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#read DataFactoryDatasetMysql#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#update DataFactoryDatasetMysql#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#create DataFactoryDatasetMysql#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#delete DataFactoryDatasetMysql#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#read DataFactoryDatasetMysql#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_dataset_mysql#update DataFactoryDatasetMysql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetMysqlSchemaColumnList <a name="DataFactoryDatasetMysqlSchemaColumnList" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

new dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.get"></a>

```typescript
public get(index: number): DataFactoryDatasetMysqlSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetMysqlSchemaColumn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]

---


### DataFactoryDatasetMysqlSchemaColumnOutputReference <a name="DataFactoryDatasetMysqlSchemaColumnOutputReference" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

new dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetMysqlSchemaColumn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>

---


### DataFactoryDatasetMysqlTimeoutsOutputReference <a name="DataFactoryDatasetMysqlTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetMysql } from '@cdktn/provider-azurerm'

new dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetMysqlTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a>

---



