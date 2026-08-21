# `oracleExadataInfrastructure` Submodule <a name="`oracleExadataInfrastructure` Submodule" id="@cdktn/provider-azurerm.oracleExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleExadataInfrastructure <a name="OracleExadataInfrastructure" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure azurerm_oracle_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

new oracleExadataInfrastructure.OracleExadataInfrastructure(scope: Construct, id: string, config: OracleExadataInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig">OracleExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig">OracleExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetDatabaseServerType">resetDatabaseServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetStorageServerType">resetStorageServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: IResolvable | OracleExadataInfrastructureMaintenanceWindow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleExadataInfrastructureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

---

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetCustomerContacts"></a>

```typescript
public resetCustomerContacts(): void
```

##### `resetDatabaseServerType` <a name="resetDatabaseServerType" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetDatabaseServerType"></a>

```typescript
public resetDatabaseServerType(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetStorageServerType` <a name="resetStorageServerType" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetStorageServerType"></a>

```typescript
public resetStorageServerType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZones` <a name="resetZones" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleExadataInfrastructure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isConstruct"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

oracleExadataInfrastructure.OracleExadataInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformElement"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformResource"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OracleExadataInfrastructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList">OracleExadataInfrastructureMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference">OracleExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.customerContactsInput">customerContactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.databaseServerTypeInput">databaseServerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageCountInput">storageCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageServerTypeInput">storageServerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.customerContacts">customerContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.databaseServerType">databaseServerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageCount">storageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageServerType">storageServerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: OracleExadataInfrastructureMaintenanceWindowList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList">OracleExadataInfrastructureMaintenanceWindowList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.timeouts"></a>

```typescript
public readonly timeouts: OracleExadataInfrastructureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference">OracleExadataInfrastructureTimeoutsOutputReference</a>

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.customerContactsInput"></a>

```typescript
public readonly customerContactsInput: string[];
```

- *Type:* string[]

---

##### `databaseServerTypeInput`<sup>Optional</sup> <a name="databaseServerTypeInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.databaseServerTypeInput"></a>

```typescript
public readonly databaseServerTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: IResolvable | OracleExadataInfrastructureMaintenanceWindow[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `storageCountInput`<sup>Optional</sup> <a name="storageCountInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageCountInput"></a>

```typescript
public readonly storageCountInput: number;
```

- *Type:* number

---

##### `storageServerTypeInput`<sup>Optional</sup> <a name="storageServerTypeInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageServerTypeInput"></a>

```typescript
public readonly storageServerTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleExadataInfrastructureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.customerContacts"></a>

```typescript
public readonly customerContacts: string[];
```

- *Type:* string[]

---

##### `databaseServerType`<sup>Required</sup> <a name="databaseServerType" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.databaseServerType"></a>

```typescript
public readonly databaseServerType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

---

##### `storageServerType`<sup>Required</sup> <a name="storageServerType" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageServerType"></a>

```typescript
public readonly storageServerType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleExadataInfrastructureConfig <a name="OracleExadataInfrastructureConfig" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.Initializer"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

const oracleExadataInfrastructureConfig: oracleExadataInfrastructure.OracleExadataInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.computeCount">computeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#compute_count OracleExadataInfrastructure#compute_count}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#display_name OracleExadataInfrastructure#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#location OracleExadataInfrastructure#location}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#name OracleExadataInfrastructure#name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#resource_group_name OracleExadataInfrastructure#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#shape OracleExadataInfrastructure#shape}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.storageCount">storageCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#storage_count OracleExadataInfrastructure#storage_count}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.customerContacts">customerContacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#customer_contacts OracleExadataInfrastructure#customer_contacts}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.databaseServerType">databaseServerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#database_server_type OracleExadataInfrastructure#database_server_type}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#id OracleExadataInfrastructure#id}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>[]</code> | maintenance_window block. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.storageServerType">storageServerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#storage_server_type OracleExadataInfrastructure#storage_server_type}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#tags OracleExadataInfrastructure#tags}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#zones OracleExadataInfrastructure#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#compute_count OracleExadataInfrastructure#compute_count}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#display_name OracleExadataInfrastructure#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#location OracleExadataInfrastructure#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#name OracleExadataInfrastructure#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#resource_group_name OracleExadataInfrastructure#resource_group_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#shape OracleExadataInfrastructure#shape}.

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#storage_count OracleExadataInfrastructure#storage_count}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.customerContacts"></a>

```typescript
public readonly customerContacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#customer_contacts OracleExadataInfrastructure#customer_contacts}.

---

##### `databaseServerType`<sup>Optional</sup> <a name="databaseServerType" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.databaseServerType"></a>

```typescript
public readonly databaseServerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#database_server_type OracleExadataInfrastructure#database_server_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#id OracleExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: IResolvable | OracleExadataInfrastructureMaintenanceWindow[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>[]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#maintenance_window OracleExadataInfrastructure#maintenance_window}

---

##### `storageServerType`<sup>Optional</sup> <a name="storageServerType" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.storageServerType"></a>

```typescript
public readonly storageServerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#storage_server_type OracleExadataInfrastructure#storage_server_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#tags OracleExadataInfrastructure#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleExadataInfrastructureTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#timeouts OracleExadataInfrastructure#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#zones OracleExadataInfrastructure#zones}.

---

### OracleExadataInfrastructureMaintenanceWindow <a name="OracleExadataInfrastructureMaintenanceWindow" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.Initializer"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

const oracleExadataInfrastructureMaintenanceWindow: oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#days_of_week OracleExadataInfrastructure#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#hours_of_day OracleExadataInfrastructure#hours_of_day}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#lead_time_in_weeks OracleExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.months">months</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#months OracleExadataInfrastructure#months}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.patchingMode">patchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#patching_mode OracleExadataInfrastructure#patching_mode}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.preference">preference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#preference OracleExadataInfrastructure#preference}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#weeks_of_month OracleExadataInfrastructure#weeks_of_month}. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#days_of_week OracleExadataInfrastructure#days_of_week}.

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#hours_of_day OracleExadataInfrastructure#hours_of_day}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#lead_time_in_weeks OracleExadataInfrastructure#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#months OracleExadataInfrastructure#months}.

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#patching_mode OracleExadataInfrastructure#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#preference OracleExadataInfrastructure#preference}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#weeks_of_month OracleExadataInfrastructure#weeks_of_month}.

---

### OracleExadataInfrastructureTimeouts <a name="OracleExadataInfrastructureTimeouts" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.Initializer"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

const oracleExadataInfrastructureTimeouts: oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#create OracleExadataInfrastructure#create}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#delete OracleExadataInfrastructure#delete}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#read OracleExadataInfrastructure#read}. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#update OracleExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#create OracleExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#delete OracleExadataInfrastructure#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#read OracleExadataInfrastructure#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/oracle_exadata_infrastructure#update OracleExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleExadataInfrastructureMaintenanceWindowList <a name="OracleExadataInfrastructureMaintenanceWindowList" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

new oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.get"></a>

```typescript
public get(index: number): OracleExadataInfrastructureMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleExadataInfrastructureMaintenanceWindow[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>[]

---


### OracleExadataInfrastructureMaintenanceWindowOutputReference <a name="OracleExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

new oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```typescript
public resetHoursOfDay(): void
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```typescript
public resetLeadTimeInWeeks(): void
```

##### `resetMonths` <a name="resetMonths" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```typescript
public resetPatchingMode(): void
```

##### `resetPreference` <a name="resetPreference" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```typescript
public readonly hoursOfDayInput: number[];
```

- *Type:* number[]

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```typescript
public readonly leadTimeInWeeksInput: number;
```

- *Type:* number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```typescript
public readonly patchingModeInput: string;
```

- *Type:* string

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: number[];
```

- *Type:* number[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleExadataInfrastructureMaintenanceWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>

---


### OracleExadataInfrastructureTimeoutsOutputReference <a name="OracleExadataInfrastructureTimeoutsOutputReference" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleExadataInfrastructure } from '@cdktn/provider-azurerm'

new oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleExadataInfrastructureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

---



