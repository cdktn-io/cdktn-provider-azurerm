# `synapseWorkspace` Submodule <a name="`synapseWorkspace` Submodule" id="@cdktn/provider-azurerm.synapseWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspace <a name="SynapseWorkspace" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace azurerm_synapse_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspace(Construct Scope, string Id, SynapseWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig">SynapseWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig">SynapseWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo">PutAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey">PutCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo">PutGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureadAuthenticationOnly">ResetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureDevopsRepo">ResetAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetComputeSubnetId">ResetComputeSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetDataExfiltrationProtectionEnabled">ResetDataExfiltrationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetGithubRepo">ResetGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetLinkingAllowedForAadTenantIds">ResetLinkingAllowedForAadTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedVirtualNetworkEnabled">ResetManagedVirtualNetworkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPurviewId">ResetPurviewId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLogin">ResetSqlAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLoginPassword">ResetSqlAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlIdentityControlEnabled">ResetSqlIdentityControlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureDevopsRepo` <a name="PutAzureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo"></a>

```csharp
private void PutAzureDevopsRepo(SynapseWorkspaceAzureDevopsRepo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putAzureDevopsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey"></a>

```csharp
private void PutCustomerManagedKey(SynapseWorkspaceCustomerManagedKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---

##### `PutGithubRepo` <a name="PutGithubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo"></a>

```csharp
private void PutGithubRepo(SynapseWorkspaceGithubRepo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putGithubRepo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity"></a>

```csharp
private void PutIdentity(SynapseWorkspaceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts"></a>

```csharp
private void PutTimeouts(SynapseWorkspaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

---

##### `ResetAzureadAuthenticationOnly` <a name="ResetAzureadAuthenticationOnly" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureadAuthenticationOnly"></a>

```csharp
private void ResetAzureadAuthenticationOnly()
```

##### `ResetAzureDevopsRepo` <a name="ResetAzureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetAzureDevopsRepo"></a>

```csharp
private void ResetAzureDevopsRepo()
```

##### `ResetComputeSubnetId` <a name="ResetComputeSubnetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetComputeSubnetId"></a>

```csharp
private void ResetComputeSubnetId()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetDataExfiltrationProtectionEnabled` <a name="ResetDataExfiltrationProtectionEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetDataExfiltrationProtectionEnabled"></a>

```csharp
private void ResetDataExfiltrationProtectionEnabled()
```

##### `ResetGithubRepo` <a name="ResetGithubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetGithubRepo"></a>

```csharp
private void ResetGithubRepo()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLinkingAllowedForAadTenantIds` <a name="ResetLinkingAllowedForAadTenantIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetLinkingAllowedForAadTenantIds"></a>

```csharp
private void ResetLinkingAllowedForAadTenantIds()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedResourceGroupName"></a>

```csharp
private void ResetManagedResourceGroupName()
```

##### `ResetManagedVirtualNetworkEnabled` <a name="ResetManagedVirtualNetworkEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetManagedVirtualNetworkEnabled"></a>

```csharp
private void ResetManagedVirtualNetworkEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetPurviewId` <a name="ResetPurviewId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetPurviewId"></a>

```csharp
private void ResetPurviewId()
```

##### `ResetSqlAdministratorLogin` <a name="ResetSqlAdministratorLogin" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLogin"></a>

```csharp
private void ResetSqlAdministratorLogin()
```

##### `ResetSqlAdministratorLoginPassword` <a name="ResetSqlAdministratorLoginPassword" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlAdministratorLoginPassword"></a>

```csharp
private void ResetSqlAdministratorLoginPassword()
```

##### `ResetSqlIdentityControlEnabled` <a name="ResetSqlIdentityControlEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetSqlIdentityControlEnabled"></a>

```csharp
private void ResetSqlIdentityControlEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SynapseWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SynapseWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SynapseWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SynapseWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SynapseWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SynapseWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SynapseWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepo">AzureDevopsRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference">SynapseWorkspaceAzureDevopsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connectivityEndpoints">ConnectivityEndpoints</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference">SynapseWorkspaceCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepo">GithubRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference">SynapseWorkspaceGithubRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference">SynapseWorkspaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference">SynapseWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnlyInput">AzureadAuthenticationOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepoInput">AzureDevopsRepoInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetIdInput">ComputeSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabledInput">DataExfiltrationProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepoInput">GithubRepoInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIdsInput">LinkingAllowedForAadTenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabledInput">ManagedVirtualNetworkEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewIdInput">PurviewIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginInput">SqlAdministratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPasswordInput">SqlAdministratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabledInput">SqlIdentityControlEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemIdInput">StorageDataLakeGen2FilesystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetId">ComputeSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabled">DataExfiltrationProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIds">LinkingAllowedForAadTenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabled">ManagedVirtualNetworkEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewId">PurviewId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLogin">SqlAdministratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPassword">SqlAdministratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabled">SqlIdentityControlEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemId">StorageDataLakeGen2FilesystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AzureDevopsRepo`<sup>Required</sup> <a name="AzureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepo"></a>

```csharp
public SynapseWorkspaceAzureDevopsRepoOutputReference AzureDevopsRepo { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference">SynapseWorkspaceAzureDevopsRepoOutputReference</a>

---

##### `ConnectivityEndpoints`<sup>Required</sup> <a name="ConnectivityEndpoints" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.connectivityEndpoints"></a>

```csharp
public StringMap ConnectivityEndpoints { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKey"></a>

```csharp
public SynapseWorkspaceCustomerManagedKeyOutputReference CustomerManagedKey { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference">SynapseWorkspaceCustomerManagedKeyOutputReference</a>

---

##### `GithubRepo`<sup>Required</sup> <a name="GithubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepo"></a>

```csharp
public SynapseWorkspaceGithubRepoOutputReference GithubRepo { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference">SynapseWorkspaceGithubRepoOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identity"></a>

```csharp
public SynapseWorkspaceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference">SynapseWorkspaceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeouts"></a>

```csharp
public SynapseWorkspaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference">SynapseWorkspaceTimeoutsOutputReference</a>

---

##### `AzureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="AzureadAuthenticationOnlyInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnlyInput"></a>

```csharp
public bool|IResolvable AzureadAuthenticationOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AzureDevopsRepoInput`<sup>Optional</sup> <a name="AzureDevopsRepoInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureDevopsRepoInput"></a>

```csharp
public SynapseWorkspaceAzureDevopsRepo AzureDevopsRepoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---

##### `ComputeSubnetIdInput`<sup>Optional</sup> <a name="ComputeSubnetIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetIdInput"></a>

```csharp
public string ComputeSubnetIdInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.customerManagedKeyInput"></a>

```csharp
public SynapseWorkspaceCustomerManagedKey CustomerManagedKeyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---

##### `DataExfiltrationProtectionEnabledInput`<sup>Optional</sup> <a name="DataExfiltrationProtectionEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DataExfiltrationProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GithubRepoInput`<sup>Optional</sup> <a name="GithubRepoInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.githubRepoInput"></a>

```csharp
public SynapseWorkspaceGithubRepo GithubRepoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.identityInput"></a>

```csharp
public SynapseWorkspaceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkingAllowedForAadTenantIdsInput`<sup>Optional</sup> <a name="LinkingAllowedForAadTenantIdsInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIdsInput"></a>

```csharp
public string[] LinkingAllowedForAadTenantIdsInput { get; }
```

- *Type:* string[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupNameInput"></a>

```csharp
public string ManagedResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ManagedVirtualNetworkEnabledInput`<sup>Optional</sup> <a name="ManagedVirtualNetworkEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabledInput"></a>

```csharp
public bool|IResolvable ManagedVirtualNetworkEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PurviewIdInput`<sup>Optional</sup> <a name="PurviewIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewIdInput"></a>

```csharp
public string PurviewIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SqlAdministratorLoginInput`<sup>Optional</sup> <a name="SqlAdministratorLoginInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginInput"></a>

```csharp
public string SqlAdministratorLoginInput { get; }
```

- *Type:* string

---

##### `SqlAdministratorLoginPasswordInput`<sup>Optional</sup> <a name="SqlAdministratorLoginPasswordInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPasswordInput"></a>

```csharp
public string SqlAdministratorLoginPasswordInput { get; }
```

- *Type:* string

---

##### `SqlIdentityControlEnabledInput`<sup>Optional</sup> <a name="SqlIdentityControlEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabledInput"></a>

```csharp
public bool|IResolvable SqlIdentityControlEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageDataLakeGen2FilesystemIdInput`<sup>Optional</sup> <a name="StorageDataLakeGen2FilesystemIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemIdInput"></a>

```csharp
public string StorageDataLakeGen2FilesystemIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.timeoutsInput"></a>

```csharp
public IResolvable|SynapseWorkspaceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

---

##### `AzureadAuthenticationOnly`<sup>Required</sup> <a name="AzureadAuthenticationOnly" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.azureadAuthenticationOnly"></a>

```csharp
public bool|IResolvable AzureadAuthenticationOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ComputeSubnetId`<sup>Required</sup> <a name="ComputeSubnetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.computeSubnetId"></a>

```csharp
public string ComputeSubnetId { get; }
```

- *Type:* string

---

##### `DataExfiltrationProtectionEnabled`<sup>Required</sup> <a name="DataExfiltrationProtectionEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.dataExfiltrationProtectionEnabled"></a>

```csharp
public bool|IResolvable DataExfiltrationProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkingAllowedForAadTenantIds`<sup>Required</sup> <a name="LinkingAllowedForAadTenantIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.linkingAllowedForAadTenantIds"></a>

```csharp
public string[] LinkingAllowedForAadTenantIds { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; }
```

- *Type:* string

---

##### `ManagedVirtualNetworkEnabled`<sup>Required</sup> <a name="ManagedVirtualNetworkEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.managedVirtualNetworkEnabled"></a>

```csharp
public bool|IResolvable ManagedVirtualNetworkEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PurviewId`<sup>Required</sup> <a name="PurviewId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.purviewId"></a>

```csharp
public string PurviewId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SqlAdministratorLogin`<sup>Required</sup> <a name="SqlAdministratorLogin" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLogin"></a>

```csharp
public string SqlAdministratorLogin { get; }
```

- *Type:* string

---

##### `SqlAdministratorLoginPassword`<sup>Required</sup> <a name="SqlAdministratorLoginPassword" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlAdministratorLoginPassword"></a>

```csharp
public string SqlAdministratorLoginPassword { get; }
```

- *Type:* string

---

##### `SqlIdentityControlEnabled`<sup>Required</sup> <a name="SqlIdentityControlEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.sqlIdentityControlEnabled"></a>

```csharp
public bool|IResolvable SqlIdentityControlEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageDataLakeGen2FilesystemId`<sup>Required</sup> <a name="StorageDataLakeGen2FilesystemId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.storageDataLakeGen2FilesystemId"></a>

```csharp
public string StorageDataLakeGen2FilesystemId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceAzureDevopsRepo <a name="SynapseWorkspaceAzureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceAzureDevopsRepo {
    string AccountName,
    string BranchName,
    string ProjectName,
    string RepositoryName,
    string RootFolder,
    string LastCommitId = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.branchName">BranchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.projectName">ProjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#project_name SynapseWorkspace#project_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.rootFolder">RootFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.lastCommitId">LastCommitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#tenant_id SynapseWorkspace#tenant_id}. |

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}.

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.branchName"></a>

```csharp
public string BranchName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}.

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#project_name SynapseWorkspace#project_name}.

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}.

---

##### `RootFolder`<sup>Required</sup> <a name="RootFolder" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.rootFolder"></a>

```csharp
public string RootFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}.

---

##### `LastCommitId`<sup>Optional</sup> <a name="LastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.lastCommitId"></a>

```csharp
public string LastCommitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#tenant_id SynapseWorkspace#tenant_id}.

---

### SynapseWorkspaceConfig <a name="SynapseWorkspaceConfig" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string StorageDataLakeGen2FilesystemId,
    bool|IResolvable AzureadAuthenticationOnly = null,
    SynapseWorkspaceAzureDevopsRepo AzureDevopsRepo = null,
    string ComputeSubnetId = null,
    SynapseWorkspaceCustomerManagedKey CustomerManagedKey = null,
    bool|IResolvable DataExfiltrationProtectionEnabled = null,
    SynapseWorkspaceGithubRepo GithubRepo = null,
    string Id = null,
    SynapseWorkspaceIdentity Identity = null,
    string[] LinkingAllowedForAadTenantIds = null,
    string ManagedResourceGroupName = null,
    bool|IResolvable ManagedVirtualNetworkEnabled = null,
    bool|IResolvable PublicNetworkAccessEnabled = null,
    string PurviewId = null,
    string SqlAdministratorLogin = null,
    string SqlAdministratorLoginPassword = null,
    bool|IResolvable SqlIdentityControlEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SynapseWorkspaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#location SynapseWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#name SynapseWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.storageDataLakeGen2FilesystemId">StorageDataLakeGen2FilesystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureDevopsRepo">AzureDevopsRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | azure_devops_repo block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.computeSubnetId">ComputeSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dataExfiltrationProtectionEnabled">DataExfiltrationProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.githubRepo">GithubRepo</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | github_repo block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#id SynapseWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.linkingAllowedForAadTenantIds">LinkingAllowedForAadTenantIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedVirtualNetworkEnabled">ManagedVirtualNetworkEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.purviewId">PurviewId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLogin">SqlAdministratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLoginPassword">SqlAdministratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlIdentityControlEnabled">SqlIdentityControlEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#location SynapseWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#name SynapseWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#resource_group_name SynapseWorkspace#resource_group_name}.

---

##### `StorageDataLakeGen2FilesystemId`<sup>Required</sup> <a name="StorageDataLakeGen2FilesystemId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.storageDataLakeGen2FilesystemId"></a>

```csharp
public string StorageDataLakeGen2FilesystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#storage_data_lake_gen2_filesystem_id SynapseWorkspace#storage_data_lake_gen2_filesystem_id}.

---

##### `AzureadAuthenticationOnly`<sup>Optional</sup> <a name="AzureadAuthenticationOnly" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureadAuthenticationOnly"></a>

```csharp
public bool|IResolvable AzureadAuthenticationOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#azuread_authentication_only SynapseWorkspace#azuread_authentication_only}.

---

##### `AzureDevopsRepo`<sup>Optional</sup> <a name="AzureDevopsRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.azureDevopsRepo"></a>

```csharp
public SynapseWorkspaceAzureDevopsRepo AzureDevopsRepo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

azure_devops_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#azure_devops_repo SynapseWorkspace#azure_devops_repo}

---

##### `ComputeSubnetId`<sup>Optional</sup> <a name="ComputeSubnetId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.computeSubnetId"></a>

```csharp
public string ComputeSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#compute_subnet_id SynapseWorkspace#compute_subnet_id}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.customerManagedKey"></a>

```csharp
public SynapseWorkspaceCustomerManagedKey CustomerManagedKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#customer_managed_key SynapseWorkspace#customer_managed_key}

---

##### `DataExfiltrationProtectionEnabled`<sup>Optional</sup> <a name="DataExfiltrationProtectionEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.dataExfiltrationProtectionEnabled"></a>

```csharp
public bool|IResolvable DataExfiltrationProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#data_exfiltration_protection_enabled SynapseWorkspace#data_exfiltration_protection_enabled}.

---

##### `GithubRepo`<sup>Optional</sup> <a name="GithubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.githubRepo"></a>

```csharp
public SynapseWorkspaceGithubRepo GithubRepo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

github_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#github_repo SynapseWorkspace#github_repo}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#id SynapseWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.identity"></a>

```csharp
public SynapseWorkspaceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#identity SynapseWorkspace#identity}

---

##### `LinkingAllowedForAadTenantIds`<sup>Optional</sup> <a name="LinkingAllowedForAadTenantIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.linkingAllowedForAadTenantIds"></a>

```csharp
public string[] LinkingAllowedForAadTenantIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#linking_allowed_for_aad_tenant_ids SynapseWorkspace#linking_allowed_for_aad_tenant_ids}.

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#managed_resource_group_name SynapseWorkspace#managed_resource_group_name}.

---

##### `ManagedVirtualNetworkEnabled`<sup>Optional</sup> <a name="ManagedVirtualNetworkEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.managedVirtualNetworkEnabled"></a>

```csharp
public bool|IResolvable ManagedVirtualNetworkEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#managed_virtual_network_enabled SynapseWorkspace#managed_virtual_network_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#public_network_access_enabled SynapseWorkspace#public_network_access_enabled}.

---

##### `PurviewId`<sup>Optional</sup> <a name="PurviewId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.purviewId"></a>

```csharp
public string PurviewId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#purview_id SynapseWorkspace#purview_id}.

---

##### `SqlAdministratorLogin`<sup>Optional</sup> <a name="SqlAdministratorLogin" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLogin"></a>

```csharp
public string SqlAdministratorLogin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#sql_administrator_login SynapseWorkspace#sql_administrator_login}.

---

##### `SqlAdministratorLoginPassword`<sup>Optional</sup> <a name="SqlAdministratorLoginPassword" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlAdministratorLoginPassword"></a>

```csharp
public string SqlAdministratorLoginPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#sql_administrator_login_password SynapseWorkspace#sql_administrator_login_password}.

---

##### `SqlIdentityControlEnabled`<sup>Optional</sup> <a name="SqlIdentityControlEnabled" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.sqlIdentityControlEnabled"></a>

```csharp
public bool|IResolvable SqlIdentityControlEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#sql_identity_control_enabled SynapseWorkspace#sql_identity_control_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#tags SynapseWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceConfig.property.timeouts"></a>

```csharp
public SynapseWorkspaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#timeouts SynapseWorkspace#timeouts}

---

### SynapseWorkspaceCustomerManagedKey <a name="SynapseWorkspaceCustomerManagedKey" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceCustomerManagedKey {
    string KeyVersionlessId,
    string KeyName = null,
    string UserAssignedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyVersionlessId">KeyVersionlessId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#key_versionless_id SynapseWorkspace#key_versionless_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#key_name SynapseWorkspace#key_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#user_assigned_identity_id SynapseWorkspace#user_assigned_identity_id}. |

---

##### `KeyVersionlessId`<sup>Required</sup> <a name="KeyVersionlessId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyVersionlessId"></a>

```csharp
public string KeyVersionlessId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#key_versionless_id SynapseWorkspace#key_versionless_id}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#key_name SynapseWorkspace#key_name}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#user_assigned_identity_id SynapseWorkspace#user_assigned_identity_id}.

---

### SynapseWorkspaceGithubRepo <a name="SynapseWorkspaceGithubRepo" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceGithubRepo {
    string AccountName,
    string BranchName,
    string RepositoryName,
    string RootFolder,
    string GitUrl = null,
    string LastCommitId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.branchName">BranchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.rootFolder">RootFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.gitUrl">GitUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#git_url SynapseWorkspace#git_url}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.lastCommitId">LastCommitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}. |

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#account_name SynapseWorkspace#account_name}.

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.branchName"></a>

```csharp
public string BranchName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#branch_name SynapseWorkspace#branch_name}.

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#repository_name SynapseWorkspace#repository_name}.

---

##### `RootFolder`<sup>Required</sup> <a name="RootFolder" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.rootFolder"></a>

```csharp
public string RootFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#root_folder SynapseWorkspace#root_folder}.

---

##### `GitUrl`<sup>Optional</sup> <a name="GitUrl" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.gitUrl"></a>

```csharp
public string GitUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#git_url SynapseWorkspace#git_url}.

---

##### `LastCommitId`<sup>Optional</sup> <a name="LastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo.property.lastCommitId"></a>

```csharp
public string LastCommitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#last_commit_id SynapseWorkspace#last_commit_id}.

---

### SynapseWorkspaceIdentity <a name="SynapseWorkspaceIdentity" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#type SynapseWorkspace#type}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#identity_ids SynapseWorkspace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#type SynapseWorkspace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#identity_ids SynapseWorkspace#identity_ids}.

---

### SynapseWorkspaceTimeouts <a name="SynapseWorkspaceTimeouts" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#create SynapseWorkspace#create}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#delete SynapseWorkspace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#read SynapseWorkspace#read}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#update SynapseWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#create SynapseWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#delete SynapseWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#read SynapseWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/synapse_workspace#update SynapseWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceAzureDevopsRepoOutputReference <a name="SynapseWorkspaceAzureDevopsRepoOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceAzureDevopsRepoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetLastCommitId">ResetLastCommitId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLastCommitId` <a name="ResetLastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetLastCommitId"></a>

```csharp
private void ResetLastCommitId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitIdInput">LastCommitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolderInput">RootFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitId">LastCommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolder">RootFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchNameInput"></a>

```csharp
public string BranchNameInput { get; }
```

- *Type:* string

---

##### `LastCommitIdInput`<sup>Optional</sup> <a name="LastCommitIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitIdInput"></a>

```csharp
public string LastCommitIdInput { get; }
```

- *Type:* string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `RootFolderInput`<sup>Optional</sup> <a name="RootFolderInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolderInput"></a>

```csharp
public string RootFolderInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `LastCommitId`<sup>Required</sup> <a name="LastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.lastCommitId"></a>

```csharp
public string LastCommitId { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `RootFolder`<sup>Required</sup> <a name="RootFolder" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.rootFolder"></a>

```csharp
public string RootFolder { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepoOutputReference.property.internalValue"></a>

```csharp
public SynapseWorkspaceAzureDevopsRepo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceAzureDevopsRepo">SynapseWorkspaceAzureDevopsRepo</a>

---


### SynapseWorkspaceCustomerManagedKeyOutputReference <a name="SynapseWorkspaceCustomerManagedKeyOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceCustomerManagedKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessIdInput">KeyVersionlessIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessId">KeyVersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyVersionlessIdInput`<sup>Optional</sup> <a name="KeyVersionlessIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessIdInput"></a>

```csharp
public string KeyVersionlessIdInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyVersionlessId`<sup>Required</sup> <a name="KeyVersionlessId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.keyVersionlessId"></a>

```csharp
public string KeyVersionlessId { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKeyOutputReference.property.internalValue"></a>

```csharp
public SynapseWorkspaceCustomerManagedKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceCustomerManagedKey">SynapseWorkspaceCustomerManagedKey</a>

---


### SynapseWorkspaceGithubRepoOutputReference <a name="SynapseWorkspaceGithubRepoOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceGithubRepoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetGitUrl">ResetGitUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetLastCommitId">ResetLastCommitId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGitUrl` <a name="ResetGitUrl" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetGitUrl"></a>

```csharp
private void ResetGitUrl()
```

##### `ResetLastCommitId` <a name="ResetLastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.resetLastCommitId"></a>

```csharp
private void ResetLastCommitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrlInput">GitUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitIdInput">LastCommitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolderInput">RootFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrl">GitUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitId">LastCommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolder">RootFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchNameInput"></a>

```csharp
public string BranchNameInput { get; }
```

- *Type:* string

---

##### `GitUrlInput`<sup>Optional</sup> <a name="GitUrlInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrlInput"></a>

```csharp
public string GitUrlInput { get; }
```

- *Type:* string

---

##### `LastCommitIdInput`<sup>Optional</sup> <a name="LastCommitIdInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitIdInput"></a>

```csharp
public string LastCommitIdInput { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `RootFolderInput`<sup>Optional</sup> <a name="RootFolderInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolderInput"></a>

```csharp
public string RootFolderInput { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `GitUrl`<sup>Required</sup> <a name="GitUrl" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.gitUrl"></a>

```csharp
public string GitUrl { get; }
```

- *Type:* string

---

##### `LastCommitId`<sup>Required</sup> <a name="LastCommitId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.lastCommitId"></a>

```csharp
public string LastCommitId { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `RootFolder`<sup>Required</sup> <a name="RootFolder" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.rootFolder"></a>

```csharp
public string RootFolder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepoOutputReference.property.internalValue"></a>

```csharp
public SynapseWorkspaceGithubRepo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceGithubRepo">SynapseWorkspaceGithubRepo</a>

---


### SynapseWorkspaceIdentityOutputReference <a name="SynapseWorkspaceIdentityOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentityOutputReference.property.internalValue"></a>

```csharp
public SynapseWorkspaceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceIdentity">SynapseWorkspaceIdentity</a>

---


### SynapseWorkspaceTimeoutsOutputReference <a name="SynapseWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SynapseWorkspaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SynapseWorkspaceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseWorkspace.SynapseWorkspaceTimeouts">SynapseWorkspaceTimeouts</a>

---



