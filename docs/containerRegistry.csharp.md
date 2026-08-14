# `containerRegistry` Submodule <a name="`containerRegistry` Submodule" id="@cdktn/provider-azurerm.containerRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistry <a name="ContainerRegistry" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry azurerm_container_registry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistry(Construct Scope, string Id, ContainerRegistryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig">ContainerRegistryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig">ContainerRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications">PutGeoreplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet">PutNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetAnonymousPullEnabled">ResetAnonymousPullEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetAzureadAuthenticationAsArmPolicyEnabled">ResetAzureadAuthenticationAsArmPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetDataEndpointEnabled">ResetDataEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetExportPolicyEnabled">ResetExportPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetGeoreplications">ResetGeoreplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleBypassForTasksEnabled">ResetNetworkRuleBypassForTasksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleBypassOption">ResetNetworkRuleBypassOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleSet">ResetNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetQuarantinePolicyEnabled">ResetQuarantinePolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetRetentionPolicyInDays">ResetRetentionPolicyInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetRoleAssignmentMode">ResetRoleAssignmentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetZoneRedundancyEnabled">ResetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption"></a>

```csharp
private void PutEncryption(IResolvable|ContainerRegistryEncryption[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>[]

---

##### `PutGeoreplications` <a name="PutGeoreplications" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications"></a>

```csharp
private void PutGeoreplications(IResolvable|ContainerRegistryGeoreplications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>[]

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity"></a>

```csharp
private void PutIdentity(ContainerRegistryIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---

##### `PutNetworkRuleSet` <a name="PutNetworkRuleSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet"></a>

```csharp
private void PutNetworkRuleSet(IResolvable|ContainerRegistryNetworkRuleSet[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerRegistryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetAdminEnabled"></a>

```csharp
private void ResetAdminEnabled()
```

##### `ResetAnonymousPullEnabled` <a name="ResetAnonymousPullEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetAnonymousPullEnabled"></a>

```csharp
private void ResetAnonymousPullEnabled()
```

##### `ResetAzureadAuthenticationAsArmPolicyEnabled` <a name="ResetAzureadAuthenticationAsArmPolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetAzureadAuthenticationAsArmPolicyEnabled"></a>

```csharp
private void ResetAzureadAuthenticationAsArmPolicyEnabled()
```

##### `ResetDataEndpointEnabled` <a name="ResetDataEndpointEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetDataEndpointEnabled"></a>

```csharp
private void ResetDataEndpointEnabled()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetExportPolicyEnabled` <a name="ResetExportPolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetExportPolicyEnabled"></a>

```csharp
private void ResetExportPolicyEnabled()
```

##### `ResetGeoreplications` <a name="ResetGeoreplications" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetGeoreplications"></a>

```csharp
private void ResetGeoreplications()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetNetworkRuleBypassForTasksEnabled` <a name="ResetNetworkRuleBypassForTasksEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleBypassForTasksEnabled"></a>

```csharp
private void ResetNetworkRuleBypassForTasksEnabled()
```

##### `ResetNetworkRuleBypassOption` <a name="ResetNetworkRuleBypassOption" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleBypassOption"></a>

```csharp
private void ResetNetworkRuleBypassOption()
```

##### `ResetNetworkRuleSet` <a name="ResetNetworkRuleSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleSet"></a>

```csharp
private void ResetNetworkRuleSet()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetQuarantinePolicyEnabled` <a name="ResetQuarantinePolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetQuarantinePolicyEnabled"></a>

```csharp
private void ResetQuarantinePolicyEnabled()
```

##### `ResetRetentionPolicyInDays` <a name="ResetRetentionPolicyInDays" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetRetentionPolicyInDays"></a>

```csharp
private void ResetRetentionPolicyInDays()
```

##### `ResetRoleAssignmentMode` <a name="ResetRoleAssignmentMode" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetRoleAssignmentMode"></a>

```csharp
private void ResetRoleAssignmentMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZoneRedundancyEnabled` <a name="ResetZoneRedundancyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.resetZoneRedundancyEnabled"></a>

```csharp
private void ResetZoneRedundancyEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContainerRegistry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerRegistry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerRegistry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerRegistry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerRegistry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ContainerRegistry resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ContainerRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointHostNames">DataEndpointHostNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList">ContainerRegistryEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplications">Georeplications</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList">ContainerRegistryGeoreplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference">ContainerRegistryIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.loginServer">LoginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSet">NetworkRuleSet</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList">ContainerRegistryNetworkRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference">ContainerRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabledInput">AnonymousPullEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.azureadAuthenticationAsArmPolicyEnabledInput">AzureadAuthenticationAsArmPolicyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabledInput">DataEndpointEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabledInput">ExportPolicyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplicationsInput">GeoreplicationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassForTasksEnabledInput">NetworkRuleBypassForTasksEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOptionInput">NetworkRuleBypassOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSetInput">NetworkRuleSetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabledInput">QuarantinePolicyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInDaysInput">RetentionPolicyInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.roleAssignmentModeInput">RoleAssignmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabledInput">ZoneRedundancyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabled">AdminEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabled">AnonymousPullEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.azureadAuthenticationAsArmPolicyEnabled">AzureadAuthenticationAsArmPolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabled">DataEndpointEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabled">ExportPolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassForTasksEnabled">NetworkRuleBypassForTasksEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOption">NetworkRuleBypassOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabled">QuarantinePolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInDays">RetentionPolicyInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.roleAssignmentMode">RoleAssignmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `DataEndpointHostNames`<sup>Required</sup> <a name="DataEndpointHostNames" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointHostNames"></a>

```csharp
public string[] DataEndpointHostNames { get; }
```

- *Type:* string[]

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.encryption"></a>

```csharp
public ContainerRegistryEncryptionList Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList">ContainerRegistryEncryptionList</a>

---

##### `Georeplications`<sup>Required</sup> <a name="Georeplications" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplications"></a>

```csharp
public ContainerRegistryGeoreplicationsList Georeplications { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList">ContainerRegistryGeoreplicationsList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.identity"></a>

```csharp
public ContainerRegistryIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference">ContainerRegistryIdentityOutputReference</a>

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.loginServer"></a>

```csharp
public string LoginServer { get; }
```

- *Type:* string

---

##### `NetworkRuleSet`<sup>Required</sup> <a name="NetworkRuleSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSet"></a>

```csharp
public ContainerRegistryNetworkRuleSetList NetworkRuleSet { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList">ContainerRegistryNetworkRuleSetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.timeouts"></a>

```csharp
public ContainerRegistryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference">ContainerRegistryTimeoutsOutputReference</a>

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabledInput"></a>

```csharp
public bool|IResolvable AdminEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AnonymousPullEnabledInput`<sup>Optional</sup> <a name="AnonymousPullEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabledInput"></a>

```csharp
public bool|IResolvable AnonymousPullEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AzureadAuthenticationAsArmPolicyEnabledInput`<sup>Optional</sup> <a name="AzureadAuthenticationAsArmPolicyEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.azureadAuthenticationAsArmPolicyEnabledInput"></a>

```csharp
public bool|IResolvable AzureadAuthenticationAsArmPolicyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataEndpointEnabledInput`<sup>Optional</sup> <a name="DataEndpointEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabledInput"></a>

```csharp
public bool|IResolvable DataEndpointEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.encryptionInput"></a>

```csharp
public IResolvable|ContainerRegistryEncryption[] EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>[]

---

##### `ExportPolicyEnabledInput`<sup>Optional</sup> <a name="ExportPolicyEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabledInput"></a>

```csharp
public bool|IResolvable ExportPolicyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GeoreplicationsInput`<sup>Optional</sup> <a name="GeoreplicationsInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplicationsInput"></a>

```csharp
public IResolvable|ContainerRegistryGeoreplications[] GeoreplicationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>[]

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.identityInput"></a>

```csharp
public ContainerRegistryIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkRuleBypassForTasksEnabledInput`<sup>Optional</sup> <a name="NetworkRuleBypassForTasksEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassForTasksEnabledInput"></a>

```csharp
public bool|IResolvable NetworkRuleBypassForTasksEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NetworkRuleBypassOptionInput`<sup>Optional</sup> <a name="NetworkRuleBypassOptionInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOptionInput"></a>

```csharp
public string NetworkRuleBypassOptionInput { get; }
```

- *Type:* string

---

##### `NetworkRuleSetInput`<sup>Optional</sup> <a name="NetworkRuleSetInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSetInput"></a>

```csharp
public IResolvable|ContainerRegistryNetworkRuleSet[] NetworkRuleSetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>[]

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QuarantinePolicyEnabledInput`<sup>Optional</sup> <a name="QuarantinePolicyEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabledInput"></a>

```csharp
public bool|IResolvable QuarantinePolicyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInDaysInput`<sup>Optional</sup> <a name="RetentionPolicyInDaysInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInDaysInput"></a>

```csharp
public double RetentionPolicyInDaysInput { get; }
```

- *Type:* double

---

##### `RoleAssignmentModeInput`<sup>Optional</sup> <a name="RoleAssignmentModeInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.roleAssignmentModeInput"></a>

```csharp
public string RoleAssignmentModeInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.timeoutsInput"></a>

```csharp
public IResolvable|ContainerRegistryTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---

##### `ZoneRedundancyEnabledInput`<sup>Optional</sup> <a name="ZoneRedundancyEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabledInput"></a>

```csharp
public bool|IResolvable ZoneRedundancyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabled"></a>

```csharp
public bool|IResolvable AdminEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AnonymousPullEnabled`<sup>Required</sup> <a name="AnonymousPullEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabled"></a>

```csharp
public bool|IResolvable AnonymousPullEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AzureadAuthenticationAsArmPolicyEnabled`<sup>Required</sup> <a name="AzureadAuthenticationAsArmPolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.azureadAuthenticationAsArmPolicyEnabled"></a>

```csharp
public bool|IResolvable AzureadAuthenticationAsArmPolicyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataEndpointEnabled`<sup>Required</sup> <a name="DataEndpointEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabled"></a>

```csharp
public bool|IResolvable DataEndpointEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportPolicyEnabled`<sup>Required</sup> <a name="ExportPolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabled"></a>

```csharp
public bool|IResolvable ExportPolicyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkRuleBypassForTasksEnabled`<sup>Required</sup> <a name="NetworkRuleBypassForTasksEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassForTasksEnabled"></a>

```csharp
public bool|IResolvable NetworkRuleBypassForTasksEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NetworkRuleBypassOption`<sup>Required</sup> <a name="NetworkRuleBypassOption" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOption"></a>

```csharp
public string NetworkRuleBypassOption { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QuarantinePolicyEnabled`<sup>Required</sup> <a name="QuarantinePolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabled"></a>

```csharp
public bool|IResolvable QuarantinePolicyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RetentionPolicyInDays`<sup>Required</sup> <a name="RetentionPolicyInDays" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInDays"></a>

```csharp
public double RetentionPolicyInDays { get; }
```

- *Type:* double

---

##### `RoleAssignmentMode`<sup>Required</sup> <a name="RoleAssignmentMode" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.roleAssignmentMode"></a>

```csharp
public string RoleAssignmentMode { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ZoneRedundancyEnabled`<sup>Required</sup> <a name="ZoneRedundancyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabled"></a>

```csharp
public bool|IResolvable ZoneRedundancyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryConfig <a name="ContainerRegistryConfig" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryConfig {
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
    string Sku,
    bool|IResolvable AdminEnabled = null,
    bool|IResolvable AnonymousPullEnabled = null,
    bool|IResolvable AzureadAuthenticationAsArmPolicyEnabled = null,
    bool|IResolvable DataEndpointEnabled = null,
    IResolvable|ContainerRegistryEncryption[] Encryption = null,
    bool|IResolvable ExportPolicyEnabled = null,
    IResolvable|ContainerRegistryGeoreplications[] Georeplications = null,
    string Id = null,
    ContainerRegistryIdentity Identity = null,
    bool|IResolvable NetworkRuleBypassForTasksEnabled = null,
    string NetworkRuleBypassOption = null,
    IResolvable|ContainerRegistryNetworkRuleSet[] NetworkRuleSet = null,
    bool|IResolvable PublicNetworkAccessEnabled = null,
    bool|IResolvable QuarantinePolicyEnabled = null,
    double RetentionPolicyInDays = null,
    string RoleAssignmentMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ContainerRegistryTimeouts Timeouts = null,
    bool|IResolvable ZoneRedundancyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#name ContainerRegistry#name}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#sku ContainerRegistry#sku}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.adminEnabled">AdminEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.anonymousPullEnabled">AnonymousPullEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.azureadAuthenticationAsArmPolicyEnabled">AzureadAuthenticationAsArmPolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#azuread_authentication_as_arm_policy_enabled ContainerRegistry#azuread_authentication_as_arm_policy_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dataEndpointEnabled">DataEndpointEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.encryption">Encryption</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.exportPolicyEnabled">ExportPolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.georeplications">Georeplications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>[]</code> | georeplications block. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#id ContainerRegistry#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleBypassForTasksEnabled">NetworkRuleBypassForTasksEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#network_rule_bypass_for_tasks_enabled ContainerRegistry#network_rule_bypass_for_tasks_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleBypassOption">NetworkRuleBypassOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleSet">NetworkRuleSet</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.quarantinePolicyEnabled">QuarantinePolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.retentionPolicyInDays">RetentionPolicyInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#retention_policy_in_days ContainerRegistry#retention_policy_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.roleAssignmentMode">RoleAssignmentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#role_assignment_mode ContainerRegistry#role_assignment_mode}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#tags ContainerRegistry#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#name ContainerRegistry#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#sku ContainerRegistry#sku}.

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.adminEnabled"></a>

```csharp
public bool|IResolvable AdminEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}.

---

##### `AnonymousPullEnabled`<sup>Optional</sup> <a name="AnonymousPullEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.anonymousPullEnabled"></a>

```csharp
public bool|IResolvable AnonymousPullEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}.

---

##### `AzureadAuthenticationAsArmPolicyEnabled`<sup>Optional</sup> <a name="AzureadAuthenticationAsArmPolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.azureadAuthenticationAsArmPolicyEnabled"></a>

```csharp
public bool|IResolvable AzureadAuthenticationAsArmPolicyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#azuread_authentication_as_arm_policy_enabled ContainerRegistry#azuread_authentication_as_arm_policy_enabled}.

---

##### `DataEndpointEnabled`<sup>Optional</sup> <a name="DataEndpointEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dataEndpointEnabled"></a>

```csharp
public bool|IResolvable DataEndpointEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.encryption"></a>

```csharp
public IResolvable|ContainerRegistryEncryption[] Encryption { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}.

---

##### `ExportPolicyEnabled`<sup>Optional</sup> <a name="ExportPolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.exportPolicyEnabled"></a>

```csharp
public bool|IResolvable ExportPolicyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}.

---

##### `Georeplications`<sup>Optional</sup> <a name="Georeplications" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.georeplications"></a>

```csharp
public IResolvable|ContainerRegistryGeoreplications[] Georeplications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>[]

georeplications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#georeplications ContainerRegistry#georeplications}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#id ContainerRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.identity"></a>

```csharp
public ContainerRegistryIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#identity ContainerRegistry#identity}

---

##### `NetworkRuleBypassForTasksEnabled`<sup>Optional</sup> <a name="NetworkRuleBypassForTasksEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleBypassForTasksEnabled"></a>

```csharp
public bool|IResolvable NetworkRuleBypassForTasksEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#network_rule_bypass_for_tasks_enabled ContainerRegistry#network_rule_bypass_for_tasks_enabled}.

---

##### `NetworkRuleBypassOption`<sup>Optional</sup> <a name="NetworkRuleBypassOption" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleBypassOption"></a>

```csharp
public string NetworkRuleBypassOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}.

---

##### `NetworkRuleSet`<sup>Optional</sup> <a name="NetworkRuleSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleSet"></a>

```csharp
public IResolvable|ContainerRegistryNetworkRuleSet[] NetworkRuleSet { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}.

---

##### `QuarantinePolicyEnabled`<sup>Optional</sup> <a name="QuarantinePolicyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.quarantinePolicyEnabled"></a>

```csharp
public bool|IResolvable QuarantinePolicyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}.

---

##### `RetentionPolicyInDays`<sup>Optional</sup> <a name="RetentionPolicyInDays" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.retentionPolicyInDays"></a>

```csharp
public double RetentionPolicyInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#retention_policy_in_days ContainerRegistry#retention_policy_in_days}.

---

##### `RoleAssignmentMode`<sup>Optional</sup> <a name="RoleAssignmentMode" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.roleAssignmentMode"></a>

```csharp
public string RoleAssignmentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#role_assignment_mode ContainerRegistry#role_assignment_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#tags ContainerRegistry#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.timeouts"></a>

```csharp
public ContainerRegistryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#timeouts ContainerRegistry#timeouts}

---

##### `ZoneRedundancyEnabled`<sup>Optional</sup> <a name="ZoneRedundancyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.zoneRedundancyEnabled"></a>

```csharp
public bool|IResolvable ZoneRedundancyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}.

---

### ContainerRegistryEncryption <a name="ContainerRegistryEncryption" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryEncryption {
    string IdentityClientId = null,
    string KeyVaultKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#identity_client_id ContainerRegistry#identity_client_id}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#key_vault_key_id ContainerRegistry#key_vault_key_id}. |

---

##### `IdentityClientId`<sup>Optional</sup> <a name="IdentityClientId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#identity_client_id ContainerRegistry#identity_client_id}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#key_vault_key_id ContainerRegistry#key_vault_key_id}.

---

### ContainerRegistryGeoreplications <a name="ContainerRegistryGeoreplications" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryGeoreplications {
    bool|IResolvable GlobalEndpointRoutingEnabled,
    string Location,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    bool|IResolvable ZoneRedundancyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.globalEndpointRoutingEnabled">GlobalEndpointRoutingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#global_endpoint_routing_enabled ContainerRegistry#global_endpoint_routing_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#tags ContainerRegistry#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}. |

---

##### `GlobalEndpointRoutingEnabled`<sup>Required</sup> <a name="GlobalEndpointRoutingEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.globalEndpointRoutingEnabled"></a>

```csharp
public bool|IResolvable GlobalEndpointRoutingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#global_endpoint_routing_enabled ContainerRegistry#global_endpoint_routing_enabled}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#tags ContainerRegistry#tags}.

---

##### `ZoneRedundancyEnabled`<sup>Optional</sup> <a name="ZoneRedundancyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.zoneRedundancyEnabled"></a>

```csharp
public bool|IResolvable ZoneRedundancyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}.

---

### ContainerRegistryIdentity <a name="ContainerRegistryIdentity" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#type ContainerRegistry#type}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#identity_ids ContainerRegistry#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#type ContainerRegistry#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#identity_ids ContainerRegistry#identity_ids}.

---

### ContainerRegistryNetworkRuleSet <a name="ContainerRegistryNetworkRuleSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryNetworkRuleSet {
    string DefaultAction = null,
    IResolvable|ContainerRegistryNetworkRuleSetIpRule[] IpRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#default_action ContainerRegistry#default_action}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.ipRule">IpRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#ip_rule ContainerRegistry#ip_rule}. |

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#default_action ContainerRegistry#default_action}.

---

##### `IpRule`<sup>Optional</sup> <a name="IpRule" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.ipRule"></a>

```csharp
public IResolvable|ContainerRegistryNetworkRuleSetIpRule[] IpRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#ip_rule ContainerRegistry#ip_rule}.

---

### ContainerRegistryNetworkRuleSetIpRule <a name="ContainerRegistryNetworkRuleSetIpRule" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetIpRule {
    string Action = null,
    string IpRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#action ContainerRegistry#action}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.ipRange">IpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#ip_range ContainerRegistry#ip_range}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#action ContainerRegistry#action}.

---

##### `IpRange`<sup>Optional</sup> <a name="IpRange" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.ipRange"></a>

```csharp
public string IpRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#ip_range ContainerRegistry#ip_range}.

---

### ContainerRegistryTimeouts <a name="ContainerRegistryTimeouts" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#create ContainerRegistry#create}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#delete ContainerRegistry#delete}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#read ContainerRegistry#read}. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#update ContainerRegistry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#create ContainerRegistry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#delete ContainerRegistry#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#read ContainerRegistry#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/container_registry#update ContainerRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryEncryptionList <a name="ContainerRegistryEncryptionList" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get"></a>

```csharp
private ContainerRegistryEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryEncryption[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>[]

---


### ContainerRegistryEncryptionOutputReference <a name="ContainerRegistryEncryptionOutputReference" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetIdentityClientId">ResetIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityClientId` <a name="ResetIdentityClientId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetIdentityClientId"></a>

```csharp
private void ResetIdentityClientId()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientIdInput">IdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityClientIdInput`<sup>Optional</sup> <a name="IdentityClientIdInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientIdInput"></a>

```csharp
public string IdentityClientIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>

---


### ContainerRegistryGeoreplicationsList <a name="ContainerRegistryGeoreplicationsList" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryGeoreplicationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get"></a>

```csharp
private ContainerRegistryGeoreplicationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryGeoreplications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>[]

---


### ContainerRegistryGeoreplicationsOutputReference <a name="ContainerRegistryGeoreplicationsOutputReference" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryGeoreplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetZoneRedundancyEnabled">ResetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetZoneRedundancyEnabled` <a name="ResetZoneRedundancyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetZoneRedundancyEnabled"></a>

```csharp
private void ResetZoneRedundancyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.globalEndpointRoutingEnabledInput">GlobalEndpointRoutingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabledInput">ZoneRedundancyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.globalEndpointRoutingEnabled">GlobalEndpointRoutingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlobalEndpointRoutingEnabledInput`<sup>Optional</sup> <a name="GlobalEndpointRoutingEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.globalEndpointRoutingEnabledInput"></a>

```csharp
public bool|IResolvable GlobalEndpointRoutingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ZoneRedundancyEnabledInput`<sup>Optional</sup> <a name="ZoneRedundancyEnabledInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabledInput"></a>

```csharp
public bool|IResolvable ZoneRedundancyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlobalEndpointRoutingEnabled`<sup>Required</sup> <a name="GlobalEndpointRoutingEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.globalEndpointRoutingEnabled"></a>

```csharp
public bool|IResolvable GlobalEndpointRoutingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ZoneRedundancyEnabled`<sup>Required</sup> <a name="ZoneRedundancyEnabled" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabled"></a>

```csharp
public bool|IResolvable ZoneRedundancyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryGeoreplications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>

---


### ContainerRegistryIdentityOutputReference <a name="ContainerRegistryIdentityOutputReference" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.internalValue"></a>

```csharp
public ContainerRegistryIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---


### ContainerRegistryNetworkRuleSetIpRuleList <a name="ContainerRegistryNetworkRuleSetIpRuleList" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetIpRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get"></a>

```csharp
private ContainerRegistryNetworkRuleSetIpRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryNetworkRuleSetIpRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>[]

---


### ContainerRegistryNetworkRuleSetIpRuleOutputReference <a name="ContainerRegistryNetworkRuleSetIpRuleOutputReference" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetIpRange">ResetIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetIpRange` <a name="ResetIpRange" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetIpRange"></a>

```csharp
private void ResetIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRange">IpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRangeInput"></a>

```csharp
public string IpRangeInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRange"></a>

```csharp
public string IpRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryNetworkRuleSetIpRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>

---


### ContainerRegistryNetworkRuleSetList <a name="ContainerRegistryNetworkRuleSetList" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get"></a>

```csharp
private ContainerRegistryNetworkRuleSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryNetworkRuleSet[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>[]

---


### ContainerRegistryNetworkRuleSetOutputReference <a name="ContainerRegistryNetworkRuleSetOutputReference" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule">PutIpRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetIpRule">ResetIpRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpRule` <a name="PutIpRule" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule"></a>

```csharp
private void PutIpRule(IResolvable|ContainerRegistryNetworkRuleSetIpRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>[]

---

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetDefaultAction"></a>

```csharp
private void ResetDefaultAction()
```

##### `ResetIpRule` <a name="ResetIpRule" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetIpRule"></a>

```csharp
private void ResetIpRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRule">IpRule</a></code> | <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList">ContainerRegistryNetworkRuleSetIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRuleInput">IpRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpRule`<sup>Required</sup> <a name="IpRule" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRule"></a>

```csharp
public ContainerRegistryNetworkRuleSetIpRuleList IpRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList">ContainerRegistryNetworkRuleSetIpRuleList</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IpRuleInput`<sup>Optional</sup> <a name="IpRuleInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRuleInput"></a>

```csharp
public IResolvable|ContainerRegistryNetworkRuleSetIpRule[] IpRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>[]

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryNetworkRuleSet InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>

---


### ContainerRegistryTimeoutsOutputReference <a name="ContainerRegistryTimeoutsOutputReference" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerRegistryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerRegistryTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---



