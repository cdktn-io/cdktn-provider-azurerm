# `mssqlDatabaseExtendedAuditingPolicy` Submodule <a name="`mssqlDatabaseExtendedAuditingPolicy` Submodule" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlDatabaseExtendedAuditingPolicy <a name="MssqlDatabaseExtendedAuditingPolicy" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy azurerm_mssql_database_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktn/provider-azurerm'

new mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy(scope: Construct, id: string, config: MssqlDatabaseExtendedAuditingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig">MssqlDatabaseExtendedAuditingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig">MssqlDatabaseExtendedAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetBlobStorageEndpoint">resetBlobStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetLogMonitoringEnabled">resetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">resetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlDatabaseExtendedAuditingPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---

##### `resetBlobStorageEndpoint` <a name="resetBlobStorageEndpoint" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetBlobStorageEndpoint"></a>

```typescript
public resetBlobStorageEndpoint(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogMonitoringEnabled` <a name="resetLogMonitoringEnabled" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```typescript
public resetLogMonitoringEnabled(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageAccountAccessKeyIsSecondary` <a name="resetStorageAccountAccessKeyIsSecondary" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```typescript
public resetStorageAccountAccessKeyIsSecondary(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MssqlDatabaseExtendedAuditingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktn/provider-azurerm'

mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktn/provider-azurerm'

mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktn/provider-azurerm'

mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktn/provider-azurerm'

mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MssqlDatabaseExtendedAuditingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlDatabaseExtendedAuditingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlDatabaseExtendedAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MssqlDatabaseExtendedAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference">MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.blobStorageEndpointInput">blobStorageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabledInput">logMonitoringEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">storageAccountAccessKeyIsSecondaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.blobStorageEndpoint">blobStorageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference">MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `blobStorageEndpointInput`<sup>Optional</sup> <a name="blobStorageEndpointInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.blobStorageEndpointInput"></a>

```typescript
public readonly blobStorageEndpointInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logMonitoringEnabledInput`<sup>Optional</sup> <a name="logMonitoringEnabledInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```typescript
public readonly logMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondaryInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlDatabaseExtendedAuditingPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---

##### `blobStorageEndpoint`<sup>Required</sup> <a name="blobStorageEndpoint" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.blobStorageEndpoint"></a>

```typescript
public readonly blobStorageEndpoint: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logMonitoringEnabled`<sup>Required</sup> <a name="logMonitoringEnabled" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```typescript
public readonly logMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlDatabaseExtendedAuditingPolicyConfig <a name="MssqlDatabaseExtendedAuditingPolicyConfig" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.Initializer"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktn/provider-azurerm'

const mssqlDatabaseExtendedAuditingPolicyConfig: mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#database_id MssqlDatabaseExtendedAuditingPolicy#database_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.blobStorageEndpoint">blobStorageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#blob_storage_endpoint MssqlDatabaseExtendedAuditingPolicy#blob_storage_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#enabled MssqlDatabaseExtendedAuditingPolicy#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#id MssqlDatabaseExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.logMonitoringEnabled">logMonitoringEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#retention_in_days MssqlDatabaseExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">storageAccountAccessKeyIsSecondary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#database_id MssqlDatabaseExtendedAuditingPolicy#database_id}.

---

##### `blobStorageEndpoint`<sup>Optional</sup> <a name="blobStorageEndpoint" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.blobStorageEndpoint"></a>

```typescript
public readonly blobStorageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#blob_storage_endpoint MssqlDatabaseExtendedAuditingPolicy#blob_storage_endpoint}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#enabled MssqlDatabaseExtendedAuditingPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#id MssqlDatabaseExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logMonitoringEnabled`<sup>Optional</sup> <a name="logMonitoringEnabled" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```typescript
public readonly logMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#log_monitoring_enabled MssqlDatabaseExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#retention_in_days MssqlDatabaseExtendedAuditingPolicy#retention_in_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key}.

---

##### `storageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="storageAccountAccessKeyIsSecondary" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```typescript
public readonly storageAccountAccessKeyIsSecondary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#storage_account_access_key_is_secondary MssqlDatabaseExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlDatabaseExtendedAuditingPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#timeouts MssqlDatabaseExtendedAuditingPolicy#timeouts}

---

### MssqlDatabaseExtendedAuditingPolicyTimeouts <a name="MssqlDatabaseExtendedAuditingPolicyTimeouts" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.Initializer"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktn/provider-azurerm'

const mssqlDatabaseExtendedAuditingPolicyTimeouts: mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#create MssqlDatabaseExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#delete MssqlDatabaseExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#read MssqlDatabaseExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#update MssqlDatabaseExtendedAuditingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#create MssqlDatabaseExtendedAuditingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#delete MssqlDatabaseExtendedAuditingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#read MssqlDatabaseExtendedAuditingPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_database_extended_auditing_policy#update MssqlDatabaseExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference <a name="MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlDatabaseExtendedAuditingPolicy } from '@cdktn/provider-azurerm'

new mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlDatabaseExtendedAuditingPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.mssqlDatabaseExtendedAuditingPolicy.MssqlDatabaseExtendedAuditingPolicyTimeouts">MssqlDatabaseExtendedAuditingPolicyTimeouts</a>

---



