# `resourceGroupCostManagementExport` Submodule <a name="`resourceGroupCostManagementExport` Submodule" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupCostManagementExport <a name="ResourceGroupCostManagementExport" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export azurerm_resource_group_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

new resourceGroupCostManagementExport.ResourceGroupCostManagementExport(scope: Construct, id: string, config: ResourceGroupCostManagementExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig">ResourceGroupCostManagementExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig">ResourceGroupCostManagementExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions">putExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation">putExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetFileFormat">resetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExportDataOptions` <a name="putExportDataOptions" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions"></a>

```typescript
public putExportDataOptions(value: ResourceGroupCostManagementExportExportDataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---

##### `putExportDataStorageLocation` <a name="putExportDataStorageLocation" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation"></a>

```typescript
public putExportDataStorageLocation(value: ResourceGroupCostManagementExportExportDataStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceGroupCostManagementExportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetFileFormat` <a name="resetFileFormat" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetFileFormat"></a>

```typescript
public resetFileFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceGroupCostManagementExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ResourceGroupCostManagementExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceGroupCostManagementExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceGroupCostManagementExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourceGroupCostManagementExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference">ResourceGroupCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference">ResourceGroupCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference">ResourceGroupCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptionsInput">exportDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocationInput">exportDataStorageLocationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fileFormatInput">fileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDateInput">recurrencePeriodEndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDateInput">recurrencePeriodStartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fileFormat">fileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptions"></a>

```typescript
public readonly exportDataOptions: ResourceGroupCostManagementExportExportDataOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference">ResourceGroupCostManagementExportExportDataOptionsOutputReference</a>

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocation"></a>

```typescript
public readonly exportDataStorageLocation: ResourceGroupCostManagementExportExportDataStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference">ResourceGroupCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceGroupCostManagementExportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference">ResourceGroupCostManagementExportTimeoutsOutputReference</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exportDataOptionsInput`<sup>Optional</sup> <a name="exportDataOptionsInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptionsInput"></a>

```typescript
public readonly exportDataOptionsInput: ResourceGroupCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---

##### `exportDataStorageLocationInput`<sup>Optional</sup> <a name="exportDataStorageLocationInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocationInput"></a>

```typescript
public readonly exportDataStorageLocationInput: ResourceGroupCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fileFormatInput"></a>

```typescript
public readonly fileFormatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recurrencePeriodEndDateInput`<sup>Optional</sup> <a name="recurrencePeriodEndDateInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```typescript
public readonly recurrencePeriodEndDateInput: string;
```

- *Type:* string

---

##### `recurrencePeriodStartDateInput`<sup>Optional</sup> <a name="recurrencePeriodStartDateInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```typescript
public readonly recurrencePeriodStartDateInput: string;
```

- *Type:* string

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceTypeInput"></a>

```typescript
public readonly recurrenceTypeInput: string;
```

- *Type:* string

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupIdInput"></a>

```typescript
public readonly resourceGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceGroupCostManagementExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDate"></a>

```typescript
public readonly recurrencePeriodEndDate: string;
```

- *Type:* string

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDate"></a>

```typescript
public readonly recurrencePeriodStartDate: string;
```

- *Type:* string

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupCostManagementExportConfig <a name="ResourceGroupCostManagementExportConfig" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.Initializer"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

const resourceGroupCostManagementExportConfig: resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.fileFormat">fileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#file_format ResourceGroupCostManagementExport#file_format}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataOptions"></a>

```typescript
public readonly exportDataOptions: ResourceGroupCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#export_data_options ResourceGroupCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataStorageLocation"></a>

```typescript
public readonly exportDataStorageLocation: ResourceGroupCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#export_data_storage_location ResourceGroupCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```typescript
public readonly recurrencePeriodEndDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```typescript
public readonly recurrencePeriodStartDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.resourceGroupId"></a>

```typescript
public readonly resourceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}.

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#file_format ResourceGroupCostManagementExport#file_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceGroupCostManagementExportTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#timeouts ResourceGroupCostManagementExport#timeouts}

---

### ResourceGroupCostManagementExportExportDataOptions <a name="ResourceGroupCostManagementExportExportDataOptions" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.Initializer"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

const resourceGroupCostManagementExportExportDataOptions: resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.timeFrame">timeFrame</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}. |

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.timeFrame"></a>

```typescript
public readonly timeFrame: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}.

---

### ResourceGroupCostManagementExportExportDataStorageLocation <a name="ResourceGroupCostManagementExportExportDataStorageLocation" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.Initializer"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

const resourceGroupCostManagementExportExportDataStorageLocation: resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.containerId">containerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.rootFolderPath">rootFolderPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}.

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```typescript
public readonly rootFolderPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}.

---

### ResourceGroupCostManagementExportTimeouts <a name="ResourceGroupCostManagementExportTimeouts" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.Initializer"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

const resourceGroupCostManagementExportTimeouts: resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupCostManagementExportExportDataOptionsOutputReference <a name="ResourceGroupCostManagementExportExportDataOptionsOutputReference" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

new resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">timeFrameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrame">timeFrame</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeFrameInput`<sup>Optional</sup> <a name="timeFrameInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```typescript
public readonly timeFrameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```typescript
public readonly timeFrame: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourceGroupCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---


### ResourceGroupCostManagementExportExportDataStorageLocationOutputReference <a name="ResourceGroupCostManagementExportExportDataStorageLocationOutputReference" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

new resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">rootFolderPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">rootFolderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```typescript
public readonly containerIdInput: string;
```

- *Type:* string

---

##### `rootFolderPathInput`<sup>Optional</sup> <a name="rootFolderPathInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```typescript
public readonly rootFolderPathInput: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```typescript
public readonly rootFolderPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourceGroupCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---


### ResourceGroupCostManagementExportTimeoutsOutputReference <a name="ResourceGroupCostManagementExportTimeoutsOutputReference" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceGroupCostManagementExport } from '@cdktn/provider-azurerm'

new resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceGroupCostManagementExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

---



