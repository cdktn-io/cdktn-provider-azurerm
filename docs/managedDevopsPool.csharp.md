# `managedDevopsPool` Submodule <a name="`managedDevopsPool` Submodule" id="@cdktn/provider-azurerm.managedDevopsPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDevopsPool <a name="ManagedDevopsPool" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool azurerm_managed_devops_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPool(Construct Scope, string Id, ManagedDevopsPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig">ManagedDevopsPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig">ManagedDevopsPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization">PutAzureDevopsOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent">PutStatefulAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent">PutStatelessAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric">PutVirtualMachineScaleSetFabric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatefulAgent">ResetStatefulAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatelessAgent">ResetStatelessAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetWorkFolder">ResetWorkFolder</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureDevopsOrganization` <a name="PutAzureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization"></a>

```csharp
private void PutAzureDevopsOrganization(ManagedDevopsPoolAzureDevopsOrganization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity"></a>

```csharp
private void PutIdentity(ManagedDevopsPoolIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

---

##### `PutStatefulAgent` <a name="PutStatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent"></a>

```csharp
private void PutStatefulAgent(ManagedDevopsPoolStatefulAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

---

##### `PutStatelessAgent` <a name="PutStatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent"></a>

```csharp
private void PutStatelessAgent(ManagedDevopsPoolStatelessAgent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagedDevopsPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

---

##### `PutVirtualMachineScaleSetFabric` <a name="PutVirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric"></a>

```csharp
private void PutVirtualMachineScaleSetFabric(ManagedDevopsPoolVirtualMachineScaleSetFabric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetStatefulAgent` <a name="ResetStatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatefulAgent"></a>

```csharp
private void ResetStatefulAgent()
```

##### `ResetStatelessAgent` <a name="ResetStatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatelessAgent"></a>

```csharp
private void ResetStatelessAgent()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkFolder` <a name="ResetWorkFolder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetWorkFolder"></a>

```csharp
private void ResetWorkFolder()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedDevopsPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ManagedDevopsPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ManagedDevopsPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ManagedDevopsPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ManagedDevopsPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ManagedDevopsPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDevopsPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDevopsPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ManagedDevopsPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganization">AzureDevopsOrganization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference">ManagedDevopsPoolAzureDevopsOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference">ManagedDevopsPoolIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgent">StatefulAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference">ManagedDevopsPoolStatefulAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgent">StatelessAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference">ManagedDevopsPoolStatelessAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference">ManagedDevopsPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabric">VirtualMachineScaleSetFabric</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganizationInput">AzureDevopsOrganizationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectIdInput">DevCenterProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrencyInput">MaximumConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgentInput">StatefulAgentInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgentInput">StatelessAgentInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabricInput">VirtualMachineScaleSetFabricInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolderInput">WorkFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrency">MaximumConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolder">WorkFolder</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AzureDevopsOrganization`<sup>Required</sup> <a name="AzureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganization"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationOutputReference AzureDevopsOrganization { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference">ManagedDevopsPoolAzureDevopsOrganizationOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identity"></a>

```csharp
public ManagedDevopsPoolIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference">ManagedDevopsPoolIdentityOutputReference</a>

---

##### `StatefulAgent`<sup>Required</sup> <a name="StatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgent"></a>

```csharp
public ManagedDevopsPoolStatefulAgentOutputReference StatefulAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference">ManagedDevopsPoolStatefulAgentOutputReference</a>

---

##### `StatelessAgent`<sup>Required</sup> <a name="StatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgent"></a>

```csharp
public ManagedDevopsPoolStatelessAgentOutputReference StatelessAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference">ManagedDevopsPoolStatelessAgentOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeouts"></a>

```csharp
public ManagedDevopsPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference">ManagedDevopsPoolTimeoutsOutputReference</a>

---

##### `VirtualMachineScaleSetFabric`<sup>Required</sup> <a name="VirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabric"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference VirtualMachineScaleSetFabric { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference</a>

---

##### `AzureDevopsOrganizationInput`<sup>Optional</sup> <a name="AzureDevopsOrganizationInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganizationInput"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganization AzureDevopsOrganizationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

---

##### `DevCenterProjectIdInput`<sup>Optional</sup> <a name="DevCenterProjectIdInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectIdInput"></a>

```csharp
public string DevCenterProjectIdInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identityInput"></a>

```csharp
public ManagedDevopsPoolIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaximumConcurrencyInput`<sup>Optional</sup> <a name="MaximumConcurrencyInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrencyInput"></a>

```csharp
public double MaximumConcurrencyInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StatefulAgentInput`<sup>Optional</sup> <a name="StatefulAgentInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgentInput"></a>

```csharp
public ManagedDevopsPoolStatefulAgent StatefulAgentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

---

##### `StatelessAgentInput`<sup>Optional</sup> <a name="StatelessAgentInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgentInput"></a>

```csharp
public ManagedDevopsPoolStatelessAgent StatelessAgentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeoutsInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

---

##### `VirtualMachineScaleSetFabricInput`<sup>Optional</sup> <a name="VirtualMachineScaleSetFabricInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabricInput"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabric VirtualMachineScaleSetFabricInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---

##### `WorkFolderInput`<sup>Optional</sup> <a name="WorkFolderInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolderInput"></a>

```csharp
public string WorkFolderInput { get; }
```

- *Type:* string

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectId"></a>

```csharp
public string DevCenterProjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaximumConcurrency`<sup>Required</sup> <a name="MaximumConcurrency" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrency"></a>

```csharp
public double MaximumConcurrency { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkFolder`<sup>Required</sup> <a name="WorkFolder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolder"></a>

```csharp
public string WorkFolder { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDevopsPoolAzureDevopsOrganization <a name="ManagedDevopsPoolAzureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganization {
    IResolvable|ManagedDevopsPoolAzureDevopsOrganizationOrganization[] Organization,
    ManagedDevopsPoolAzureDevopsOrganizationPermission Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.organization">Organization</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]</code> | organization block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.permission">Permission</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | permission block. |

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.organization"></a>

```csharp
public IResolvable|ManagedDevopsPoolAzureDevopsOrganizationOrganization[] Organization { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]

organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#organization ManagedDevopsPool#organization}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.permission"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationPermission Permission { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#permission ManagedDevopsPool#permission}

---

### ManagedDevopsPoolAzureDevopsOrganizationOrganization <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganizationOrganization {
    double Parallelism,
    string Url,
    string[] Projects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.parallelism">Parallelism</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#parallelism ManagedDevopsPool#parallelism}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#url ManagedDevopsPool#url}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.projects">Projects</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#projects ManagedDevopsPool#projects}. |

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.parallelism"></a>

```csharp
public double Parallelism { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#parallelism ManagedDevopsPool#parallelism}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#url ManagedDevopsPool#url}.

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.projects"></a>

```csharp
public string[] Projects { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#projects ManagedDevopsPool#projects}.

---

### ManagedDevopsPoolAzureDevopsOrganizationPermission <a name="ManagedDevopsPoolAzureDevopsOrganizationPermission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganizationPermission {
    string Kind,
    ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount AdministratorAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#kind ManagedDevopsPool#kind}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.administratorAccount">AdministratorAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | administrator_account block. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#kind ManagedDevopsPool#kind}.

---

##### `AdministratorAccount`<sup>Optional</sup> <a name="AdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.administratorAccount"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount AdministratorAccount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

administrator_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#administrator_account ManagedDevopsPool#administrator_account}

---

### ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount {
    string[] Groups = null,
    string[] Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#groups ManagedDevopsPool#groups}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.users">Users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#users ManagedDevopsPool#users}. |

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#groups ManagedDevopsPool#groups}.

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.users"></a>

```csharp
public string[] Users { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#users ManagedDevopsPool#users}.

---

### ManagedDevopsPoolConfig <a name="ManagedDevopsPoolConfig" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ManagedDevopsPoolAzureDevopsOrganization AzureDevopsOrganization,
    string DevCenterProjectId,
    string Location,
    double MaximumConcurrency,
    string Name,
    string ResourceGroupName,
    ManagedDevopsPoolVirtualMachineScaleSetFabric VirtualMachineScaleSetFabric,
    string Id = null,
    ManagedDevopsPoolIdentity Identity = null,
    ManagedDevopsPoolStatefulAgent StatefulAgent = null,
    ManagedDevopsPoolStatelessAgent StatelessAgent = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ManagedDevopsPoolTimeouts Timeouts = null,
    string WorkFolder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.azureDevopsOrganization">AzureDevopsOrganization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | azure_devops_organization block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.maximumConcurrency">MaximumConcurrency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.virtualMachineScaleSetFabric">VirtualMachineScaleSetFabric</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | virtual_machine_scale_set_fabric block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statefulAgent">StatefulAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | stateful_agent block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statelessAgent">StatelessAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | stateless_agent block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.workFolder">WorkFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AzureDevopsOrganization`<sup>Required</sup> <a name="AzureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.azureDevopsOrganization"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganization AzureDevopsOrganization { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

azure_devops_organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#azure_devops_organization ManagedDevopsPool#azure_devops_organization}

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.devCenterProjectId"></a>

```csharp
public string DevCenterProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}.

---

##### `MaximumConcurrency`<sup>Required</sup> <a name="MaximumConcurrency" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.maximumConcurrency"></a>

```csharp
public double MaximumConcurrency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}.

---

##### `VirtualMachineScaleSetFabric`<sup>Required</sup> <a name="VirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.virtualMachineScaleSetFabric"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabric VirtualMachineScaleSetFabric { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

virtual_machine_scale_set_fabric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#virtual_machine_scale_set_fabric ManagedDevopsPool#virtual_machine_scale_set_fabric}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.identity"></a>

```csharp
public ManagedDevopsPoolIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#identity ManagedDevopsPool#identity}

---

##### `StatefulAgent`<sup>Optional</sup> <a name="StatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statefulAgent"></a>

```csharp
public ManagedDevopsPoolStatefulAgent StatefulAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

stateful_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#stateful_agent ManagedDevopsPool#stateful_agent}

---

##### `StatelessAgent`<sup>Optional</sup> <a name="StatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statelessAgent"></a>

```csharp
public ManagedDevopsPoolStatelessAgent StatelessAgent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

stateless_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#stateless_agent ManagedDevopsPool#stateless_agent}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.timeouts"></a>

```csharp
public ManagedDevopsPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#timeouts ManagedDevopsPool#timeouts}

---

##### `WorkFolder`<sup>Optional</sup> <a name="WorkFolder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.workFolder"></a>

```csharp
public string WorkFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}.

---

### ManagedDevopsPoolIdentity <a name="ManagedDevopsPoolIdentity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolIdentity {
    string[] IdentityIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#identity_ids ManagedDevopsPool#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#type ManagedDevopsPool#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#identity_ids ManagedDevopsPool#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#type ManagedDevopsPool#type}.

---

### ManagedDevopsPoolStatefulAgent <a name="ManagedDevopsPoolStatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgent {
    ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction AutomaticResourcePrediction = null,
    string GracePeriodTimeSpan = null,
    ManagedDevopsPoolStatefulAgentManualResourcePrediction ManualResourcePrediction = null,
    string MaximumAgentLifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.automaticResourcePrediction">AutomaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | automatic_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.gracePeriodTimeSpan">GracePeriodTimeSpan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#grace_period_time_span ManagedDevopsPool#grace_period_time_span}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.manualResourcePrediction">ManualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | manual_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.maximumAgentLifetime">MaximumAgentLifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#maximum_agent_lifetime ManagedDevopsPool#maximum_agent_lifetime}. |

---

##### `AutomaticResourcePrediction`<sup>Optional</sup> <a name="AutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.automaticResourcePrediction"></a>

```csharp
public ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction AutomaticResourcePrediction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

automatic_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}

---

##### `GracePeriodTimeSpan`<sup>Optional</sup> <a name="GracePeriodTimeSpan" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.gracePeriodTimeSpan"></a>

```csharp
public string GracePeriodTimeSpan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#grace_period_time_span ManagedDevopsPool#grace_period_time_span}.

---

##### `ManualResourcePrediction`<sup>Optional</sup> <a name="ManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.manualResourcePrediction"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePrediction ManualResourcePrediction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

manual_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}

---

##### `MaximumAgentLifetime`<sup>Optional</sup> <a name="MaximumAgentLifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.maximumAgentLifetime"></a>

```csharp
public string MaximumAgentLifetime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#maximum_agent_lifetime ManagedDevopsPool#maximum_agent_lifetime}.

---

### ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction <a name="ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction {
    string PredictionPreference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.property.predictionPreference">PredictionPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}. |

---

##### `PredictionPreference`<sup>Optional</sup> <a name="PredictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.property.predictionPreference"></a>

```csharp
public string PredictionPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePrediction <a name="ManagedDevopsPoolStatefulAgentManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePrediction {
    double AllWeekSchedule = null,
    IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[] FridaySchedule = null,
    IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[] MondaySchedule = null,
    IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[] SaturdaySchedule = null,
    IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[] SundaySchedule = null,
    IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[] ThursdaySchedule = null,
    string TimeZoneName = null,
    IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[] TuesdaySchedule = null,
    IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[] WednesdaySchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.allWeekSchedule">AllWeekSchedule</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.fridaySchedule">FridaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]</code> | friday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.mondaySchedule">MondaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]</code> | monday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.saturdaySchedule">SaturdaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | saturday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.sundaySchedule">SundaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]</code> | sunday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.thursdaySchedule">ThursdaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]</code> | thursday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.timeZoneName">TimeZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.tuesdaySchedule">TuesdaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | tuesday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.wednesdaySchedule">WednesdaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | wednesday_schedule block. |

---

##### `AllWeekSchedule`<sup>Optional</sup> <a name="AllWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.allWeekSchedule"></a>

```csharp
public double AllWeekSchedule { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}.

---

##### `FridaySchedule`<sup>Optional</sup> <a name="FridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.fridaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[] FridaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]

friday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}

---

##### `MondaySchedule`<sup>Optional</sup> <a name="MondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.mondaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[] MondaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]

monday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}

---

##### `SaturdaySchedule`<sup>Optional</sup> <a name="SaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.saturdaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[] SaturdaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]

saturday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}

---

##### `SundaySchedule`<sup>Optional</sup> <a name="SundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.sundaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[] SundaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]

sunday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}

---

##### `ThursdaySchedule`<sup>Optional</sup> <a name="ThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.thursdaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[] ThursdaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]

thursday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}

---

##### `TimeZoneName`<sup>Optional</sup> <a name="TimeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.timeZoneName"></a>

```csharp
public string TimeZoneName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}.

---

##### `TuesdaySchedule`<sup>Optional</sup> <a name="TuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.tuesdaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[] TuesdaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]

tuesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}

---

##### `WednesdaySchedule`<sup>Optional</sup> <a name="WednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.wednesdaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[] WednesdaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]

wednesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgent <a name="ManagedDevopsPoolStatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgent {
    ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction AutomaticResourcePrediction = null,
    ManagedDevopsPoolStatelessAgentManualResourcePrediction ManualResourcePrediction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.automaticResourcePrediction">AutomaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | automatic_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.manualResourcePrediction">ManualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | manual_resource_prediction block. |

---

##### `AutomaticResourcePrediction`<sup>Optional</sup> <a name="AutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.automaticResourcePrediction"></a>

```csharp
public ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction AutomaticResourcePrediction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

automatic_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}

---

##### `ManualResourcePrediction`<sup>Optional</sup> <a name="ManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.manualResourcePrediction"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePrediction ManualResourcePrediction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

manual_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}

---

### ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction <a name="ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction {
    string PredictionPreference = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.property.predictionPreference">PredictionPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}. |

---

##### `PredictionPreference`<sup>Optional</sup> <a name="PredictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.property.predictionPreference"></a>

```csharp
public string PredictionPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePrediction <a name="ManagedDevopsPoolStatelessAgentManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePrediction {
    double AllWeekSchedule = null,
    IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[] FridaySchedule = null,
    IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[] MondaySchedule = null,
    IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[] SaturdaySchedule = null,
    IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[] SundaySchedule = null,
    IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[] ThursdaySchedule = null,
    string TimeZoneName = null,
    IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[] TuesdaySchedule = null,
    IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[] WednesdaySchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.allWeekSchedule">AllWeekSchedule</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.fridaySchedule">FridaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]</code> | friday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.mondaySchedule">MondaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]</code> | monday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.saturdaySchedule">SaturdaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | saturday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.sundaySchedule">SundaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]</code> | sunday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.thursdaySchedule">ThursdaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]</code> | thursday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.timeZoneName">TimeZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.tuesdaySchedule">TuesdaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | tuesday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.wednesdaySchedule">WednesdaySchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | wednesday_schedule block. |

---

##### `AllWeekSchedule`<sup>Optional</sup> <a name="AllWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.allWeekSchedule"></a>

```csharp
public double AllWeekSchedule { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}.

---

##### `FridaySchedule`<sup>Optional</sup> <a name="FridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.fridaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[] FridaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]

friday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}

---

##### `MondaySchedule`<sup>Optional</sup> <a name="MondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.mondaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[] MondaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]

monday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}

---

##### `SaturdaySchedule`<sup>Optional</sup> <a name="SaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.saturdaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[] SaturdaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]

saturday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}

---

##### `SundaySchedule`<sup>Optional</sup> <a name="SundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.sundaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[] SundaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]

sunday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}

---

##### `ThursdaySchedule`<sup>Optional</sup> <a name="ThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.thursdaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[] ThursdaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]

thursday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}

---

##### `TimeZoneName`<sup>Optional</sup> <a name="TimeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.timeZoneName"></a>

```csharp
public string TimeZoneName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}.

---

##### `TuesdaySchedule`<sup>Optional</sup> <a name="TuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.tuesdaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[] TuesdaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]

tuesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}

---

##### `WednesdaySchedule`<sup>Optional</sup> <a name="WednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.wednesdaySchedule"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[] WednesdaySchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]

wednesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule {
    double Count,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolTimeouts <a name="ManagedDevopsPoolTimeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#create ManagedDevopsPool#create}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#delete ManagedDevopsPool#delete}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#read ManagedDevopsPool#read}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#update ManagedDevopsPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#create ManagedDevopsPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#delete ManagedDevopsPool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#read ManagedDevopsPool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#update ManagedDevopsPool#update}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabric <a name="ManagedDevopsPoolVirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabric {
    IResolvable|ManagedDevopsPoolVirtualMachineScaleSetFabricImage[] Image,
    string SkuName,
    string OsDiskStorageAccountType = null,
    ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity Security = null,
    ManagedDevopsPoolVirtualMachineScaleSetFabricStorage Storage = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.image">Image</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]</code> | image block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#sku_name ManagedDevopsPool#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.osDiskStorageAccountType">OsDiskStorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#os_disk_storage_account_type ManagedDevopsPool#os_disk_storage_account_type}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.security">Security</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | security block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#subnet_id ManagedDevopsPool#subnet_id}. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.image"></a>

```csharp
public IResolvable|ManagedDevopsPoolVirtualMachineScaleSetFabricImage[] Image { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#image ManagedDevopsPool#image}

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#sku_name ManagedDevopsPool#sku_name}.

---

##### `OsDiskStorageAccountType`<sup>Optional</sup> <a name="OsDiskStorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.osDiskStorageAccountType"></a>

```csharp
public string OsDiskStorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#os_disk_storage_account_type ManagedDevopsPool#os_disk_storage_account_type}.

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.security"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity Security { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#security ManagedDevopsPool#security}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.storage"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#storage ManagedDevopsPool#storage}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#subnet_id ManagedDevopsPool#subnet_id}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricImage <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricImage {
    string[] Aliases = null,
    string Buffer = null,
    string Id = null,
    string WellKnownImageName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.aliases">Aliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#aliases ManagedDevopsPool#aliases}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.buffer">Buffer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#buffer ManagedDevopsPool#buffer}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.wellKnownImageName">WellKnownImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#well_known_image_name ManagedDevopsPool#well_known_image_name}. |

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.aliases"></a>

```csharp
public string[] Aliases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#aliases ManagedDevopsPool#aliases}.

---

##### `Buffer`<sup>Optional</sup> <a name="Buffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.buffer"></a>

```csharp
public string Buffer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#buffer ManagedDevopsPool#buffer}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `WellKnownImageName`<sup>Optional</sup> <a name="WellKnownImageName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.wellKnownImageName"></a>

```csharp
public string WellKnownImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#well_known_image_name ManagedDevopsPool#well_known_image_name}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity {
    bool|IResolvable InteractiveLogonEnabled = null,
    ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement KeyVaultManagement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.interactiveLogonEnabled">InteractiveLogonEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#interactive_logon_enabled ManagedDevopsPool#interactive_logon_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.keyVaultManagement">KeyVaultManagement</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | key_vault_management block. |

---

##### `InteractiveLogonEnabled`<sup>Optional</sup> <a name="InteractiveLogonEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.interactiveLogonEnabled"></a>

```csharp
public bool|IResolvable InteractiveLogonEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#interactive_logon_enabled ManagedDevopsPool#interactive_logon_enabled}.

---

##### `KeyVaultManagement`<sup>Optional</sup> <a name="KeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.keyVaultManagement"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement KeyVaultManagement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

key_vault_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#key_vault_management ManagedDevopsPool#key_vault_management}

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement {
    string[] KeyVaultCertificateIds,
    string CertificateStoreLocation = null,
    string CertificateStoreName = null,
    bool|IResolvable KeyExportEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyVaultCertificateIds">KeyVaultCertificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#key_vault_certificate_ids ManagedDevopsPool#key_vault_certificate_ids}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreLocation">CertificateStoreLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#certificate_store_location ManagedDevopsPool#certificate_store_location}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreName">CertificateStoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#certificate_store_name ManagedDevopsPool#certificate_store_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyExportEnabled">KeyExportEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#key_export_enabled ManagedDevopsPool#key_export_enabled}. |

---

##### `KeyVaultCertificateIds`<sup>Required</sup> <a name="KeyVaultCertificateIds" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyVaultCertificateIds"></a>

```csharp
public string[] KeyVaultCertificateIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#key_vault_certificate_ids ManagedDevopsPool#key_vault_certificate_ids}.

---

##### `CertificateStoreLocation`<sup>Optional</sup> <a name="CertificateStoreLocation" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreLocation"></a>

```csharp
public string CertificateStoreLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#certificate_store_location ManagedDevopsPool#certificate_store_location}.

---

##### `CertificateStoreName`<sup>Optional</sup> <a name="CertificateStoreName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreName"></a>

```csharp
public string CertificateStoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#certificate_store_name ManagedDevopsPool#certificate_store_name}.

---

##### `KeyExportEnabled`<sup>Optional</sup> <a name="KeyExportEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyExportEnabled"></a>

```csharp
public bool|IResolvable KeyExportEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#key_export_enabled ManagedDevopsPool#key_export_enabled}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricStorage <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricStorage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricStorage {
    double DiskSizeInGb,
    string Caching = null,
    string DriveLetter = null,
    string StorageAccountType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.diskSizeInGb">DiskSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#disk_size_in_gb ManagedDevopsPool#disk_size_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#caching ManagedDevopsPool#caching}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.driveLetter">DriveLetter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#drive_letter ManagedDevopsPool#drive_letter}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#storage_account_type ManagedDevopsPool#storage_account_type}. |

---

##### `DiskSizeInGb`<sup>Required</sup> <a name="DiskSizeInGb" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.diskSizeInGb"></a>

```csharp
public double DiskSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#disk_size_in_gb ManagedDevopsPool#disk_size_in_gb}.

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#caching ManagedDevopsPool#caching}.

---

##### `DriveLetter`<sup>Optional</sup> <a name="DriveLetter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.driveLetter"></a>

```csharp
public string DriveLetter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#drive_letter ManagedDevopsPool#drive_letter}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/managed_devops_pool#storage_account_type ManagedDevopsPool#storage_account_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDevopsPoolAzureDevopsOrganizationOrganizationList <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganizationList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganizationOrganizationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get"></a>

```csharp
private ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolAzureDevopsOrganizationOrganization[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]

---


### ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjects` <a name="ResetProjects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resetProjects"></a>

```csharp
private void ResetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects">Projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelismInput"></a>

```csharp
public double ParallelismInput { get; }
```

- *Type:* double

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projectsInput"></a>

```csharp
public string[] ProjectsInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects"></a>

```csharp
public string[] Projects { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolAzureDevopsOrganizationOrganization InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization">PutOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission">PutPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOrganization` <a name="PutOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization"></a>

```csharp
private void PutOrganization(IResolvable|ManagedDevopsPoolAzureDevopsOrganizationOrganization[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]

---

##### `PutPermission` <a name="PutPermission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission"></a>

```csharp
private void PutPermission(ManagedDevopsPoolAzureDevopsOrganizationPermission Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization">Organization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList">ManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission">Permission</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permissionInput">PermissionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationOrganizationList Organization { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList">ManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a>

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference Permission { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference</a>

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organizationInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolAzureDevopsOrganizationOrganization[] OrganizationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permissionInput"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationPermission PermissionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroups` <a name="ResetGroups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetUsers"></a>

```csharp
private void ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.usersInput">UsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.usersInput"></a>

```csharp
public string[] UsersInput { get; }
```

- *Type:* string[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount">PutAdministratorAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resetAdministratorAccount">ResetAdministratorAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdministratorAccount` <a name="PutAdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount"></a>

```csharp
private void PutAdministratorAccount(ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---

##### `ResetAdministratorAccount` <a name="ResetAdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resetAdministratorAccount"></a>

```csharp
private void ResetAdministratorAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount">AdministratorAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccountInput">AdministratorAccountInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdministratorAccount`<sup>Required</sup> <a name="AdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference AdministratorAccount { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference</a>

---

##### `AdministratorAccountInput`<sup>Optional</sup> <a name="AdministratorAccountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccountInput"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount AdministratorAccountInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolAzureDevopsOrganizationPermission InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---


### ManagedDevopsPoolIdentityOutputReference <a name="ManagedDevopsPoolIdentityOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

---


### ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference <a name="ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference">ResetPredictionPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictionPreference` <a name="ResetPredictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference"></a>

```csharp
private void ResetPredictionPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput">PredictionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">PredictionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictionPreferenceInput`<sup>Optional</sup> <a name="PredictionPreferenceInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput"></a>

```csharp
public string PredictionPreferenceInput { get; }
```

- *Type:* string

---

##### `PredictionPreference`<sup>Required</sup> <a name="PredictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```csharp
public string PredictionPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule">PutFridaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule">PutMondaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule">PutSaturdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule">PutSundaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule">PutThursdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule">PutTuesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule">PutWednesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetAllWeekSchedule">ResetAllWeekSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetFridaySchedule">ResetFridaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetMondaySchedule">ResetMondaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSaturdaySchedule">ResetSaturdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSundaySchedule">ResetSundaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetThursdaySchedule">ResetThursdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTimeZoneName">ResetTimeZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTuesdaySchedule">ResetTuesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetWednesdaySchedule">ResetWednesdaySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFridaySchedule` <a name="PutFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule"></a>

```csharp
private void PutFridaySchedule(IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]

---

##### `PutMondaySchedule` <a name="PutMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule"></a>

```csharp
private void PutMondaySchedule(IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]

---

##### `PutSaturdaySchedule` <a name="PutSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule"></a>

```csharp
private void PutSaturdaySchedule(IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]

---

##### `PutSundaySchedule` <a name="PutSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule"></a>

```csharp
private void PutSundaySchedule(IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]

---

##### `PutThursdaySchedule` <a name="PutThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule"></a>

```csharp
private void PutThursdaySchedule(IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]

---

##### `PutTuesdaySchedule` <a name="PutTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule"></a>

```csharp
private void PutTuesdaySchedule(IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]

---

##### `PutWednesdaySchedule` <a name="PutWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule"></a>

```csharp
private void PutWednesdaySchedule(IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]

---

##### `ResetAllWeekSchedule` <a name="ResetAllWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetAllWeekSchedule"></a>

```csharp
private void ResetAllWeekSchedule()
```

##### `ResetFridaySchedule` <a name="ResetFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetFridaySchedule"></a>

```csharp
private void ResetFridaySchedule()
```

##### `ResetMondaySchedule` <a name="ResetMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetMondaySchedule"></a>

```csharp
private void ResetMondaySchedule()
```

##### `ResetSaturdaySchedule` <a name="ResetSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSaturdaySchedule"></a>

```csharp
private void ResetSaturdaySchedule()
```

##### `ResetSundaySchedule` <a name="ResetSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSundaySchedule"></a>

```csharp
private void ResetSundaySchedule()
```

##### `ResetThursdaySchedule` <a name="ResetThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetThursdaySchedule"></a>

```csharp
private void ResetThursdaySchedule()
```

##### `ResetTimeZoneName` <a name="ResetTimeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTimeZoneName"></a>

```csharp
private void ResetTimeZoneName()
```

##### `ResetTuesdaySchedule` <a name="ResetTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTuesdaySchedule"></a>

```csharp
private void ResetTuesdaySchedule()
```

##### `ResetWednesdaySchedule` <a name="ResetWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetWednesdaySchedule"></a>

```csharp
private void ResetWednesdaySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule">FridaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule">MondaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule">SaturdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule">SundaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule">ThursdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">TuesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">WednesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput">AllWeekScheduleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridayScheduleInput">FridayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondayScheduleInput">MondayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput">SaturdayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundayScheduleInput">SundayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput">ThursdayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneNameInput">TimeZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput">TuesdayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput">WednesdayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule">AllWeekSchedule</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName">TimeZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FridaySchedule`<sup>Required</sup> <a name="FridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList FridaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a>

---

##### `MondaySchedule`<sup>Required</sup> <a name="MondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList MondaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a>

---

##### `SaturdaySchedule`<sup>Required</sup> <a name="SaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList SaturdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `SundaySchedule`<sup>Required</sup> <a name="SundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList SundaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a>

---

##### `ThursdaySchedule`<sup>Required</sup> <a name="ThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList ThursdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `TuesdaySchedule`<sup>Required</sup> <a name="TuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList TuesdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `WednesdaySchedule`<sup>Required</sup> <a name="WednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList WednesdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `AllWeekScheduleInput`<sup>Optional</sup> <a name="AllWeekScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput"></a>

```csharp
public double AllWeekScheduleInput { get; }
```

- *Type:* double

---

##### `FridayScheduleInput`<sup>Optional</sup> <a name="FridayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[] FridayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]

---

##### `MondayScheduleInput`<sup>Optional</sup> <a name="MondayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[] MondayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]

---

##### `SaturdayScheduleInput`<sup>Optional</sup> <a name="SaturdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[] SaturdayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]

---

##### `SundayScheduleInput`<sup>Optional</sup> <a name="SundayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[] SundayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]

---

##### `ThursdayScheduleInput`<sup>Optional</sup> <a name="ThursdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[] ThursdayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]

---

##### `TimeZoneNameInput`<sup>Optional</sup> <a name="TimeZoneNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneNameInput"></a>

```csharp
public string TimeZoneNameInput { get; }
```

- *Type:* string

---

##### `TuesdayScheduleInput`<sup>Optional</sup> <a name="TuesdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[] TuesdayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]

---

##### `WednesdayScheduleInput`<sup>Optional</sup> <a name="WednesdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[] WednesdayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]

---

##### `AllWeekSchedule`<sup>Required</sup> <a name="AllWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```csharp
public double AllWeekSchedule { get; }
```

- *Type:* double

---

##### `TimeZoneName`<sup>Required</sup> <a name="TimeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```csharp
public string TimeZoneName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentOutputReference <a name="ManagedDevopsPoolStatefulAgentOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatefulAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction">PutAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction">PutManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetAutomaticResourcePrediction">ResetAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetGracePeriodTimeSpan">ResetGracePeriodTimeSpan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetManualResourcePrediction">ResetManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetMaximumAgentLifetime">ResetMaximumAgentLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomaticResourcePrediction` <a name="PutAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction"></a>

```csharp
private void PutAutomaticResourcePrediction(ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---

##### `PutManualResourcePrediction` <a name="PutManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction"></a>

```csharp
private void PutManualResourcePrediction(ManagedDevopsPoolStatefulAgentManualResourcePrediction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---

##### `ResetAutomaticResourcePrediction` <a name="ResetAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetAutomaticResourcePrediction"></a>

```csharp
private void ResetAutomaticResourcePrediction()
```

##### `ResetGracePeriodTimeSpan` <a name="ResetGracePeriodTimeSpan" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetGracePeriodTimeSpan"></a>

```csharp
private void ResetGracePeriodTimeSpan()
```

##### `ResetManualResourcePrediction` <a name="ResetManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetManualResourcePrediction"></a>

```csharp
private void ResetManualResourcePrediction()
```

##### `ResetMaximumAgentLifetime` <a name="ResetMaximumAgentLifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetMaximumAgentLifetime"></a>

```csharp
private void ResetMaximumAgentLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction">AutomaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction">ManualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePredictionInput">AutomaticResourcePredictionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpanInput">GracePeriodTimeSpanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePredictionInput">ManualResourcePredictionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetimeInput">MaximumAgentLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan">GracePeriodTimeSpan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime">MaximumAgentLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticResourcePrediction`<sup>Required</sup> <a name="AutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction"></a>

```csharp
public ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference AutomaticResourcePrediction { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference</a>

---

##### `ManualResourcePrediction`<sup>Required</sup> <a name="ManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference ManualResourcePrediction { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference</a>

---

##### `AutomaticResourcePredictionInput`<sup>Optional</sup> <a name="AutomaticResourcePredictionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePredictionInput"></a>

```csharp
public ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction AutomaticResourcePredictionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---

##### `GracePeriodTimeSpanInput`<sup>Optional</sup> <a name="GracePeriodTimeSpanInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpanInput"></a>

```csharp
public string GracePeriodTimeSpanInput { get; }
```

- *Type:* string

---

##### `ManualResourcePredictionInput`<sup>Optional</sup> <a name="ManualResourcePredictionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePredictionInput"></a>

```csharp
public ManagedDevopsPoolStatefulAgentManualResourcePrediction ManualResourcePredictionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---

##### `MaximumAgentLifetimeInput`<sup>Optional</sup> <a name="MaximumAgentLifetimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetimeInput"></a>

```csharp
public string MaximumAgentLifetimeInput { get; }
```

- *Type:* string

---

##### `GracePeriodTimeSpan`<sup>Required</sup> <a name="GracePeriodTimeSpan" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan"></a>

```csharp
public string GracePeriodTimeSpan { get; }
```

- *Type:* string

---

##### `MaximumAgentLifetime`<sup>Required</sup> <a name="MaximumAgentLifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime"></a>

```csharp
public string MaximumAgentLifetime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolStatefulAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

---


### ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference <a name="ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference">ResetPredictionPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictionPreference` <a name="ResetPredictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference"></a>

```csharp
private void ResetPredictionPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput">PredictionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">PredictionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictionPreferenceInput`<sup>Optional</sup> <a name="PredictionPreferenceInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput"></a>

```csharp
public string PredictionPreferenceInput { get; }
```

- *Type:* string

---

##### `PredictionPreference`<sup>Required</sup> <a name="PredictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```csharp
public string PredictionPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule">PutFridaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule">PutMondaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule">PutSaturdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule">PutSundaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule">PutThursdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule">PutTuesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule">PutWednesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetAllWeekSchedule">ResetAllWeekSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetFridaySchedule">ResetFridaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetMondaySchedule">ResetMondaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSaturdaySchedule">ResetSaturdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSundaySchedule">ResetSundaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetThursdaySchedule">ResetThursdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTimeZoneName">ResetTimeZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTuesdaySchedule">ResetTuesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetWednesdaySchedule">ResetWednesdaySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFridaySchedule` <a name="PutFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule"></a>

```csharp
private void PutFridaySchedule(IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]

---

##### `PutMondaySchedule` <a name="PutMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule"></a>

```csharp
private void PutMondaySchedule(IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]

---

##### `PutSaturdaySchedule` <a name="PutSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule"></a>

```csharp
private void PutSaturdaySchedule(IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]

---

##### `PutSundaySchedule` <a name="PutSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule"></a>

```csharp
private void PutSundaySchedule(IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]

---

##### `PutThursdaySchedule` <a name="PutThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule"></a>

```csharp
private void PutThursdaySchedule(IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]

---

##### `PutTuesdaySchedule` <a name="PutTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule"></a>

```csharp
private void PutTuesdaySchedule(IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]

---

##### `PutWednesdaySchedule` <a name="PutWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule"></a>

```csharp
private void PutWednesdaySchedule(IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]

---

##### `ResetAllWeekSchedule` <a name="ResetAllWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetAllWeekSchedule"></a>

```csharp
private void ResetAllWeekSchedule()
```

##### `ResetFridaySchedule` <a name="ResetFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetFridaySchedule"></a>

```csharp
private void ResetFridaySchedule()
```

##### `ResetMondaySchedule` <a name="ResetMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetMondaySchedule"></a>

```csharp
private void ResetMondaySchedule()
```

##### `ResetSaturdaySchedule` <a name="ResetSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSaturdaySchedule"></a>

```csharp
private void ResetSaturdaySchedule()
```

##### `ResetSundaySchedule` <a name="ResetSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSundaySchedule"></a>

```csharp
private void ResetSundaySchedule()
```

##### `ResetThursdaySchedule` <a name="ResetThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetThursdaySchedule"></a>

```csharp
private void ResetThursdaySchedule()
```

##### `ResetTimeZoneName` <a name="ResetTimeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTimeZoneName"></a>

```csharp
private void ResetTimeZoneName()
```

##### `ResetTuesdaySchedule` <a name="ResetTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTuesdaySchedule"></a>

```csharp
private void ResetTuesdaySchedule()
```

##### `ResetWednesdaySchedule` <a name="ResetWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetWednesdaySchedule"></a>

```csharp
private void ResetWednesdaySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule">FridaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule">MondaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule">SaturdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule">SundaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule">ThursdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">TuesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">WednesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput">AllWeekScheduleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridayScheduleInput">FridayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondayScheduleInput">MondayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput">SaturdayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundayScheduleInput">SundayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput">ThursdayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneNameInput">TimeZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput">TuesdayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput">WednesdayScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule">AllWeekSchedule</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName">TimeZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FridaySchedule`<sup>Required</sup> <a name="FridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList FridaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a>

---

##### `MondaySchedule`<sup>Required</sup> <a name="MondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList MondaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a>

---

##### `SaturdaySchedule`<sup>Required</sup> <a name="SaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList SaturdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `SundaySchedule`<sup>Required</sup> <a name="SundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList SundaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a>

---

##### `ThursdaySchedule`<sup>Required</sup> <a name="ThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList ThursdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `TuesdaySchedule`<sup>Required</sup> <a name="TuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList TuesdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `WednesdaySchedule`<sup>Required</sup> <a name="WednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList WednesdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `AllWeekScheduleInput`<sup>Optional</sup> <a name="AllWeekScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput"></a>

```csharp
public double AllWeekScheduleInput { get; }
```

- *Type:* double

---

##### `FridayScheduleInput`<sup>Optional</sup> <a name="FridayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[] FridayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]

---

##### `MondayScheduleInput`<sup>Optional</sup> <a name="MondayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[] MondayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]

---

##### `SaturdayScheduleInput`<sup>Optional</sup> <a name="SaturdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[] SaturdayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]

---

##### `SundayScheduleInput`<sup>Optional</sup> <a name="SundayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[] SundayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]

---

##### `ThursdayScheduleInput`<sup>Optional</sup> <a name="ThursdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[] ThursdayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]

---

##### `TimeZoneNameInput`<sup>Optional</sup> <a name="TimeZoneNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneNameInput"></a>

```csharp
public string TimeZoneNameInput { get; }
```

- *Type:* string

---

##### `TuesdayScheduleInput`<sup>Optional</sup> <a name="TuesdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[] TuesdayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]

---

##### `WednesdayScheduleInput`<sup>Optional</sup> <a name="WednesdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[] WednesdayScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]

---

##### `AllWeekSchedule`<sup>Required</sup> <a name="AllWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```csharp
public double AllWeekSchedule { get; }
```

- *Type:* double

---

##### `TimeZoneName`<sup>Required</sup> <a name="TimeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```csharp
public string TimeZoneName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```csharp
private ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentOutputReference <a name="ManagedDevopsPoolStatelessAgentOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolStatelessAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction">PutAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction">PutManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetAutomaticResourcePrediction">ResetAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetManualResourcePrediction">ResetManualResourcePrediction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomaticResourcePrediction` <a name="PutAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction"></a>

```csharp
private void PutAutomaticResourcePrediction(ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---

##### `PutManualResourcePrediction` <a name="PutManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction"></a>

```csharp
private void PutManualResourcePrediction(ManagedDevopsPoolStatelessAgentManualResourcePrediction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---

##### `ResetAutomaticResourcePrediction` <a name="ResetAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetAutomaticResourcePrediction"></a>

```csharp
private void ResetAutomaticResourcePrediction()
```

##### `ResetManualResourcePrediction` <a name="ResetManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetManualResourcePrediction"></a>

```csharp
private void ResetManualResourcePrediction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction">AutomaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction">ManualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePredictionInput">AutomaticResourcePredictionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePredictionInput">ManualResourcePredictionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticResourcePrediction`<sup>Required</sup> <a name="AutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction"></a>

```csharp
public ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference AutomaticResourcePrediction { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference</a>

---

##### `ManualResourcePrediction`<sup>Required</sup> <a name="ManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference ManualResourcePrediction { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference</a>

---

##### `AutomaticResourcePredictionInput`<sup>Optional</sup> <a name="AutomaticResourcePredictionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePredictionInput"></a>

```csharp
public ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction AutomaticResourcePredictionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---

##### `ManualResourcePredictionInput`<sup>Optional</sup> <a name="ManualResourcePredictionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePredictionInput"></a>

```csharp
public ManagedDevopsPoolStatelessAgentManualResourcePrediction ManualResourcePredictionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolStatelessAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

---


### ManagedDevopsPoolTimeoutsOutputReference <a name="ManagedDevopsPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricImageList <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImageList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get"></a>

```csharp
private ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolVirtualMachineScaleSetFabricImage[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetBuffer">ResetBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetWellKnownImageName">ResetWellKnownImageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAliases` <a name="ResetAliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetBuffer` <a name="ResetBuffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetBuffer"></a>

```csharp
private void ResetBuffer()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetWellKnownImageName` <a name="ResetWellKnownImageName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetWellKnownImageName"></a>

```csharp
private void ResetWellKnownImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliasesInput">AliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.bufferInput">BufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageNameInput">WellKnownImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer">Buffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName">WellKnownImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliasesInput"></a>

```csharp
public string[] AliasesInput { get; }
```

- *Type:* string[]

---

##### `BufferInput`<sup>Optional</sup> <a name="BufferInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.bufferInput"></a>

```csharp
public string BufferInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `WellKnownImageNameInput`<sup>Optional</sup> <a name="WellKnownImageNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageNameInput"></a>

```csharp
public string WellKnownImageNameInput { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `Buffer`<sup>Required</sup> <a name="Buffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer"></a>

```csharp
public string Buffer { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WellKnownImageName`<sup>Required</sup> <a name="WellKnownImageName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName"></a>

```csharp
public string WellKnownImageName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedDevopsPoolVirtualMachineScaleSetFabricImage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetOsDiskStorageAccountType">ResetOsDiskStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSecurity">ResetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImage` <a name="PutImage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage"></a>

```csharp
private void PutImage(IResolvable|ManagedDevopsPoolVirtualMachineScaleSetFabricImage[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity"></a>

```csharp
private void PutSecurity(ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage"></a>

```csharp
private void PutStorage(ManagedDevopsPoolVirtualMachineScaleSetFabricStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---

##### `ResetOsDiskStorageAccountType` <a name="ResetOsDiskStorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetOsDiskStorageAccountType"></a>

```csharp
private void ResetOsDiskStorageAccountType()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSecurity"></a>

```csharp
private void ResetSecurity()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetStorage"></a>

```csharp
private void ResetStorage()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList">ManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security">Security</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.imageInput">ImageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountTypeInput">OsDiskStorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.securityInput">SecurityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType">OsDiskStorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricImageList Image { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList">ManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference Security { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.imageInput"></a>

```csharp
public IResolvable|ManagedDevopsPoolVirtualMachineScaleSetFabricImage[] ImageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]

---

##### `OsDiskStorageAccountTypeInput`<sup>Optional</sup> <a name="OsDiskStorageAccountTypeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountTypeInput"></a>

```csharp
public string OsDiskStorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.securityInput"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity SecurityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storageInput"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `OsDiskStorageAccountType`<sup>Required</sup> <a name="OsDiskStorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType"></a>

```csharp
public string OsDiskStorageAccountType { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabric InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreLocation">ResetCertificateStoreLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreName">ResetCertificateStoreName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetKeyExportEnabled">ResetKeyExportEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStoreLocation` <a name="ResetCertificateStoreLocation" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreLocation"></a>

```csharp
private void ResetCertificateStoreLocation()
```

##### `ResetCertificateStoreName` <a name="ResetCertificateStoreName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreName"></a>

```csharp
private void ResetCertificateStoreName()
```

##### `ResetKeyExportEnabled` <a name="ResetKeyExportEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetKeyExportEnabled"></a>

```csharp
private void ResetKeyExportEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocationInput">CertificateStoreLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreNameInput">CertificateStoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabledInput">KeyExportEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIdsInput">KeyVaultCertificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation">CertificateStoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName">CertificateStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled">KeyExportEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds">KeyVaultCertificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateStoreLocationInput`<sup>Optional</sup> <a name="CertificateStoreLocationInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocationInput"></a>

```csharp
public string CertificateStoreLocationInput { get; }
```

- *Type:* string

---

##### `CertificateStoreNameInput`<sup>Optional</sup> <a name="CertificateStoreNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreNameInput"></a>

```csharp
public string CertificateStoreNameInput { get; }
```

- *Type:* string

---

##### `KeyExportEnabledInput`<sup>Optional</sup> <a name="KeyExportEnabledInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabledInput"></a>

```csharp
public bool|IResolvable KeyExportEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyVaultCertificateIdsInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIdsInput"></a>

```csharp
public string[] KeyVaultCertificateIdsInput { get; }
```

- *Type:* string[]

---

##### `CertificateStoreLocation`<sup>Required</sup> <a name="CertificateStoreLocation" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation"></a>

```csharp
public string CertificateStoreLocation { get; }
```

- *Type:* string

---

##### `CertificateStoreName`<sup>Required</sup> <a name="CertificateStoreName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName"></a>

```csharp
public string CertificateStoreName { get; }
```

- *Type:* string

---

##### `KeyExportEnabled`<sup>Required</sup> <a name="KeyExportEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled"></a>

```csharp
public bool|IResolvable KeyExportEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyVaultCertificateIds`<sup>Required</sup> <a name="KeyVaultCertificateIds" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds"></a>

```csharp
public string[] KeyVaultCertificateIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement">PutKeyVaultManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetInteractiveLogonEnabled">ResetInteractiveLogonEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetKeyVaultManagement">ResetKeyVaultManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyVaultManagement` <a name="PutKeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement"></a>

```csharp
private void PutKeyVaultManagement(ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---

##### `ResetInteractiveLogonEnabled` <a name="ResetInteractiveLogonEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetInteractiveLogonEnabled"></a>

```csharp
private void ResetInteractiveLogonEnabled()
```

##### `ResetKeyVaultManagement` <a name="ResetKeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetKeyVaultManagement"></a>

```csharp
private void ResetKeyVaultManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement">KeyVaultManagement</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabledInput">InteractiveLogonEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagementInput">KeyVaultManagementInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled">InteractiveLogonEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyVaultManagement`<sup>Required</sup> <a name="KeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference KeyVaultManagement { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference</a>

---

##### `InteractiveLogonEnabledInput`<sup>Optional</sup> <a name="InteractiveLogonEnabledInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabledInput"></a>

```csharp
public bool|IResolvable InteractiveLogonEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyVaultManagementInput`<sup>Optional</sup> <a name="KeyVaultManagementInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagementInput"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement KeyVaultManagementInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---

##### `InteractiveLogonEnabled`<sup>Required</sup> <a name="InteractiveLogonEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled"></a>

```csharp
public bool|IResolvable InteractiveLogonEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetDriveLetter">ResetDriveLetter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaching` <a name="ResetCaching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetCaching"></a>

```csharp
private void ResetCaching()
```

##### `ResetDriveLetter` <a name="ResetDriveLetter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetDriveLetter"></a>

```csharp
private void ResetDriveLetter()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetStorageAccountType"></a>

```csharp
private void ResetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGbInput">DiskSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetterInput">DriveLetterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb">DiskSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter">DriveLetter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `DiskSizeInGbInput`<sup>Optional</sup> <a name="DiskSizeInGbInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGbInput"></a>

```csharp
public double DiskSizeInGbInput { get; }
```

- *Type:* double

---

##### `DriveLetterInput`<sup>Optional</sup> <a name="DriveLetterInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetterInput"></a>

```csharp
public string DriveLetterInput { get; }
```

- *Type:* string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `DiskSizeInGb`<sup>Required</sup> <a name="DiskSizeInGb" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb"></a>

```csharp
public double DiskSizeInGb { get; }
```

- *Type:* double

---

##### `DriveLetter`<sup>Required</sup> <a name="DriveLetter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter"></a>

```csharp
public string DriveLetter { get; }
```

- *Type:* string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue"></a>

```csharp
public ManagedDevopsPoolVirtualMachineScaleSetFabricStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---



