# `machineLearningWorkspaceNetworkOutboundRuleServiceTag` Submodule <a name="`machineLearningWorkspaceNetworkOutboundRuleServiceTag` Submodule" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningWorkspaceNetworkOutboundRuleServiceTag <a name="MachineLearningWorkspaceNetworkOutboundRuleServiceTag" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag azurerm_machine_learning_workspace_network_outbound_rule_service_tag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MachineLearningWorkspaceNetworkOutboundRuleServiceTag(Construct Scope, string Id, MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig">MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig">MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.putTimeouts"></a>

```csharp
private void PutTimeouts(MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MachineLearningWorkspaceNetworkOutboundRuleServiceTag resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MachineLearningWorkspaceNetworkOutboundRuleServiceTag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MachineLearningWorkspaceNetworkOutboundRuleServiceTag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MachineLearningWorkspaceNetworkOutboundRuleServiceTag.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MachineLearningWorkspaceNetworkOutboundRuleServiceTag.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MachineLearningWorkspaceNetworkOutboundRuleServiceTag resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningWorkspaceNetworkOutboundRuleServiceTag to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningWorkspaceNetworkOutboundRuleServiceTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MachineLearningWorkspaceNetworkOutboundRuleServiceTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.portRangesInput">PortRangesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.portRanges">PortRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.timeouts"></a>

```csharp
public MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.portRangesInput"></a>

```csharp
public string PortRangesInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.timeoutsInput"></a>

```csharp
public IResolvable|MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.portRanges"></a>

```csharp
public string PortRanges { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig <a name="MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string PortRanges,
    string Protocol,
    string ServiceTag,
    string WorkspaceId,
    string Id = null,
    MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#name MachineLearningWorkspaceNetworkOutboundRuleServiceTag#name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.portRanges">PortRanges</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#port_ranges MachineLearningWorkspaceNetworkOutboundRuleServiceTag#port_ranges}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#protocol MachineLearningWorkspaceNetworkOutboundRuleServiceTag#protocol}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#service_tag MachineLearningWorkspaceNetworkOutboundRuleServiceTag#service_tag}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#workspace_id MachineLearningWorkspaceNetworkOutboundRuleServiceTag#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#id MachineLearningWorkspaceNetworkOutboundRuleServiceTag#id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#name MachineLearningWorkspaceNetworkOutboundRuleServiceTag#name}.

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.portRanges"></a>

```csharp
public string PortRanges { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#port_ranges MachineLearningWorkspaceNetworkOutboundRuleServiceTag#port_ranges}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#protocol MachineLearningWorkspaceNetworkOutboundRuleServiceTag#protocol}.

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#service_tag MachineLearningWorkspaceNetworkOutboundRuleServiceTag#service_tag}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#workspace_id MachineLearningWorkspaceNetworkOutboundRuleServiceTag#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#id MachineLearningWorkspaceNetworkOutboundRuleServiceTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagConfig.property.timeouts"></a>

```csharp
public MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#timeouts MachineLearningWorkspaceNetworkOutboundRuleServiceTag#timeouts}

---

### MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts <a name="MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#create MachineLearningWorkspaceNetworkOutboundRuleServiceTag#create}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#delete MachineLearningWorkspaceNetworkOutboundRuleServiceTag#delete}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#read MachineLearningWorkspaceNetworkOutboundRuleServiceTag#read}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#update MachineLearningWorkspaceNetworkOutboundRuleServiceTag#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#create MachineLearningWorkspaceNetworkOutboundRuleServiceTag#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#delete MachineLearningWorkspaceNetworkOutboundRuleServiceTag#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#read MachineLearningWorkspaceNetworkOutboundRuleServiceTag#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/machine_learning_workspace_network_outbound_rule_service_tag#update MachineLearningWorkspaceNetworkOutboundRuleServiceTag#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference <a name="MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleServiceTag.MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts">MachineLearningWorkspaceNetworkOutboundRuleServiceTagTimeouts</a>

---



