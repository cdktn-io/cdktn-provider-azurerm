# `mssqlManagedInstance` Submodule <a name="`mssqlManagedInstance` Submodule" id="@cdktn/provider-azurerm.mssqlManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstance <a name="MssqlManagedInstance" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance azurerm_mssql_managed_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

new mssqlManagedInstance.MssqlManagedInstance(scope: Construct, id: string, config: MssqlManagedInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig">MssqlManagedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig">MssqlManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putAzureActiveDirectoryAdministrator">putAzureActiveDirectoryAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAdministratorLogin">resetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAdministratorLoginPassword">resetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAzureActiveDirectoryAdministrator">resetAzureActiveDirectoryAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDatabaseFormat">resetDatabaseFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDnsZonePartnerId">resetDnsZonePartnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetGeneralPurposeV2Enabled">resetGeneralPurposeV2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetHybridSecondaryUsage">resetHybridSecondaryUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMaintenanceConfigurationName">resetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetProxyOverride">resetProxyOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetPublicDataEndpointEnabled">resetPublicDataEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetServicePrincipalType">resetServicePrincipalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetStorageIops">resetStorageIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetZoneRedundantEnabled">resetZoneRedundantEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureActiveDirectoryAdministrator` <a name="putAzureActiveDirectoryAdministrator" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putAzureActiveDirectoryAdministrator"></a>

```typescript
public putAzureActiveDirectoryAdministrator(value: MssqlManagedInstanceAzureActiveDirectoryAdministrator): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putAzureActiveDirectoryAdministrator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity"></a>

```typescript
public putIdentity(value: MssqlManagedInstanceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlManagedInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

---

##### `resetAdministratorLogin` <a name="resetAdministratorLogin" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAdministratorLogin"></a>

```typescript
public resetAdministratorLogin(): void
```

##### `resetAdministratorLoginPassword` <a name="resetAdministratorLoginPassword" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAdministratorLoginPassword"></a>

```typescript
public resetAdministratorLoginPassword(): void
```

##### `resetAzureActiveDirectoryAdministrator` <a name="resetAzureActiveDirectoryAdministrator" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetAzureActiveDirectoryAdministrator"></a>

```typescript
public resetAzureActiveDirectoryAdministrator(): void
```

##### `resetCollation` <a name="resetCollation" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetCollation"></a>

```typescript
public resetCollation(): void
```

##### `resetDatabaseFormat` <a name="resetDatabaseFormat" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDatabaseFormat"></a>

```typescript
public resetDatabaseFormat(): void
```

##### `resetDnsZonePartnerId` <a name="resetDnsZonePartnerId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetDnsZonePartnerId"></a>

```typescript
public resetDnsZonePartnerId(): void
```

##### `resetGeneralPurposeV2Enabled` <a name="resetGeneralPurposeV2Enabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetGeneralPurposeV2Enabled"></a>

```typescript
public resetGeneralPurposeV2Enabled(): void
```

##### `resetHybridSecondaryUsage` <a name="resetHybridSecondaryUsage" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetHybridSecondaryUsage"></a>

```typescript
public resetHybridSecondaryUsage(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetMaintenanceConfigurationName` <a name="resetMaintenanceConfigurationName" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMaintenanceConfigurationName"></a>

```typescript
public resetMaintenanceConfigurationName(): void
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetMinimumTlsVersion"></a>

```typescript
public resetMinimumTlsVersion(): void
```

##### `resetProxyOverride` <a name="resetProxyOverride" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetProxyOverride"></a>

```typescript
public resetProxyOverride(): void
```

##### `resetPublicDataEndpointEnabled` <a name="resetPublicDataEndpointEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetPublicDataEndpointEnabled"></a>

```typescript
public resetPublicDataEndpointEnabled(): void
```

##### `resetServicePrincipalType` <a name="resetServicePrincipalType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetServicePrincipalType"></a>

```typescript
public resetServicePrincipalType(): void
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetStorageAccountType"></a>

```typescript
public resetStorageAccountType(): void
```

##### `resetStorageIops` <a name="resetStorageIops" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetStorageIops"></a>

```typescript
public resetStorageIops(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetTimezoneId"></a>

```typescript
public resetTimezoneId(): void
```

##### `resetZoneRedundantEnabled` <a name="resetZoneRedundantEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.resetZoneRedundantEnabled"></a>

```typescript
public resetZoneRedundantEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MssqlManagedInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

mssqlManagedInstance.MssqlManagedInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

mssqlManagedInstance.MssqlManagedInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

mssqlManagedInstance.MssqlManagedInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MssqlManagedInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.azureActiveDirectoryAdministrator">azureActiveDirectoryAdministrator</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference">MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZone">dnsZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference">MssqlManagedInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference">MssqlManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginInput">administratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.azureActiveDirectoryAdministratorInput">azureActiveDirectoryAdministratorInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collationInput">collationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.databaseFormatInput">databaseFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerIdInput">dnsZonePartnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.generalPurposeV2EnabledInput">generalPurposeV2EnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.hybridSecondaryUsageInput">hybridSecondaryUsageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationNameInput">maintenanceConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverrideInput">proxyOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabledInput">publicDataEndpointEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalTypeInput">servicePrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageIopsInput">storageIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGbInput">storageSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcoresInput">vcoresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabledInput">zoneRedundantEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.databaseFormat">databaseFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.generalPurposeV2Enabled">generalPurposeV2Enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.hybridSecondaryUsage">hybridSecondaryUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverride">proxyOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalType">servicePrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageIops">storageIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGb">storageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcores">vcores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabled">zoneRedundantEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `azureActiveDirectoryAdministrator`<sup>Required</sup> <a name="azureActiveDirectoryAdministrator" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.azureActiveDirectoryAdministrator"></a>

```typescript
public readonly azureActiveDirectoryAdministrator: MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference">MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference</a>

---

##### `dnsZone`<sup>Required</sup> <a name="dnsZone" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZone"></a>

```typescript
public readonly dnsZone: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identity"></a>

```typescript
public readonly identity: MssqlManagedInstanceIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference">MssqlManagedInstanceIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlManagedInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference">MssqlManagedInstanceTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginInput"></a>

```typescript
public readonly administratorLoginInput: string;
```

- *Type:* string

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPasswordInput"></a>

```typescript
public readonly administratorLoginPasswordInput: string;
```

- *Type:* string

---

##### `azureActiveDirectoryAdministratorInput`<sup>Optional</sup> <a name="azureActiveDirectoryAdministratorInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.azureActiveDirectoryAdministratorInput"></a>

```typescript
public readonly azureActiveDirectoryAdministratorInput: MssqlManagedInstanceAzureActiveDirectoryAdministrator;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collationInput"></a>

```typescript
public readonly collationInput: string;
```

- *Type:* string

---

##### `databaseFormatInput`<sup>Optional</sup> <a name="databaseFormatInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.databaseFormatInput"></a>

```typescript
public readonly databaseFormatInput: string;
```

- *Type:* string

---

##### `dnsZonePartnerIdInput`<sup>Optional</sup> <a name="dnsZonePartnerIdInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerIdInput"></a>

```typescript
public readonly dnsZonePartnerIdInput: string;
```

- *Type:* string

---

##### `generalPurposeV2EnabledInput`<sup>Optional</sup> <a name="generalPurposeV2EnabledInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.generalPurposeV2EnabledInput"></a>

```typescript
public readonly generalPurposeV2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hybridSecondaryUsageInput`<sup>Optional</sup> <a name="hybridSecondaryUsageInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.hybridSecondaryUsageInput"></a>

```typescript
public readonly hybridSecondaryUsageInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.identityInput"></a>

```typescript
public readonly identityInput: MssqlManagedInstanceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceConfigurationNameInput`<sup>Optional</sup> <a name="maintenanceConfigurationNameInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationNameInput"></a>

```typescript
public readonly maintenanceConfigurationNameInput: string;
```

- *Type:* string

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersionInput"></a>

```typescript
public readonly minimumTlsVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `proxyOverrideInput`<sup>Optional</sup> <a name="proxyOverrideInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverrideInput"></a>

```typescript
public readonly proxyOverrideInput: string;
```

- *Type:* string

---

##### `publicDataEndpointEnabledInput`<sup>Optional</sup> <a name="publicDataEndpointEnabledInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabledInput"></a>

```typescript
public readonly publicDataEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `servicePrincipalTypeInput`<sup>Optional</sup> <a name="servicePrincipalTypeInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalTypeInput"></a>

```typescript
public readonly servicePrincipalTypeInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `storageIopsInput`<sup>Optional</sup> <a name="storageIopsInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageIopsInput"></a>

```typescript
public readonly storageIopsInput: number;
```

- *Type:* number

---

##### `storageSizeInGbInput`<sup>Optional</sup> <a name="storageSizeInGbInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGbInput"></a>

```typescript
public readonly storageSizeInGbInput: number;
```

- *Type:* number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlManagedInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `vcoresInput`<sup>Optional</sup> <a name="vcoresInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcoresInput"></a>

```typescript
public readonly vcoresInput: number;
```

- *Type:* number

---

##### `zoneRedundantEnabledInput`<sup>Optional</sup> <a name="zoneRedundantEnabledInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabledInput"></a>

```typescript
public readonly zoneRedundantEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `databaseFormat`<sup>Required</sup> <a name="databaseFormat" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.databaseFormat"></a>

```typescript
public readonly databaseFormat: string;
```

- *Type:* string

---

##### `dnsZonePartnerId`<sup>Required</sup> <a name="dnsZonePartnerId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.dnsZonePartnerId"></a>

```typescript
public readonly dnsZonePartnerId: string;
```

- *Type:* string

---

##### `generalPurposeV2Enabled`<sup>Required</sup> <a name="generalPurposeV2Enabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.generalPurposeV2Enabled"></a>

```typescript
public readonly generalPurposeV2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hybridSecondaryUsage`<sup>Required</sup> <a name="hybridSecondaryUsage" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.hybridSecondaryUsage"></a>

```typescript
public readonly hybridSecondaryUsage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maintenanceConfigurationName`<sup>Required</sup> <a name="maintenanceConfigurationName" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.maintenanceConfigurationName"></a>

```typescript
public readonly maintenanceConfigurationName: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `proxyOverride`<sup>Required</sup> <a name="proxyOverride" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.proxyOverride"></a>

```typescript
public readonly proxyOverride: string;
```

- *Type:* string

---

##### `publicDataEndpointEnabled`<sup>Required</sup> <a name="publicDataEndpointEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.publicDataEndpointEnabled"></a>

```typescript
public readonly publicDataEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `servicePrincipalType`<sup>Required</sup> <a name="servicePrincipalType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.servicePrincipalType"></a>

```typescript
public readonly servicePrincipalType: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `storageIops`<sup>Required</sup> <a name="storageIops" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageIops"></a>

```typescript
public readonly storageIops: number;
```

- *Type:* number

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.storageSizeInGb"></a>

```typescript
public readonly storageSizeInGb: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.vcores"></a>

```typescript
public readonly vcores: number;
```

- *Type:* number

---

##### `zoneRedundantEnabled`<sup>Required</sup> <a name="zoneRedundantEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.zoneRedundantEnabled"></a>

```typescript
public readonly zoneRedundantEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceAzureActiveDirectoryAdministrator <a name="MssqlManagedInstanceAzureActiveDirectoryAdministrator" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.Initializer"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

const mssqlManagedInstanceAzureActiveDirectoryAdministrator: mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.loginUsername">loginUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#login_username MssqlManagedInstance#login_username}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#object_id MssqlManagedInstance#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#principal_type MssqlManagedInstance#principal_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.azureadAuthenticationOnlyEnabled">azureadAuthenticationOnlyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#azuread_authentication_only_enabled MssqlManagedInstance#azuread_authentication_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#tenant_id MssqlManagedInstance#tenant_id}. |

---

##### `loginUsername`<sup>Required</sup> <a name="loginUsername" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.loginUsername"></a>

```typescript
public readonly loginUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#login_username MssqlManagedInstance#login_username}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#object_id MssqlManagedInstance#object_id}.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#principal_type MssqlManagedInstance#principal_type}.

---

##### `azureadAuthenticationOnlyEnabled`<sup>Optional</sup> <a name="azureadAuthenticationOnlyEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.azureadAuthenticationOnlyEnabled"></a>

```typescript
public readonly azureadAuthenticationOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#azuread_authentication_only_enabled MssqlManagedInstance#azuread_authentication_only_enabled}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#tenant_id MssqlManagedInstance#tenant_id}.

---

### MssqlManagedInstanceConfig <a name="MssqlManagedInstanceConfig" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.Initializer"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

const mssqlManagedInstanceConfig: mssqlManagedInstance.MssqlManagedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#license_type MssqlManagedInstance#license_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#location MssqlManagedInstance#location}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#name MssqlManagedInstance#name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#resource_group_name MssqlManagedInstance#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#sku_name MssqlManagedInstance#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageSizeInGb">storageSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#storage_size_in_gb MssqlManagedInstance#storage_size_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#subnet_id MssqlManagedInstance#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.vcores">vcores</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#vcores MssqlManagedInstance#vcores}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#administrator_login MssqlManagedInstance#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#administrator_login_password MssqlManagedInstance#administrator_login_password}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.azureActiveDirectoryAdministrator">azureActiveDirectoryAdministrator</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a></code> | azure_active_directory_administrator block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.collation">collation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#collation MssqlManagedInstance#collation}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.databaseFormat">databaseFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#database_format MssqlManagedInstance#database_format}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dnsZonePartnerId">dnsZonePartnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#dns_zone_partner_id MssqlManagedInstance#dns_zone_partner_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.generalPurposeV2Enabled">generalPurposeV2Enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#general_purpose_v2_enabled MssqlManagedInstance#general_purpose_v2_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.hybridSecondaryUsage">hybridSecondaryUsage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#hybrid_secondary_usage MssqlManagedInstance#hybrid_secondary_usage}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#id MssqlManagedInstance#id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#maintenance_configuration_name MssqlManagedInstance#maintenance_configuration_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#minimum_tls_version MssqlManagedInstance#minimum_tls_version}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.proxyOverride">proxyOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#proxy_override MssqlManagedInstance#proxy_override}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.publicDataEndpointEnabled">publicDataEndpointEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#public_data_endpoint_enabled MssqlManagedInstance#public_data_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.servicePrincipalType">servicePrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#service_principal_type MssqlManagedInstance#service_principal_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#storage_account_type MssqlManagedInstance#storage_account_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageIops">storageIops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#storage_iops MssqlManagedInstance#storage_iops}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#tags MssqlManagedInstance#tags}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#timezone_id MssqlManagedInstance#timezone_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.zoneRedundantEnabled">zoneRedundantEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#zone_redundant_enabled MssqlManagedInstance#zone_redundant_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#license_type MssqlManagedInstance#license_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#location MssqlManagedInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#name MssqlManagedInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#resource_group_name MssqlManagedInstance#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#sku_name MssqlManagedInstance#sku_name}.

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageSizeInGb"></a>

```typescript
public readonly storageSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#storage_size_in_gb MssqlManagedInstance#storage_size_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#subnet_id MssqlManagedInstance#subnet_id}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.vcores"></a>

```typescript
public readonly vcores: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#vcores MssqlManagedInstance#vcores}.

---

##### `administratorLogin`<sup>Optional</sup> <a name="administratorLogin" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#administrator_login MssqlManagedInstance#administrator_login}.

---

##### `administratorLoginPassword`<sup>Optional</sup> <a name="administratorLoginPassword" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#administrator_login_password MssqlManagedInstance#administrator_login_password}.

---

##### `azureActiveDirectoryAdministrator`<sup>Optional</sup> <a name="azureActiveDirectoryAdministrator" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.azureActiveDirectoryAdministrator"></a>

```typescript
public readonly azureActiveDirectoryAdministrator: MssqlManagedInstanceAzureActiveDirectoryAdministrator;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

azure_active_directory_administrator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#azure_active_directory_administrator MssqlManagedInstance#azure_active_directory_administrator}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#collation MssqlManagedInstance#collation}.

---

##### `databaseFormat`<sup>Optional</sup> <a name="databaseFormat" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.databaseFormat"></a>

```typescript
public readonly databaseFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#database_format MssqlManagedInstance#database_format}.

---

##### `dnsZonePartnerId`<sup>Optional</sup> <a name="dnsZonePartnerId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.dnsZonePartnerId"></a>

```typescript
public readonly dnsZonePartnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#dns_zone_partner_id MssqlManagedInstance#dns_zone_partner_id}.

---

##### `generalPurposeV2Enabled`<sup>Optional</sup> <a name="generalPurposeV2Enabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.generalPurposeV2Enabled"></a>

```typescript
public readonly generalPurposeV2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#general_purpose_v2_enabled MssqlManagedInstance#general_purpose_v2_enabled}.

---

##### `hybridSecondaryUsage`<sup>Optional</sup> <a name="hybridSecondaryUsage" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.hybridSecondaryUsage"></a>

```typescript
public readonly hybridSecondaryUsage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#hybrid_secondary_usage MssqlManagedInstance#hybrid_secondary_usage}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#id MssqlManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.identity"></a>

```typescript
public readonly identity: MssqlManagedInstanceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#identity MssqlManagedInstance#identity}

---

##### `maintenanceConfigurationName`<sup>Optional</sup> <a name="maintenanceConfigurationName" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.maintenanceConfigurationName"></a>

```typescript
public readonly maintenanceConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#maintenance_configuration_name MssqlManagedInstance#maintenance_configuration_name}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#minimum_tls_version MssqlManagedInstance#minimum_tls_version}.

---

##### `proxyOverride`<sup>Optional</sup> <a name="proxyOverride" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.proxyOverride"></a>

```typescript
public readonly proxyOverride: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#proxy_override MssqlManagedInstance#proxy_override}.

---

##### `publicDataEndpointEnabled`<sup>Optional</sup> <a name="publicDataEndpointEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.publicDataEndpointEnabled"></a>

```typescript
public readonly publicDataEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#public_data_endpoint_enabled MssqlManagedInstance#public_data_endpoint_enabled}.

---

##### `servicePrincipalType`<sup>Optional</sup> <a name="servicePrincipalType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.servicePrincipalType"></a>

```typescript
public readonly servicePrincipalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#service_principal_type MssqlManagedInstance#service_principal_type}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#storage_account_type MssqlManagedInstance#storage_account_type}.

---

##### `storageIops`<sup>Optional</sup> <a name="storageIops" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.storageIops"></a>

```typescript
public readonly storageIops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#storage_iops MssqlManagedInstance#storage_iops}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#tags MssqlManagedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlManagedInstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#timeouts MssqlManagedInstance#timeouts}

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#timezone_id MssqlManagedInstance#timezone_id}.

---

##### `zoneRedundantEnabled`<sup>Optional</sup> <a name="zoneRedundantEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceConfig.property.zoneRedundantEnabled"></a>

```typescript
public readonly zoneRedundantEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#zone_redundant_enabled MssqlManagedInstance#zone_redundant_enabled}.

---

### MssqlManagedInstanceIdentity <a name="MssqlManagedInstanceIdentity" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.Initializer"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

const mssqlManagedInstanceIdentity: mssqlManagedInstance.MssqlManagedInstanceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#type MssqlManagedInstance#type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#identity_ids MssqlManagedInstance#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#type MssqlManagedInstance#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#identity_ids MssqlManagedInstance#identity_ids}.

---

### MssqlManagedInstanceTimeouts <a name="MssqlManagedInstanceTimeouts" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.Initializer"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

const mssqlManagedInstanceTimeouts: mssqlManagedInstance.MssqlManagedInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#create MssqlManagedInstance#create}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#delete MssqlManagedInstance#delete}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#read MssqlManagedInstance#read}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#update MssqlManagedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#create MssqlManagedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#delete MssqlManagedInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#read MssqlManagedInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/mssql_managed_instance#update MssqlManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference <a name="MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

new mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resetAzureadAuthenticationOnlyEnabled">resetAzureadAuthenticationOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureadAuthenticationOnlyEnabled` <a name="resetAzureadAuthenticationOnlyEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resetAzureadAuthenticationOnlyEnabled"></a>

```typescript
public resetAzureadAuthenticationOnlyEnabled(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.azureadAuthenticationOnlyEnabledInput">azureadAuthenticationOnlyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.loginUsernameInput">loginUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.azureadAuthenticationOnlyEnabled">azureadAuthenticationOnlyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.loginUsername">loginUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureadAuthenticationOnlyEnabledInput`<sup>Optional</sup> <a name="azureadAuthenticationOnlyEnabledInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.azureadAuthenticationOnlyEnabledInput"></a>

```typescript
public readonly azureadAuthenticationOnlyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loginUsernameInput`<sup>Optional</sup> <a name="loginUsernameInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.loginUsernameInput"></a>

```typescript
public readonly loginUsernameInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `azureadAuthenticationOnlyEnabled`<sup>Required</sup> <a name="azureadAuthenticationOnlyEnabled" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.azureadAuthenticationOnlyEnabled"></a>

```typescript
public readonly azureadAuthenticationOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loginUsername`<sup>Required</sup> <a name="loginUsername" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.loginUsername"></a>

```typescript
public readonly loginUsername: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlManagedInstanceAzureActiveDirectoryAdministrator;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceAzureActiveDirectoryAdministrator">MssqlManagedInstanceAzureActiveDirectoryAdministrator</a>

---


### MssqlManagedInstanceIdentityOutputReference <a name="MssqlManagedInstanceIdentityOutputReference" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

new mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlManagedInstanceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceIdentity">MssqlManagedInstanceIdentity</a>

---


### MssqlManagedInstanceTimeoutsOutputReference <a name="MssqlManagedInstanceTimeoutsOutputReference" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlManagedInstance } from '@cdktn/provider-azurerm'

new mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlManagedInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.mssqlManagedInstance.MssqlManagedInstanceTimeouts">MssqlManagedInstanceTimeouts</a>

---



