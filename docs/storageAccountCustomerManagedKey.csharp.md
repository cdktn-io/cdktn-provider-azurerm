# `storageAccountCustomerManagedKey` Submodule <a name="`storageAccountCustomerManagedKey` Submodule" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountCustomerManagedKeyA <a name="StorageAccountCustomerManagedKeyA" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key azurerm_storage_account_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountCustomerManagedKeyA(Construct Scope, string Id, StorageAccountCustomerManagedKeyAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig">StorageAccountCustomerManagedKeyAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig">StorageAccountCustomerManagedKeyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetFederatedIdentityClientId">ResetFederatedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultUri">ResetKeyVaultUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetManagedHsmKeyId">ResetManagedHsmKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageAccountCustomerManagedKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

---

##### `ResetFederatedIdentityClientId` <a name="ResetFederatedIdentityClientId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetFederatedIdentityClientId"></a>

```csharp
private void ResetFederatedIdentityClientId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultId"></a>

```csharp
private void ResetKeyVaultId()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetKeyVaultUri` <a name="ResetKeyVaultUri" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultUri"></a>

```csharp
private void ResetKeyVaultUri()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVersion"></a>

```csharp
private void ResetKeyVersion()
```

##### `ResetManagedHsmKeyId` <a name="ResetManagedHsmKeyId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetManagedHsmKeyId"></a>

```csharp
private void ResetManagedHsmKeyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageAccountCustomerManagedKeyA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountCustomerManagedKeyA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountCustomerManagedKeyA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountCustomerManagedKeyA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountCustomerManagedKeyA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageAccountCustomerManagedKeyA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccountCustomerManagedKeyA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccountCustomerManagedKeyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageAccountCustomerManagedKeyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference">StorageAccountCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientIdInput">FederatedIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultUriInput">KeyVaultUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVersionInput">KeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.managedHsmKeyIdInput">ManagedHsmKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientId">FederatedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultUri">KeyVaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVersion">KeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.managedHsmKeyId">ManagedHsmKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeouts"></a>

```csharp
public StorageAccountCustomerManagedKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference">StorageAccountCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `FederatedIdentityClientIdInput`<sup>Optional</sup> <a name="FederatedIdentityClientIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientIdInput"></a>

```csharp
public string FederatedIdentityClientIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultUriInput`<sup>Optional</sup> <a name="KeyVaultUriInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultUriInput"></a>

```csharp
public string KeyVaultUriInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVersionInput"></a>

```csharp
public string KeyVersionInput { get; }
```

- *Type:* string

---

##### `ManagedHsmKeyIdInput`<sup>Optional</sup> <a name="ManagedHsmKeyIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.managedHsmKeyIdInput"></a>

```csharp
public string ManagedHsmKeyIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageAccountCustomerManagedKeyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `FederatedIdentityClientId`<sup>Required</sup> <a name="FederatedIdentityClientId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientId"></a>

```csharp
public string FederatedIdentityClientId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `KeyVaultUri`<sup>Required</sup> <a name="KeyVaultUri" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultUri"></a>

```csharp
public string KeyVaultUri { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVersion"></a>

```csharp
public string KeyVersion { get; }
```

- *Type:* string

---

##### `ManagedHsmKeyId`<sup>Required</sup> <a name="ManagedHsmKeyId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.managedHsmKeyId"></a>

```csharp
public string ManagedHsmKeyId { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountCustomerManagedKeyAConfig <a name="StorageAccountCustomerManagedKeyAConfig" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountCustomerManagedKeyAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string StorageAccountId,
    string FederatedIdentityClientId = null,
    string Id = null,
    string KeyName = null,
    string KeyVaultId = null,
    string KeyVaultKeyId = null,
    string KeyVaultUri = null,
    string KeyVersion = null,
    string ManagedHsmKeyId = null,
    StorageAccountCustomerManagedKeyTimeouts Timeouts = null,
    string UserAssignedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#storage_account_id StorageAccountCustomerManagedKeyA#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.federatedIdentityClientId">FederatedIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#federated_identity_client_id StorageAccountCustomerManagedKeyA#federated_identity_client_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#id StorageAccountCustomerManagedKeyA#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_name StorageAccountCustomerManagedKeyA#key_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_vault_id StorageAccountCustomerManagedKeyA#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_vault_key_id StorageAccountCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultUri">KeyVaultUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_vault_uri StorageAccountCustomerManagedKeyA#key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVersion">KeyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_version StorageAccountCustomerManagedKeyA#key_version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.managedHsmKeyId">ManagedHsmKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#managed_hsm_key_id StorageAccountCustomerManagedKeyA#managed_hsm_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#user_assigned_identity_id StorageAccountCustomerManagedKeyA#user_assigned_identity_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#storage_account_id StorageAccountCustomerManagedKeyA#storage_account_id}.

---

##### `FederatedIdentityClientId`<sup>Optional</sup> <a name="FederatedIdentityClientId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.federatedIdentityClientId"></a>

```csharp
public string FederatedIdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#federated_identity_client_id StorageAccountCustomerManagedKeyA#federated_identity_client_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#id StorageAccountCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_name StorageAccountCustomerManagedKeyA#key_name}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_vault_id StorageAccountCustomerManagedKeyA#key_vault_id}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_vault_key_id StorageAccountCustomerManagedKeyA#key_vault_key_id}.

---

##### `KeyVaultUri`<sup>Optional</sup> <a name="KeyVaultUri" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultUri"></a>

```csharp
public string KeyVaultUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_vault_uri StorageAccountCustomerManagedKeyA#key_vault_uri}.

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVersion"></a>

```csharp
public string KeyVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#key_version StorageAccountCustomerManagedKeyA#key_version}.

---

##### `ManagedHsmKeyId`<sup>Optional</sup> <a name="ManagedHsmKeyId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.managedHsmKeyId"></a>

```csharp
public string ManagedHsmKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#managed_hsm_key_id StorageAccountCustomerManagedKeyA#managed_hsm_key_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.timeouts"></a>

```csharp
public StorageAccountCustomerManagedKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#timeouts StorageAccountCustomerManagedKeyA#timeouts}

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#user_assigned_identity_id StorageAccountCustomerManagedKeyA#user_assigned_identity_id}.

---

### StorageAccountCustomerManagedKeyTimeouts <a name="StorageAccountCustomerManagedKeyTimeouts" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountCustomerManagedKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#create StorageAccountCustomerManagedKeyA#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#delete StorageAccountCustomerManagedKeyA#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#read StorageAccountCustomerManagedKeyA#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#update StorageAccountCustomerManagedKeyA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#create StorageAccountCustomerManagedKeyA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#delete StorageAccountCustomerManagedKeyA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#read StorageAccountCustomerManagedKeyA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/storage_account_customer_managed_key#update StorageAccountCustomerManagedKeyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountCustomerManagedKeyTimeoutsOutputReference <a name="StorageAccountCustomerManagedKeyTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountCustomerManagedKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountCustomerManagedKeyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

---



