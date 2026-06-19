# `dataFactoryLinkedServiceAzureBlobStorage` Submodule <a name="`dataFactoryLinkedServiceAzureBlobStorage` Submodule" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureBlobStorage <a name="DataFactoryLinkedServiceAzureBlobStorage" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage azurerm_data_factory_linked_service_azure_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureBlobStorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig">DataFactoryLinkedServiceAzureBlobStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig">DataFactoryLinkedServiceAzureBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken">putKeyVaultSasToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putSasTokenLinkedKeyVaultKey">putSasTokenLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey">putServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionStringInsecure">resetConnectionStringInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetKeyVaultSasToken">resetKeyVaultSasToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetSasTokenLinkedKeyVaultKey">resetSasTokenLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetSasUri">resetSasUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServiceEndpoint">resetServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalKey">resetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalLinkedKeyVaultKey">resetServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetStorageKind">resetStorageKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetUseManagedIdentity">resetUseManagedIdentity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyVaultSasToken` <a name="putKeyVaultSasToken" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken"></a>

```typescript
public putKeyVaultSasToken(value: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

---

##### `putSasTokenLinkedKeyVaultKey` <a name="putSasTokenLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putSasTokenLinkedKeyVaultKey"></a>

```typescript
public putSasTokenLinkedKeyVaultKey(value: DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putSasTokenLinkedKeyVaultKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey</a>

---

##### `putServicePrincipalLinkedKeyVaultKey` <a name="putServicePrincipalLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey"></a>

```typescript
public putServicePrincipalLinkedKeyVaultKey(value: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryLinkedServiceAzureBlobStorageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetConnectionStringInsecure` <a name="resetConnectionStringInsecure" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionStringInsecure"></a>

```typescript
public resetConnectionStringInsecure(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetIntegrationRuntimeName"></a>

```typescript
public resetIntegrationRuntimeName(): void
```

##### `resetKeyVaultSasToken` <a name="resetKeyVaultSasToken" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetKeyVaultSasToken"></a>

```typescript
public resetKeyVaultSasToken(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSasTokenLinkedKeyVaultKey` <a name="resetSasTokenLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetSasTokenLinkedKeyVaultKey"></a>

```typescript
public resetSasTokenLinkedKeyVaultKey(): void
```

##### `resetSasUri` <a name="resetSasUri" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetSasUri"></a>

```typescript
public resetSasUri(): void
```

##### `resetServiceEndpoint` <a name="resetServiceEndpoint" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServiceEndpoint"></a>

```typescript
public resetServiceEndpoint(): void
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalId"></a>

```typescript
public resetServicePrincipalId(): void
```

##### `resetServicePrincipalKey` <a name="resetServicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalKey"></a>

```typescript
public resetServicePrincipalKey(): void
```

##### `resetServicePrincipalLinkedKeyVaultKey` <a name="resetServicePrincipalLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalLinkedKeyVaultKey"></a>

```typescript
public resetServicePrincipalLinkedKeyVaultKey(): void
```

##### `resetStorageKind` <a name="resetStorageKind" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetStorageKind"></a>

```typescript
public resetStorageKind(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseManagedIdentity` <a name="resetUseManagedIdentity" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetUseManagedIdentity"></a>

```typescript
public resetUseManagedIdentity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryLinkedServiceAzureBlobStorage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataFactoryLinkedServiceAzureBlobStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceAzureBlobStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceAzureBlobStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceAzureBlobStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasToken">keyVaultSasToken</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasTokenLinkedKeyVaultKey">sasTokenLinkedKeyVaultKey</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKey">servicePrincipalLinkedKeyVaultKey</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecureInput">connectionStringInsecureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasTokenInput">keyVaultSasTokenInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasTokenLinkedKeyVaultKeyInput">sasTokenLinkedKeyVaultKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUriInput">sasUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpointInput">serviceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKeyInput">servicePrincipalKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKeyInput">servicePrincipalLinkedKeyVaultKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKindInput">storageKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentityInput">useManagedIdentityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecure">connectionStringInsecure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUri">sasUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpoint">serviceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKind">storageKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentity">useManagedIdentity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyVaultSasToken`<sup>Required</sup> <a name="keyVaultSasToken" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasToken"></a>

```typescript
public readonly keyVaultSasToken: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference</a>

---

##### `sasTokenLinkedKeyVaultKey`<sup>Required</sup> <a name="sasTokenLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasTokenLinkedKeyVaultKey"></a>

```typescript
public readonly sasTokenLinkedKeyVaultKey: DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference</a>

---

##### `servicePrincipalLinkedKeyVaultKey`<sup>Required</sup> <a name="servicePrincipalLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKey"></a>

```typescript
public readonly servicePrincipalLinkedKeyVaultKey: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `connectionStringInsecureInput`<sup>Optional</sup> <a name="connectionStringInsecureInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecureInput"></a>

```typescript
public readonly connectionStringInsecureInput: string;
```

- *Type:* string

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeNameInput"></a>

```typescript
public readonly integrationRuntimeNameInput: string;
```

- *Type:* string

---

##### `keyVaultSasTokenInput`<sup>Optional</sup> <a name="keyVaultSasTokenInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasTokenInput"></a>

```typescript
public readonly keyVaultSasTokenInput: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sasTokenLinkedKeyVaultKeyInput`<sup>Optional</sup> <a name="sasTokenLinkedKeyVaultKeyInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasTokenLinkedKeyVaultKeyInput"></a>

```typescript
public readonly sasTokenLinkedKeyVaultKeyInput: DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey</a>

---

##### `sasUriInput`<sup>Optional</sup> <a name="sasUriInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUriInput"></a>

```typescript
public readonly sasUriInput: string;
```

- *Type:* string

---

##### `serviceEndpointInput`<sup>Optional</sup> <a name="serviceEndpointInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpointInput"></a>

```typescript
public readonly serviceEndpointInput: string;
```

- *Type:* string

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalKeyInput`<sup>Optional</sup> <a name="servicePrincipalKeyInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKeyInput"></a>

```typescript
public readonly servicePrincipalKeyInput: string;
```

- *Type:* string

---

##### `servicePrincipalLinkedKeyVaultKeyInput`<sup>Optional</sup> <a name="servicePrincipalLinkedKeyVaultKeyInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKeyInput"></a>

```typescript
public readonly servicePrincipalLinkedKeyVaultKeyInput: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

---

##### `storageKindInput`<sup>Optional</sup> <a name="storageKindInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKindInput"></a>

```typescript
public readonly storageKindInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryLinkedServiceAzureBlobStorageTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>

---

##### `useManagedIdentityInput`<sup>Optional</sup> <a name="useManagedIdentityInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentityInput"></a>

```typescript
public readonly useManagedIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `connectionStringInsecure`<sup>Required</sup> <a name="connectionStringInsecure" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecure"></a>

```typescript
public readonly connectionStringInsecure: string;
```

- *Type:* string

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sasUri`<sup>Required</sup> <a name="sasUri" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUri"></a>

```typescript
public readonly sasUri: string;
```

- *Type:* string

---

##### `serviceEndpoint`<sup>Required</sup> <a name="serviceEndpoint" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpoint"></a>

```typescript
public readonly serviceEndpoint: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `servicePrincipalKey`<sup>Required</sup> <a name="servicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKey"></a>

```typescript
public readonly servicePrincipalKey: string;
```

- *Type:* string

---

##### `storageKind`<sup>Required</sup> <a name="storageKind" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKind"></a>

```typescript
public readonly storageKind: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `useManagedIdentity`<sup>Required</sup> <a name="useManagedIdentity" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentity"></a>

```typescript
public readonly useManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureBlobStorageConfig <a name="DataFactoryLinkedServiceAzureBlobStorageConfig" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceAzureBlobStorageConfig: dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionStringInsecure">connectionStringInsecure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.keyVaultSasToken">keyVaultSasToken</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | key_vault_sas_token block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.sasTokenLinkedKeyVaultKey">sasTokenLinkedKeyVaultKey</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey</a></code> | sas_token_linked_key_vault_key block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.sasUri">sasUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.serviceEndpoint">serviceEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalLinkedKeyVaultKey">servicePrincipalLinkedKeyVaultKey</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | service_principal_linked_key_vault_key block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.storageKind">storageKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.useManagedIdentity">useManagedIdentity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}.

---

##### `connectionStringInsecure`<sup>Optional</sup> <a name="connectionStringInsecure" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionStringInsecure"></a>

```typescript
public readonly connectionStringInsecure: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}.

---

##### `keyVaultSasToken`<sup>Optional</sup> <a name="keyVaultSasToken" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.keyVaultSasToken"></a>

```typescript
public readonly keyVaultSasToken: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

key_vault_sas_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#key_vault_sas_token DataFactoryLinkedServiceAzureBlobStorage#key_vault_sas_token}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}.

---

##### `sasTokenLinkedKeyVaultKey`<sup>Optional</sup> <a name="sasTokenLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.sasTokenLinkedKeyVaultKey"></a>

```typescript
public readonly sasTokenLinkedKeyVaultKey: DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey</a>

sas_token_linked_key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_token_linked_key_vault_key DataFactoryLinkedServiceAzureBlobStorage#sas_token_linked_key_vault_key}

---

##### `sasUri`<sup>Optional</sup> <a name="sasUri" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.sasUri"></a>

```typescript
public readonly sasUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}.

---

##### `serviceEndpoint`<sup>Optional</sup> <a name="serviceEndpoint" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.serviceEndpoint"></a>

```typescript
public readonly serviceEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}.

---

##### `servicePrincipalKey`<sup>Optional</sup> <a name="servicePrincipalKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalKey"></a>

```typescript
public readonly servicePrincipalKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}.

---

##### `servicePrincipalLinkedKeyVaultKey`<sup>Optional</sup> <a name="servicePrincipalLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalLinkedKeyVaultKey"></a>

```typescript
public readonly servicePrincipalLinkedKeyVaultKey: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

service_principal_linked_key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_linked_key_vault_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_linked_key_vault_key}

---

##### `storageKind`<sup>Optional</sup> <a name="storageKind" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.storageKind"></a>

```typescript
public readonly storageKind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceAzureBlobStorageTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#timeouts DataFactoryLinkedServiceAzureBlobStorage#timeouts}

---

##### `useManagedIdentity`<sup>Optional</sup> <a name="useManagedIdentity" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.useManagedIdentity"></a>

```typescript
public readonly useManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}.

---

### DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken <a name="DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken: dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey <a name="DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey: dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey <a name="DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey: dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureBlobStorageTimeouts <a name="DataFactoryLinkedServiceAzureBlobStorageTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceAzureBlobStorageTimeouts: dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#create DataFactoryLinkedServiceAzureBlobStorage#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#delete DataFactoryLinkedServiceAzureBlobStorage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#read DataFactoryLinkedServiceAzureBlobStorage#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#update DataFactoryLinkedServiceAzureBlobStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#create DataFactoryLinkedServiceAzureBlobStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#delete DataFactoryLinkedServiceAzureBlobStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#read DataFactoryLinkedServiceAzureBlobStorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/data_factory_linked_service_azure_blob_storage#update DataFactoryLinkedServiceAzureBlobStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

---


### DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageSasTokenLinkedKeyVaultKey</a>

---


### DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

---


### DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureBlobStorage } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryLinkedServiceAzureBlobStorageTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>

---



